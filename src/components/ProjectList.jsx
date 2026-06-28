import ProjectRow from "./ProjectRow";
import EmptyState from "./EmptyState";
import "./ProjectList.css";

function ProjectList({ projects, onDelete }) {
  if (projects.length === 0) {
    return <EmptyState />;
  }

  return (
    <section className="project-section">

      <div className="section-heading">

        <div>

          <span className="section-tag">
            Infrastructure
          </span>

          <h2>
            Active Projects
          </h2>

        </div>

        <span className="project-count">
          {projects.length} Projects
        </span>

      </div>

      <div className="project-list">

        {projects.map((project) => (
          <ProjectRow
            key={project.id}
            project={project}
            onDelete={onDelete}
          />
        ))}

      </div>

    </section>
  );
}

export default ProjectList;