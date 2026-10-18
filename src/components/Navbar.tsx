import { useEffect, useState } from "react";
import { Icon } from "./Icon";

const LINKS = [
  { href: "#top", label: "Home" },
  { href: "#solutions", label: "Our solutions" },
  { href: "#about", label: "About us" },
  { href: "#roadmap", label: "What’s next" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(
    () => window.location.hash || "#top",
  );
  useEffect(() => {
    const update = () =>
      setActiveHref(
        window.location.hash === "#main-content"
          ? "#top"
          : window.location.hash || "#top",
      );
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <a
          className="company-logo"
          href="#top"
          aria-label="Nexshora home"
          onClick={() => setOpen(false)}
        >
          <img
            src="/nexshora-logo.png"
            alt="Nexshora"
            width="986"
            height="180"
          />
        </a>
        <nav className="desktop-navigation" aria-label="Main navigation">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={activeHref === link.href ? "location" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} size={24} />
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={activeHref === link.href ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
              <Icon name="arrowUpRight" size={17} />
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>
            Let’s talk <Icon name="arrowUpRight" size={17} />
          </a>
        </nav>
      )}
    </header>
  );
}
