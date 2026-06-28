import "./StatsCards.css";

function StatsCards({ projects }) {
  const total = projects.length;

  const online = projects.filter(
    (p) => p.status === "Online"
  ).length;

  const offline = projects.filter(
    (p) =>
      p.status === "Offline" ||
      p.status === "Error"
  ).length;

  const neverRun = projects.filter(
    (p) => p.status === "Never Run"
  ).length;

  const avgLatency = (() => {
    const values = projects
      .filter((p) => p.responseTime !== null)
      .map((p) => p.responseTime);

    if (!values.length) return "--";

    return Math.round(
      values.reduce((a, b) => a + b, 0) /
        values.length
    );
  })();

  const cards = [
    {
      title: "Projects",
      value: total,
      color: "",
      icon: "◉",
    },
    {
      title: "Healthy",
      value: online,
      color: "green",
      icon: "●",
    },
    {
      title: "Offline",
      value: offline,
      color: "red",
      icon: "●",
    },
    {
      title: "Never Run",
      value: neverRun,
      color: "gray",
      icon: "◌",
    },
    {
      title: "Avg Latency",
      value:
        avgLatency === "--"
          ? "--"
          : `${avgLatency} ms`,
      color: "blue",
      icon: "↗",
    },
  ];

  return (
    <section className="stats">

      {cards.map((card) => (
        <div
          key={card.title}
          className="stat-card"
        >
          <div className="stat-top">

            <span
              className={`stat-dot ${card.color}`}
            >
              {card.icon}
            </span>

            <span className="stat-title">
              {card.title}
            </span>

          </div>

          <h2>{card.value}</h2>

          <div className="stat-footer">

            <div className="stat-bar" />

          </div>

        </div>
      ))}

    </section>
  );
}

export default StatsCards;