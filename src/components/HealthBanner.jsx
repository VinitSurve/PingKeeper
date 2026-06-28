import "./HealthBanner.css";

function HealthBanner() {
  return (
    <section className="health-banner">

      <div className="health-left">

        <div className="health-icon">
          🌱
        </div>

        <div>

          <h3>
            Your infrastructure is healthy!
          </h3>

          <p>
            PingKeeper is keeping your services
            alive and monitored.
          </p>

        </div>

      </div>

      <div className="health-right">

        <span>
          Keep it alive.
        </span>

      </div>

    </section>
  );
}

export default HealthBanner;