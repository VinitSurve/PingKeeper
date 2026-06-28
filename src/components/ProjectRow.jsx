import "./ProjectRow.css";

import {
  Play,
  Pencil,
  Trash2,
} from "lucide-react";

function ProjectRow({
  project,
  layout,
  onDelete,
}) {

  const statusClass =
    project.status === "online"
      ? "online"
      : "offline";

  return (

    <article className={`project-row ${layout}`}>

      {/* Left */}

      <div className="project-main">

        <span
          className={`status-dot ${statusClass}`}
        />

        <div>

          <h3>
            {project.name}
          </h3>

          <p>
            {project.url}
          </p>

        </div>

      </div>

      {/* Platform */}

      <div className="project-meta">

        <span className="meta-label">
          Platform
        </span>

        <span className="meta-value">
          {project.platform}
        </span>

      </div>

      {/* Status */}

      <div className="project-meta">

        <span className="meta-label">
          Status
        </span>

        <span
          className={`meta-value ${statusClass}`}
        >
          {project.status}
        </span>

      </div>

      {/* Latency */}

      <div className="project-meta">

        <span className="meta-label">
          Latency
        </span>

        <span className="meta-value">
          {project.latency}
        </span>

      </div>

      {/* Last Ping */}

      <div className="project-meta">

        <span className="meta-label">
          Last Ping
        </span>

        <span className="meta-value">
          {project.lastPing}
        </span>

      </div>

      {/* Interval */}

      <div className="project-meta">

        <span className="meta-label">
          Interval
        </span>

        <span className="meta-value">
          {project.interval}
        </span>

      </div>

      {/* Actions */}

      <div className="project-actions">

        <button className="ping-btn">

          <Play
            size={15}
            strokeWidth={2}
          />

          Ping

        </button>

        <button className="edit-btn">

          <Pencil
            size={15}
            strokeWidth={2}
          />

          Edit

        </button>

        <button
          className="delete-btn"
          onClick={() =>
            onDelete(project.id)
          }
        >

          <Trash2
            size={15}
            strokeWidth={2}
          />

          Delete

        </button>

      </div>

    </article>

  );

}

export default ProjectRow;