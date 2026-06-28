import "./EmptyState.css";

import {
  ServerCrash,
  Plus,
} from "lucide-react";

function EmptyState() {
  return (

    <section className="empty-state">

      <div className="empty-icon">

        <ServerCrash
          size={36}
        />

      </div>

      <h2>

        No projects yet

      </h2>

      <p>

        Add your first backend service and
        PingKeeper will start monitoring it
        automatically.

      </p>

      <button>

        <Plus
          size={17}
        />

        Add First Project

      </button>

    </section>

  );
}

export default EmptyState;