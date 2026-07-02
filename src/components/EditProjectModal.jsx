import { useEffect, useState } from "react";
import "./EditProjectModal.css";

function EditProjectModal({
  open,
  project,
  onClose,
  onSave
}) {

  if (!open || !project) {
    return null;
  }

  const [name, setName] = useState("");
  const [platform, setPlatform] = useState("");
  const [url, setUrl] = useState("");
  const [interval, setInterval] = useState("");

  useEffect(() => {

  if (!project) return;

  setName(project.name || "");
  setPlatform(project.platform || "");
  setUrl(project.url || "");
  setInterval(project.interval || "4 days");

}, [project]);

  return (

    <div
      className="modal-overlay"
      onClick={onClose}
    >

      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >

        <h2>
          Edit Project
        </h2>

        <div className="form-group">

          <label>
            Project Name
          </label>

          <input
            type="text"
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

        <div className="form-group">

          <label>
            URL
          </label>

          <input
                type="text"
                value={url}
                onChange={(e) =>
                setUrl(e.target.value)
            }
          />

        </div>

        <div className="form-group">

          <label>
            Interval
          </label>

          <select
            value={interval}
            onChange={(e) =>
            setInterval(e.target.value)
            }
        >

            <option>15m</option>
            <option>30m</option>
            <option>1h</option>
            <option>4 days</option>

          </select>

        </div>

        <div className="modal-actions">

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
        className="save-btn"
        onClick={() =>
            onSave({
            ...project,
            name,
            platform,
            url,
            interval,
            })
            }
        >
  Save Changes
</button>

        </div>

      </div>

    </div>

  );

}

export default EditProjectModal;