import { useState } from "react";
import "./AddProject.css";

function AddProject({ onAdd }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [platform, setPlatform] = useState("Supabase");

  const handleSubmit = () => {
    if (!name.trim() || !url.trim()) {
      alert("Please fill all fields");
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
    <section className="add-panel">

      <div className="panel-left">

        <span className="panel-badge">
          INFRASTRUCTURE
        </span>

        <h2>
          Add New Project
        </h2>

        <p>
          Connect a backend endpoint that PingKeeper
          should automatically ping every 4 days to
          prevent free-tier suspension.
        </p>

      </div>

      <div className="panel-right">

        <div className="form-grid">

          <div className="field">

            <label>
              Project Name
            </label>

            <input
              type="text"
              placeholder="Portfolio Backend"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

          </div>

          <div className="field">

            <label>
              Platform
            </label>

            <select
              value={platform}
              onChange={(e) =>
                setPlatform(e.target.value)
              }
            >
              <option>Supabase</option>
              <option>Railway</option>
              <option>Render</option>
              <option>Firebase</option>
              <option>Vercel</option>
              <option>Other</option>
            </select>

          </div>

          <div className="field full-width">

            <label>
              Ping URL
            </label>

            <input
              type="text"
              placeholder="https://xxxxxxxx.supabase.co"
              value={url}
              onChange={(e) =>
                setUrl(e.target.value)
              }
            />

          </div>

        </div>

        <button
          className="add-project-btn"
          onClick={handleSubmit}
        >
          + Add Project
        </button>

      </div>

    </section>
  );
}

export default AddProject;