import "./Navbar.css";

import {
  Search,
  Code2,
  LayoutGrid,
} from "lucide-react";

function Navbar({ search, setSearch }) {
  return (
    <header className="navbar">

      <div className="nav-left">

        <div className="logo">

          <LayoutGrid
            size={18}
            strokeWidth={2}
          />

        </div>

        <div className="brand">

          <h2>PingKeeper</h2>

          <span>
            Infrastructure Workspace
          </span>

        </div>

      </div>

      <div className="nav-search">

        <Search
          size={17}
          className="search-icon"
        />

        <input
          type="text"
          placeholder="Search infrastructure..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      <a
        className="github-btn"
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
      >

        <Code2
          size={17}
          strokeWidth={2}
        />

        <span>GitHub</span>

      </a>

    </header>
  );
}

export default Navbar;