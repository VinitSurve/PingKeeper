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

              <option value="Render">Render</option>
<option value="Railway">Railway</option>
<option value="Vercel">Vercel</option>
<option value="Netlify">Netlify</option>
<option value="Supabase">Supabase Edge Functions</option>
<option value="Firebase Hosting">Firebase Hosting</option>
<option value="Firebase Functions">Firebase Functions</option>
<option value="Fly.io">Fly.io</option>
<option value="Google Cloud Run">Google Cloud Run</option>
<option value="Azure App Service">Azure App Service</option>
<option value="AWS EC2">AWS EC2</option>
<option value="AWS Elastic Beanstalk">AWS Elastic Beanstalk</option>
<option value="DigitalOcean App Platform">DigitalOcean App Platform</option>
<option value="DigitalOcean Droplet">DigitalOcean Droplet</option>
<option value="Heroku">Heroku</option>
<option value="Koyeb">Koyeb</option>
<option value="Oracle Cloud">Oracle Cloud</option>
<option value="Express.js">Express.js</option>
<option value="FastAPI">FastAPI</option>
<option value="Flask">Flask</option>
<option value="NestJS">NestJS</option>
<option value="Django">Django</option>
<option value="Spring Boot">Spring Boot</option>
<option value="ASP.NET Core">ASP.NET Core</option>
<option value="Custom VPS">Custom VPS</option>
<option value="Other">Other</option>


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