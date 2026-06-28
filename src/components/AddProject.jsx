import { useState } from "react";
import "./AddProject.css";

function AddProject({ onAdd }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [platform, setPlatform] = useState("Supabase");

  const handleSubmit = () => {
    if (!name.trim() || !url.trim()) {
      alert("Please fill all fields.");
      return;
    }

    onAdd({
      name,
      url,
      platform,
    });

    setName("");
    setUrl("");
    setPlatform("Supabase");
  };

  return (
    <section className="add-project">

      <div className="add-header">

        <div>

          <h2>Add Project</h2>

          <p>
            Add a backend endpoint to keep alive.
          </p>

        </div>

        <button
          className="create-btn"
          onClick={handleSubmit}
        >
          + Add
        </button>

      </div>

      <div className="add-grid">

        <div className="field">

          <label>Project Name</label>

          <input
            type="text"
            placeholder="Portfolio Backend"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

        </div>

        <div className="field">

          <label>Platform</label>

          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          >
            <option>Supabase</option>
            <option>Render</option>
            <option>Railway</option>
            <option>Vercel</option>
            <option>Fly.io</option>
            <option>Custom</option>
          </select>

        </div>

        <div className="field full">

          <label>Ping URL</label>

          <input
            type="text"
            placeholder="https://xxxxxxxx.supabase.co"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

        </div>

      </div>

    </section>
  );
}

export default AddProject;