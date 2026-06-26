import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase/firebase";

function App() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [projects, setProjects] = useState([]);

  // Fetch all projects
  const fetchProjects = async () => {
    try {
      const snapshot = await getDocs(collection(db, "projects"));

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProjects(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Load projects when page opens
  useEffect(() => {
    fetchProjects();
  }, []);

  // Add project
  const handleAdd = async () => {
    if (!name || !url) {
      alert("Please fill all fields");
      return;
    }

    try {
      await addDoc(collection(db, "projects"), {
        name,
        url,
        createdAt: new Date(),
      });

      setName("");
      setUrl("");

      fetchProjects();

      alert("Project Added!");
    } catch (error) {
      console.error(error);
      alert("Failed to add project.");
    }
  };

  // Delete project
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "projects", id));
      fetchProjects();
    } catch (error) {
      console.error(error);
      alert("Failed to delete project.");
    }
  };

  return (
    <div>
      <h1>PingKeeper</h1>

      <input
        type="text"
        placeholder="Project Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Project URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleAdd}>Add Project</button>

      <hr />

      <h2>Projects</h2>

      {projects.length === 0 ? (
        <p>No projects added yet.</p>
      ) : (
        projects.map((project) => (
          <div
            key={project.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              width: "500px",
            }}
          >
            <strong>{project.name}</strong>

            <br />

            {project.url}

            <br />
            <br />

            <button onClick={() => handleDelete(project.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;