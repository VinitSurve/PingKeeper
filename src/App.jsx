import { useMemo, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import StatsCards from "./components/StatsCards";
import AddProject from "./components/AddProject";
import ProjectList from "./components/ProjectList";
import HealthBanner from "./components/HealthBanner";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Portfolio API",
      platform: "Render",
      url: "https://api.vinit.dev/health",
      status: "online",
      latency: "112ms",
      lastPing: "2m ago",
      interval: "15m",
    },
    {
      id: 2,
      name: "Data Scraper",
      platform: "Fly.io",
      url: "https://scraper-prod.fly.dev",
      status: "offline",
      latency: "--",
      lastPing: "14m ago",
      interval: "30m",
    },
    {
      id: 3,
      name: "Auth Service",
      platform: "Railway",
      url: "https://auth.railway.app",
      status: "online",
      latency: "42ms",
      lastPing: "Just now",
      interval: "10m",
    },
    {
      id: 4,
      name: "Marketing Site",
      platform: "Vercel",
      url: "https://pingkeeper.vercel.app",
      status: "online",
      latency: "28ms",
      lastPing: "5m ago",
      interval: "1h",
    },
    {
      id: 5,
      name: "Discord Bot",
      platform: "Render",
      url: "https://bot.onrender.com",
      status: "online",
      latency: "89ms",
      lastPing: "1m ago",
      interval: "30m",
    },
    {
      id: 6,
      name: "Supabase Backend",
      platform: "Supabase",
      url: "https://xxxxx.supabase.co",
      status: "online",
      latency: "51ms",
      lastPing: "3m ago",
      interval: "15m",
    },
  ]);

  const handleAdd = (project) => {
    const newProject = {
      id: Date.now(),
      ...project,
      status: "online",
      latency: "...",
      lastPing: "Just now",
      interval: "15m",
    };

    setProjects((prev) => [newProject, ...prev]);
  };

  const handleDelete = (id) => {
    setProjects((prev) =>
      prev.filter((project) => project.id !== id)
    );
  };

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const value = search.toLowerCase();

      return (
        project.name.toLowerCase().includes(value) ||
        project.url.toLowerCase().includes(value) ||
        project.platform.toLowerCase().includes(value)
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

        <StatsCards
          projects={projects}
        />

        <AddProject
          onAdd={handleAdd}
        />

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