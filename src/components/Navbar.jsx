import "./Navbar.css";

function Navbar({ search, setSearch }) {
  return (
    <header className="navbar">

      <div className="nav-left">

        <div className="logo">

          <div className="logo-circle">
            ⚡
          </div>

          <div>

            <h2>PingKeeper</h2>

            <span>
              Infrastructure Workspace
            </span>

          </div>

        </div>

      </div>

      <div className="nav-center">

        <div className="search-box">

          <span className="search-icon">
            🔍
          </span>

          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <kbd>⌘K</kbd>

        </div>

      </div>

      <div className="nav-right">

        <button className="github-btn">

          <span>⭐</span>

          GitHub

        </button>

      </div>

    </header>
  );
}

export default Navbar;