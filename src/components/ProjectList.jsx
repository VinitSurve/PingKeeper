import { useState } from "react";
import "./ProjectList.css";

import {
  ArrowUpDown,
  LayoutGrid,
  List,
} from "lucide-react";

import ProjectRow from "./ProjectRow";
import EmptyState from "./EmptyState";

function ProjectList({
  projects,
  onDelete,
  onEdit
}) {
  const [layout, setLayout] = useState("list");

  if (projects.length === 0) {
    return <EmptyState />;
  }

  return (
    <section className="projects">

      <div className="projects-header">

        <div>

          <h2>
            Your Infrastructure
          </h2>

          <p>
            {projects.length} monitored services
          </p>

        </div>

        <div className="projects-actions">

          <button className="sort-btn">

            <ArrowUpDown
              size={16}
              strokeWidth={2}
            />

            <span>
              Sort
            </span>

          </button>

          <div className="view-switch">

            <button
              className={
                layout === "list"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setLayout("list")
              }
            >

              <List size={16} />

            </button>

            <button
              className={
                layout === "grid"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setLayout("grid")
              }
            >

              <LayoutGrid
                size={16}
              />

            </button>

          </div>

        </div>

      </div>

      <div
        className={
          layout === "grid"
            ? "projects-grid"
            : "projects-list"
        }
      >

        {projects.map((project) => (

          <ProjectRow
            key={project.id}
            project={project}
            layout={layout}
            onDelete={onDelete}
            onEdit={onEdit}
          />

        ))}

      </div>

    </section>
  );
}

export default ProjectList;