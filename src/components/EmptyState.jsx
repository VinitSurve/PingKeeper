import "./EmptyState.css";

function EmptyState() {
  return (
    <div className="empty-state">

      <div className="empty-icon">
        ☁️
      </div>

      <h2>No Projects Yet</h2>

      <p>
        Add your first backend endpoint and PingKeeper will
        start monitoring it automatically.
      </p>

      <div className="empty-features">

        <div className="feature">
          <span>⚡</span>
          <p>Automatic Pinging</p>
        </div>

        <div className="feature">
          <span>🟢</span>
          <p>Health Monitoring</p>
        </div>

        <div className="feature">
          <span>📈</span>
          <p>Response Times</p>
        </div>

      </div>

    </div>
  );
}

export default EmptyState;