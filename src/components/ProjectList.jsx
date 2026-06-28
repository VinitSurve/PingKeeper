import "./ProjectList.css";
import ProjectRow from "./ProjectRow";
import EmptyState from "./EmptyState";

function ProjectList({ projects, onDelete }) {
  if (!projects.length) {
    return <EmptyState />;
  }

  return (
    <section className="project-section">

      <div className="project-wrapper">

        <div className="section-heading">

          <div className="heading-left">

            <h2>Your Projects</h2>

            <p className="project-count">
              {projects.length} Projects
            </p>

          </div>

          <div className="heading-right">

            <button className="sort-btn">
              Sort by: Last Ping ▼
            </button>

            <button className="view-btn">
              ☷
            </button>

          </div>

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

      </div>

    </section>
  );
}

export default ProjectList;