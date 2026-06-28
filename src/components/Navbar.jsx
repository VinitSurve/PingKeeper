import "./Navbar.css";

function Navbar({ search, setSearch }) {
  return (
    <header className="navbar">

      <div className="navbar-left">

        <div className="logo">

          <div className="logo-pulse"></div>

          <span>PingKeeper</span>

        </div>

        <nav>

          <button className="active">
            Projects
          </button>

          <button>
            Activity
          </button>

          <button>
            Analytics
          </button>

          <button>
            Settings
          </button>

        </nav>

      </div>

      <div className="navbar-right">

        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="github-btn"
        >
          ⭐ GitHub
        </a>

      </div>

    </header>
  );
}

export default Navbar;