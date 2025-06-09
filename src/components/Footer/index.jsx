import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-container shadow-top">
        <div className="flex-center gap-3 text-sm font-normal flex-wrap">
          <p className="flex-center gap-x-2">
            <span>&copy; 2025</span>{" "}
            <span className="font-bold">Soundify.com</span>
          </p>
          <Link to="/terms" target="_blank">
            <p className="hover-underline">
              Privacy & Terms
            </p>
          </Link>
          <Link to="/impressum" target="_blank">
            <p className="hover-underline">
              Impressum
            </p>
          </Link>
        </div>
        <div>
          <ul className="flex-center gap-3 text-sm font-normal flex-wrap">
            <li className="hover-underline"><Link to="/features">Features</Link></li>
            <li className="hover-underline"><Link to="/app">App</Link></li>
            <li className="hover-underline"><Link to="/blog">Blog</Link></li>
            <li className="hover-underline"><Link to="/how-it-work">How It Work</Link></li>
            <li className="hover-underline"><Link to="/contact">Contact</Link></li>
            <li className="hover-underline"><Link to="/support">Support</Link></li>
            <li className="">
              <a href="#facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 14 14"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M8.655 14H5.55V7H4V4.586h1.551V3.139C5.551 1.17 6.426 0 8.915 0h2.07v2.413H9.692c-.968 0-1.032.337-1.032.966l-.005 1.208H11l-.275 2.412h-2.07V14z"></path><path d="M0 0h14v14H0z"></path></g></svg>
              </a>
            </li>
            <li className="">
              <a href="#x">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 14 14"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M12.35 2.897a3.007 3.007 0 0 0 1.263-1.675 5.57 5.57 0 0 1-1.824.735A2.796 2.796 0 0 0 9.692 1c-1.586 0-2.87 1.356-2.87 3.029 0 .238.023.469.072.69-2.386-.127-4.502-1.331-5.92-3.165a3.15 3.15 0 0 0-.388 1.523c0 1.05.507 1.978 1.278 2.522a2.77 2.77 0 0 1-1.302-.378v.037c0 1.468.99 2.693 2.305 2.97a2.674 2.674 0 0 1-.758.107 2.7 2.7 0 0 1-.54-.054c.365 1.203 1.426 2.08 2.684 2.103A5.576 5.576 0 0 1 0 11.64 7.832 7.832 0 0 0 4.403 13c5.284 0 8.171-4.616 8.171-8.62 0-.13-.001-.262-.007-.39A6.004 6.004 0 0 0 14 2.42c-.515.241-1.07.404-1.65.477z"></path><path d="M0 0h14v14H0z"></path></g></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
