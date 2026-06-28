import { useState } from "react";
import "./AddProject.css";

function AddProject({ onAdd }) {
  const [name, setName] = useState("");
  const [platform, setPlatform] = useState("Render");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !url.trim()) return;

    onAdd({
      name,
      platform,
      url,
    });

    setName("");
    setPlatform("Render");
    setUrl("");
  };

  return (
    <section className="add-project">

      <div className="add-card">

        <div className="add-header">

          <div>

            <h2>Add New Project</h2>

            <p>
              Monitor and automatically keep your backend alive.
            </p>

          </div>

        </div>

        <form
          className="add-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">

            <label>
              Project Name
            </label>

            <input
              type="text"
              placeholder="Portfolio API"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

          </div>

          <div className="form-group">

            <label>
              Platform
            </label>

            <select
              value={platform}
              onChange={(e) =>
                setPlatform(e.target.value)
              }
            >

              <option>Render</option>
              <option>Railway</option>
              <option>Supabase</option>
              <option>Fly.io</option>
              <option>Vercel</option>

            </select>

          </div>

          <div className="form-group url-field">

            <label>
              Backend URL
            </label>

            <input
              type="url"
              placeholder="https://api.example.com/health"
              value={url}
              onChange={(e) =>
                setUrl(e.target.value)
              }
            />

          </div>

          <button
            type="submit"
            className="add-btn"
          >
            Add Project
          </button>

        </form>

      </div>

    </section>
  );
}

export default AddProject;