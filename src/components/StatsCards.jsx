import "./StatsCards.css";

function StatsCards({ projects }) {
  const total = projects.length;

  const online = projects.filter(
    (p) => p.status === "online"
  ).length;

  const offline = projects.filter(
    (p) => p.status === "offline"
  ).length;

  const latencies = projects
    .map((p) => parseInt(p.latency))
    .filter((n) => !isNaN(n));

  const averageLatency =
    latencies.length > 0
      ? Math.round(
          latencies.reduce((a, b) => a + b, 0) /
            latencies.length
        )
      : "--";

  return (
    <section className="summary-strip">

      <div className="summary-item">

        <span className="summary-value">
          {total}
        </span>

        <span className="summary-label">
          Projects
        </span>

      </div>

      <div className="summary-divider" />

      <div className="summary-item">

        <span
          className="summary-value online"
        >
          {online}
        </span>

        <span className="summary-label">
          Online
        </span>

      </div>

      <div className="summary-divider" />

      <div className="summary-item">

        <span
          className="summary-value offline"
        >
          {offline}
        </span>

        <span className="summary-label">
          Offline
        </span>

      </div>

      <div className="summary-divider" />

      <div className="summary-item">

        <span className="summary-value">
          {averageLatency}
          {averageLatency !== "--" && "ms"}
        </span>

        <span className="summary-label">
          Average Latency
        </span>

      </div>

    </section>
  );
}

export default StatsCards;