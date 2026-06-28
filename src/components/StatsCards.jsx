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

  const never = projects.filter(
    (p) => p.status === "Never Run"
  ).length;

  const avgLatency = (() => {
    const values = projects
      .filter((p) => p.responseTime)
      .map((p) => p.responseTime);

    if (!values.length) return "--";

    return Math.round(
      values.reduce((a, b) => a + b, 0) /
        values.length
    );
  })();

  const cards = [
    {
      title: "Total Projects",
      value: total,
      color: "white",
      line: "green",
      icon: "◈",
    },
    {
      title: "Online",
      value: online,
      color: "green",
      percent:
        total > 0
          ? `${Math.round((online / total) * 100)}%`
          : "0%",
      line: "green",
      icon: "🟢",
    },
    {
      title: "Offline",
      value: offline,
      color: "orange",
      percent:
        total > 0
          ? `${Math.round((offline / total) * 100)}%`
          : "0%",
      line: "orange",
      icon: "🟠",
    },
    {
      title: "Never Run",
      value: never,
      color: "gray",
      percent:
        total > 0
          ? `${Math.round((never / total) * 100)}%`
          : "0%",
      line: "gray",
      icon: "⚪",
    },
  ];

  return (
    <>
      <section className="stats">

        {cards.map((card) => (

          <div
            key={card.title}
            className="stat-card"
          >

            <div className="stat-top">

              <span className="stat-icon">
                {card.icon}
              </span>

              <span className="stat-title">
                {card.title}
              </span>

            </div>

            <div className="stat-number">

              {card.value}

              {card.percent && (

                <span className={card.color}>
                  {card.percent}
                </span>

              )}

            </div>

            <div
              className={`stat-line ${card.line}`}
            />

          </div>

        ))}

      </section>

      <div className="latency-card">

        <div className="stat-top">

          <span className="stat-icon">
            📡
          </span>

          <span className="stat-title">
            Avg Latency
          </span>

        </div>

        <div className="stat-number">
          {avgLatency === "--"
            ? "--"
            : `${avgLatency} ms`}
        </div>

        <div className="stat-line green" />

      </div>
    </>
  );
}

export default StatsCards;