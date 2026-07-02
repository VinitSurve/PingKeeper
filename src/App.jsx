import { useEffect, useMemo, useState } from "react";
import "./App.css";
import EditProjectModal from "./components/EditProjectModal";

import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { db } from "./firebase/firebase";

import Navbar from "./components/Navbar";
import StatsCards from "./components/StatsCards";
import AddProject from "./components/AddProject";
import ProjectList from "./components/ProjectList";
import HealthBanner from "./components/HealthBanner";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");
  const [editingProject, setEditingProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "projects"),
      (snapshot) => {
        const data = snapshot.docs.map((docItem) => ({
          id: docItem.id,
          ...docItem.data(),
        }));

        setProjects(data);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleAdd = async (project) => {
  try {
    await addDoc(collection(db, "projects"), {
      name: project.name,
      platform: project.platform,
      url: project.url,

      enabled: true,

      status: "Never Run",
      responseTime: null,
      lastPing: "Never",
      interval: "4 days",

      createdAt: serverTimestamp(),
    });
  } catch (err) {
    console.error(err);
    alert("Couldn't add project.");
  }
};

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "projects", id));
    } catch (err) {
      console.error(err);
      alert("Couldn't delete project.");
    }
  };

  const handleEdit = (project) => {
  setEditingProject(project);
};

  const handleSave = async (updatedProject) => {

  try {

    await updateDoc(

      doc(
        db,
        "projects",
        updatedProject.id
      ),

      {

        name: updatedProject.name,

        platform: updatedProject.platform,

        url: updatedProject.url,

        interval: updatedProject.interval,

      }

    );

    setEditingProject(null);

  }

  catch(error){

    console.error(error);

    alert(
      "Unable to update project."
    );

  }

};

  const filteredProjects = useMemo(() => {
    const value = search.toLowerCase();

    return projects.filter((project) => {
      return (
        project.name?.toLowerCase().includes(value) ||
        project.platform?.toLowerCase().includes(value) ||
        project.url?.toLowerCase().includes(value)
      );
    });
  }, [projects, search]);

  return (
    <div className="app">
      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <main className="dashboard">

        <section className="hero">
          <span className="hero-label">
            Infrastructure Workspace
          </span>

          <h1 className="page-title">
            PingKeeper
          </h1>

          <p className="page-subtitle">
            Keep your free-tier cloud projects alive with
            automated health monitoring.
          </p>
        </section>

        <StatsCards projects={projects} />

        <AddProject onAdd={handleAdd} />

        <ProjectList
          projects={filteredProjects}
          loading={loading}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />

        <HealthBanner />

        <EditProjectModal
          open={!!editingProject}
          project={editingProject}
          onClose={() => setEditingProject(null)}
          onSave={handleSave}
        />

        <Footer />

      </main>
    </div>
  );
}

export default App;