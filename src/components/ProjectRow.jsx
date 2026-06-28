import { useState } from "react";
import "./ProjectRow.css";

function ProjectRow({ project, onDelete }) {
  const [open, setOpen] = useState(false);

  const status =
    project.status === "Online"
      ? "online"
      : project.status === "Never Run"
      ? "never"
      : "offline";

  return (
    <article className={`project-row ${status}`}>

      <div
        className="project-header"
        onClick={() => setOpen(!open)}
      >

        <div className="project-info">

          <div className={`project-icon ${status}`}>
            ⚡
          </div>

          <div>

            <div className="project-name">

              {project.name}

            </div>

            <div className="project-platform">

              {project.platform}

            </div>

          </div>

        </div>

        <div className="project-metrics">

          <div className="metric">

            <span>Status</span>

            <strong className={status}>
              {project.status}
            </strong>

          </div>

          <div className="metric">

            <span>Latency</span>

            <strong>
              {project.responseTime
                ? `${project.responseTime} ms`
                : "--"}
            </strong>

          </div>

          <div className="metric">

            <span>Last Ping</span>

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

        <button
          className="more-btn"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
        >
          •••
        </button>

      </div>

      {open && (

        <div className="project-expand">

          <div className="expand-grid">

            <div>

              <span>Ping URL</span>

              <p>{project.url}</p>

            </div>

            <div>

              <span>Ping Interval</span>

              <p>
                Every {project.pingEveryDays} days
              </p>

            </div>

            <div>

              <span>Enabled</span>

              <p>
                {project.enabled ? "Yes" : "No"}
              </p>

            </div>

          </div>

          <div className="project-actions">

            <button className="ping-btn">
              ▶ Ping Now
            </button>

            <button className="edit-btn">
              ✎ Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => onDelete(project.id)}
            >
              🗑 Delete
            </button>

          </div>

        </div>

      )}

    </article>
  );
}

export default ProjectRow;