import { useState } from "react";
import {triggerPingWorkflow} from "../github/github.js";

import "./ProjectRow.css";

import {
  Play,
  Pencil,
  Trash2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

function ProjectRow({
  project,
  layout,
  onDelete,
  onEdit
}) {

  const [expanded, setExpanded] =
    useState(false);

  const [pinging, setPinging] = useState(false);

  const status = String(project.status || "")
    .toLowerCase();

  let statusClass = "unknown";

  if (status === "online") {
    statusClass = "online";
  } else if (status === "offline") {
    statusClass = "offline";
  }

  const latency =
    project.responseTime != null
      ? `${project.responseTime}ms`
      : project.latency || "--";

  const lastPing =
    project.lastPing?.toDate
      ? new Intl.DateTimeFormat("en", {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        }).format(project.lastPing.toDate())
      : project.lastPing || "Never";

  const hostname = (() => {

    if (!project.url) return "";

    try {

      const url = project.url.startsWith("http")
        ? project.url
        : `https://${project.url}`;

      return new URL(url).hostname;

    } catch {

      return project.url;

    }

  })();

  const handlePing = async () => {

  if (pinging) return;

  try {

    setPinging(true);

    await triggerPingWorkflow();

    alert(
      "Ping workflow started successfully!"
    );

  } catch (error) {

    console.error(error);

    alert(
      "Failed to trigger workflow."
    );

  } finally {

    setPinging(false);

  }

};

  return (

    <article className={`project-row-wrapper ${layout}`}>

      <div className="project-row">

        {/* Left */}

        <div className="project-main">

          <span
            className={`status-dot ${statusClass}`}
          />

          <div>

            <h3>
              {project.name}
            </h3>

            <p title={project.url}>
              {hostname}
            </p>

          </div>

        </div>

        {/* Platform */}

        <div className="project-meta">

          <span className="meta-label">
            Platform
          </span>

          <span className="meta-value">
            {project.platform || "Unknown"}
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
            {project.status || "Never Run"}
          </span>

        </div>

        {/* Latency */}

        <div className="project-meta">

          <span className="meta-label">
            Latency
          </span>

          <span className="meta-value">
            {latency}
          </span>

        </div>

        {/* Last Ping */}

        <div className="project-meta">

          <span className="meta-label">
            Last Ping
          </span>

          <span className="meta-value">
            {lastPing}
          </span>

        </div>

        {/* Interval */}

        <div className="project-meta">

          <span className="meta-label">
            Interval
          </span>

          <span className="meta-value">
            {project.interval || "4 days"}
          </span>

        </div>

        {/* Expand Button */}

        <button
          className="expand-btn"
          type="button"
          onClick={() =>
            setExpanded(!expanded)
          }
        >

          {expanded ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}

        </button>

      </div>

      {expanded && (

        <div className="project-actions">

          <button
            className="ping-btn"
            type="button"
            onClick={handlePing}
            disabled={pinging}
          >

          <Play
            size={15}
            strokeWidth={2}
          />

          {pinging
            ? "Pinging..."
            : "Ping"}

          </button>

          <button
            className="edit-btn"
            type="button"
            onClick={() =>
              onEdit(project)
            }
          >

            <Pencil
              size={15}
              strokeWidth={2}
            />

            Edit

          </button>

          <button
            className="delete-btn"
            type="button"
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

      )}

    </article>

  );

}

export default ProjectRow;