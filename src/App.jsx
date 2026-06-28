import { useEffect, useMemo, useState } from "react";
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
import AddProject from "./components/AddProject";
import ProjectRow from "./components/ProjectRow";
import EmptyState from "./components/EmptyState";

function App() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");

  // ===========================
  // Fetch Projects
  // ===========================

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

  // ===========================
  // Add Project
  // ===========================

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

      await fetchProjects();
    } catch (err) {
      console.error(err);
      alert("Unable to add project.");
    }
  };

  // ===========================
  // Delete Project
  // ===========================

  const handleDelete = async (id) => {
    const ok = window.confirm(
      "Delete this project?"
    );

    if (!ok) return;

    try {
      await deleteDoc(doc(db, "projects", id));

      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  // ===========================
  // Search
  // ===========================

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      return (
        project.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        project.platform
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        project.url
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    });
  }, [projects, search]);

  // ===========================
  // Stats
  // ===========================

  const totalProjects = projects.length;

  const onlineProjects = projects.filter(
    (p) => p.status === "Online"
  ).length;

  const offlineProjects = projects.filter(
    (p) =>
      p.status !== "Online" &&
      p.status !== "Never Run"
  ).length;

  const neverRunProjects = projects.filter(
    (p) => p.status === "Never Run"
  ).length;

  return (
    <div className="app">

      <Navbar />

      <div className="topbar">

        <div>

          <h1>Infrastructure</h1>

          <p>
            Manage all your cloud projects from
            one place.
          </p>

        </div>

        <input
          className="global-search"
          placeholder="Search project..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      <div className="stats">

        <div className="stat">

          <span>Total</span>

          <h2>{totalProjects}</h2>

        </div>

        <div className="stat">

          <span>Online</span>

          <h2>{onlineProjects}</h2>

        </div>

        <div className="stat">

          <span>Offline</span>

          <h2>{offlineProjects}</h2>

        </div>

        <div className="stat">

          <span>Never Run</span>

          <h2>{neverRunProjects}</h2>

        </div>

      </div>

      <AddProject onAdd={handleAdd} />

      <section className="workspace">

        {filteredProjects.length === 0 ? (
          <EmptyState />
        ) : (
          filteredProjects.map((project) => (
            <ProjectRow
              key={project.id}
              project={project}
              onDelete={handleDelete}
            />
          ))
        )}

      </section>

    </div>
  );
}

export default App;