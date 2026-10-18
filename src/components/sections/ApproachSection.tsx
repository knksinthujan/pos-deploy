import { Icon } from "@/components/Icon";

const PRINCIPLES = [
  {
    icon: "user" as const,
    title: "People-first thinking",
    text: "Your business starts with people. So does our approach to technology.",
    link: "Meet Nexshora",
  },
  {
    icon: "grid" as const,
    title: "A world of possibilities",
    text: "From healthcare to retail, we see opportunity in making everyday work simpler.",
    link: "Explore our solutions",
  },
  {
    icon: "trending" as const,
    title: "A vision that grows",
    text: "Today’s products are our starting point. Booking and ERP are part of what’s next.",
    link: "See our roadmap",
  },
];

export function ApproachSection() {
  return (
    <section id="approach" className="advantage-section section-spacing">
      <div className="site-container">
        <div className="centered-heading">
          <span className="section-kicker">THE NEXSHORA APPROACH</span>
          <h2 className="section-title">
            Thoughtful technology.
            <br className="mobile-only" /> <span>Human ambition.</span>
          </h2>
          <p>
            A multi-business vision, built around the people who make business
            happen.
          </p>
        </div>
        <div className="advantage-grid">
          {PRINCIPLES.map((principle, index) => (
            <article className="advantage-card" key={principle.title}>
              <div className={`advantage-illustration advantage-${index}`}>
                <span className="advantage-orbit" />
                <span className="advantage-icon">
                  <Icon name={principle.icon} size={48} strokeWidth={1.3} />
                </span>
                <span className="advantage-small-icon">
                  <Icon name="check" size={14} />
                </span>
              </div>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
              <a
                className="inline-link"
                href={
                  index === 0
                    ? "#about"
                    : index === 1
                      ? "#solutions"
                      : "#roadmap"
                }
              >
                {principle.link} <Icon name="arrowRight" size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
