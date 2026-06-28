import { useState } from "react";
import "./ProjectRow.css";

function ProjectRow({ project, onDelete }) {
  const [expanded, setExpanded] = useState(false);

  const statusClass =
    project.status === "Online"
      ? "online"
      : project.status === "Never Run"
      ? "never"
      : "offline";

  return (
    <div className={`project-row ${expanded ? "expanded" : ""}`}>

      <div
        className="project-main"
        onClick={() => setExpanded(!expanded)}
      >

        <div className="project-left">

          <span className={`status-dot ${statusClass}`}></span>

          <div>

            <h3>{project.name}</h3>

            <span className="platform">
              {project.platform}
            </span>

          </div>

        </div>

        <div className="project-middle">

          <div className="metric">

            <small>Status</small>

            <strong>{project.status}</strong>

          </div>

          <div className="metric">

            <small>Latency</small>

            <strong>
              {project.responseTime
                ? `${project.responseTime} ms`
                : "--"}
            </strong>

          </div>

          <div className="metric">

            <small>Last Ping</small>

            <strong>
              {project.lastPing
                ? project.lastPing.toDate
                  ? project.lastPing
                      .toDate()
                      .toLocaleString()
                  : project.lastPing
                : "Never"}
            </strong>

          </div>

        </div>

        <div className="project-arrow">

          {expanded ? "−" : "+"}

        </div>

      </div>

      {expanded && (

        <div className="project-details">

          <div className="detail-block">

            <span>Ping URL</span>

            <p>{project.url}</p>

          </div>

          <div className="detail-grid">

            <div>

              <span>Interval</span>

              <p>Every {project.pingEveryDays} days</p>

            </div>

            <div>

              <span>Enabled</span>

              <p>{project.enabled ? "Yes" : "No"}</p>

            </div>

          </div>

          <div className="project-actions">

            <button className="ping-btn">
              Ping Now
            </button>

            <button className="edit-btn">
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => onDelete(project.id)}
            >
              Delete
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default ProjectRow;