import "./HealthBanner.css";

import {
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

function HealthBanner() {
  return (
    <section className="health-banner">

      <div className="health-icon">

        <ShieldCheck
          size={22}
          strokeWidth={2}
        />

      </div>

      <div className="health-content">

        <span className="health-label">
          Infrastructure Health
        </span>

        <h3>
          All systems operational
        </h3>

        <p>
          Every monitored endpoint is responding normally.
          PingKeeper continues checking your services in the
          background.
        </p>

      </div>

      <button className="health-btn">

        View Activity

        <ArrowRight
          size={16}
          strokeWidth={2}
        />

      </button>

    </section>
  );
}

export default HealthBanner;