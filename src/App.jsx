import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "./firebase/firebase";

import "./App.css";

import Navbar from "./components/Navbar";
import StatsCards from "./components/StatsCards";
import AddProject from "./components/AddProject";
import ProjectList from "./components/ProjectList";
import HealthBanner from "./components/HealthBanner";
import Footer from "./components/Footer";

function App() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");

  const fetchProjects = async () => {
    try {
      const snapshot = await getDocs(collection(db, "projects"));

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProjects(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleAdd = async (project) => {
    try {
      await addDoc(collection(db, "projects"), {
        name: project.name,
        url: project.url,
        platform: project.platform,
        pingEveryDays: 4,
        enabled: true,
        status: "Never Run",
        responseTime: null,
        lastPing: null,
        createdAt: new Date(),
      });

      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "projects", id));

      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  const filteredProjects = projects.filter((project) => {
    const q = search.toLowerCase();

    return (
      project.name.toLowerCase().includes(q) ||
      project.platform.toLowerCase().includes(q) ||
      project.url.toLowerCase().includes(q)
    );
  });

  return (
    <div className="app">

      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <main className="dashboard">

        <section className="hero">

          <h1>Infrastructure</h1>

          <p>
            Manage your cloud projects from one
            beautiful workspace.
          </p>

        </section>

        <StatsCards projects={projects} />

        <AddProject onAdd={handleAdd} />

        <ProjectList
          projects={filteredProjects}
          onDelete={handleDelete}
        />

        <HealthBanner />

        <Footer />

      </main>

    </div>
  );
}

export default App;