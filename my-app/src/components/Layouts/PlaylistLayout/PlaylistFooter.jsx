import { Link } from "react-router-dom";
import { FbIcon, TwitterIcon } from "../../icon";

function Footer() {
  return (
    <>
      <div className="footer-container shadow-top">
        <div className="flex-center gap-3 font-normal flex-wrap">
          <p className="flex-center gap-x-2">
            <span>&copy; 2025</span>{" "}
            <span className="font-bold">Soundify.com</span>
          </p>
          <Link to="/terms" target="_blank">
            <p className="hover-underline">Privacy & Terms</p>
          </Link>
          <Link to="/impressum" target="_blank">
            <p className="hover-underline">Impressum</p>
          </Link>
        </div>
        <div>
          <ul className="flex-center gap-3 font-normal flex-wrap">
            <li className="hover-underline">
              <Link to="/features">
                <p>Features</p>
              </Link>
            </li>
            <li className="hover-underline">
              <Link to="/blog">
                <p>Blog</p>
              </Link>
            </li>
            <li className="hover-underline">
              <Link to="/how-it-work">
                <p>How It Work</p>
              </Link>
            </li>
            <li className="hover-underline">
              <Link to="/app">
                <p>App</p>
              </Link>
            </li>
            <li className="hover-underline">
              <Link to="/contact">
                <p>Contact</p>
              </Link>
            </li>
            <li className="hover-underline">
              <Link to="/support">
                <p>Support</p>
              </Link>
            </li>
            <li className="">
              <a href="#facebook">
                <FbIcon />
              </a>
            </li>
            <li className="">
              <a href="#x">
                <TwitterIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
