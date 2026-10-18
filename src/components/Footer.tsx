import { COMPANY, PRODUCTS } from "@/data/company";
import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer className="company-footer">
      <div className="site-container">
        <div className="footer-main">
          <div className="footer-identity">
            <a href="#top" aria-label="Nexshora home">
              <img
                src="/nexshora-logo.png"
                alt="Nexshora"
                width="986"
                height="180"
              />
            </a>
            <p>
              Thoughtful technology.
              <br />A world of possibilities.
            </p>
            <a className="footer-email" href={`mailto:${COMPANY.email}`}>
              {COMPANY.email} <Icon name="arrowUpRight" size={16} />
            </a>
          </div>
          <div className="footer-link-column">
            <h3>Our world</h3>
            {PRODUCTS.filter((product) => product.url).map((product) => (
              <a
                key={product.id}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                title="Opens in a new tab"
              >
                {product.id === "care" ? "Healthcare" : "Point of sale"}
              </a>
            ))}
            <a href="#roadmap">
              Booking <span>Planned</span>
            </a>
            <a href="#roadmap">
              ERP <span>Planned</span>
            </a>
          </div>
          <div className="footer-link-column">
            <h3>Discover Nexshora</h3>
            <a href="#about">Our company</a>
            <a href="#approach">Our approach</a>
            <a href="#process">How it works</a>
            <a href="#faq">Common questions</a>
            <a href="#roadmap">Our next chapter</a>
            <a href="#contact">Start a conversation</a>
          </div>
          <a
            className="back-to-top"
            href="#main-content"
            aria-label="Back to top"
          >
            <Icon name="chevronUp" size={22} />
          </a>
        </div>
        <div className="footer-bottom-line">
          <span>
            © {new Date().getFullYear()} Nexshora. All rights reserved.
          </span>
          <span>
            Built around your business. <span className="footer-blue-dot" />
          </span>
        </div>
      </div>
    </footer>
  );
}
