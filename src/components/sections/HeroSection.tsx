import { Icon } from "@/components/Icon";

function Wave({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`section-wave ${className}`}
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 62C160 110 280 68 430 29C610-18 719 36 870 57C1060 94 1160 11 1290 27C1348 30 1402 42 1440 57V100H0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section id="top" className="reference-hero">
      <img
        className="reference-hero-photo"
        src="/images/nexshora-business-hero.jpg"
        alt=""
        fetchPriority="high"
        width={1672}
        height={941}
      />
      <div className="reference-hero-overlay" />
      <div className="site-container reference-hero-content">
        <span className="section-kicker hero-kicker">
          <span /> TECHNOLOGY FOR YOUR NEXT CHAPTER
        </span>
        <h1>
          Empowering people.
          <br />
          Moving business
          <br />
          <span>forward.</span>
        </h1>
        <p>
          One company. A world of possibilities. Discover thoughtful software
          for healthcare, retail, and the way your business works.
        </p>
        <div className="hero-buttons">
          <a className="site-button button-blue" href="#solutions">
            Explore our solutions <Icon name="arrowRight" size={19} />
          </a>
          <a className="site-button button-outline" href="#contact">
            Let’s talk <Icon name="arrowUpRight" size={18} />
          </a>
        </div>
        <div className="reference-hero-caption">
          <span /> DOCTOR & TREATMENT · POINT OF SALE · WHAT’S NEXT
        </div>
      </div>
      <Wave />
    </section>
  );
}
