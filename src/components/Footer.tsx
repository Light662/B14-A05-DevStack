import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-100 bg-white">
      <div className="container mx-auto px-4">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-12">
          {/* Brand */}
          <div>
            <a href="#" className="mb-3 inline-block">
              <img src={logo} alt="Dev Stack" className="h-auto w-28" />
            </a>

            <p className="max-w-sm text-xs leading-relaxed text-slate-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social links */}
            <div className="mt-4 flex items-center gap-4 text-slate-600">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="transition-colors hover:text-pink-600"
              >
                <FaGithub size={15} />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="transition-colors hover:text-pink-600"
              >
                <FaTwitter size={15} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-pink-600"
              >
                <FaLinkedinIn size={15} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-[10px] font-bold uppercase tracking-wide text-slate-900">
              Product
            </h3>

            <ul className="space-y-2 text-xs text-slate-500">
              <li>
                <a href="#" className="hover:text-pink-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-pink-600">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-pink-600">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-[10px] font-bold uppercase tracking-wide text-slate-900">
              Company
            </h3>

            <ul className="space-y-2 text-xs text-slate-500">
              <li>
                <a href="#about" className="hover:text-pink-600">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-pink-600">
                  Contact
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-pink-600">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-[10px] font-bold uppercase tracking-wide text-slate-900">
              Legal
            </h3>

            <ul className="space-y-2 text-xs text-slate-500">
              <li>
                <a href="#privacy" className="hover:text-pink-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-pink-600">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-slate-100 py-5 text-[10px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <a href="#privacy" className="hover:text-pink-600">
              Privacy
            </a>

            <a href="#terms" className="hover:text-pink-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
