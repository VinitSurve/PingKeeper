import "./Footer.css";

import {
  Heart,
  Code2,
} from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-left">

        <h3>PingKeeper</h3>

        <span>
          Infrastructure Workspace
        </span>

      </div>

      <div className="footer-center">

        <a href="#">
          Docs
        </a>

        <a href="#">
          Privacy
        </a>

        <a href="#">
          Support
        </a>

      </div>

      <div className="footer-right">

        <span>
          Built with
        </span>

        <Heart
          size={15}
          fill="currentColor"
        />

        <span>
          by Vinit
        </span>

        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >

          <Code2
            size={18}
          />

        </a>

      </div>

    </footer>
  );
}

export default Footer;