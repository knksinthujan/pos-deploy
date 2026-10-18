import { Icon } from "@/components/Icon";

const STEPS = [
  {
    icon: "coffee" as const,
    title: "Start a conversation",
    text: "Tell us about your business, your team, and the way you work.",
  },
  {
    icon: "search" as const,
    title: "Explore the fit",
    text: "Discover where our current healthcare and POS systems could help.",
  },
  {
    icon: "grid" as const,
    title: "See the possibilities",
    text: "Ask for a walkthrough and discuss the needs that matter to you.",
  },
  {
    icon: "arrowUpRight" as const,
    title: "Plan your next step",
    text: "Find a clear direction for your business’s next chapter.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="process-section section-spacing">
      <div className="site-container">
        <div className="centered-heading">
          <span className="section-kicker">YOUR NEXT STEP</span>
          <h2 className="section-title">
            From a good conversation
            <br />
            <span>to a clearer direction.</span>
          </h2>
          <p>
            Let’s explore what the next chapter could look like for your
            business.
          </p>
        </div>
        <div className="process-grid">
          {STEPS.map((step, index) => (
            <article className="process-card" key={step.title}>
              <div className="process-icon">
                <Icon name={step.icon} size={31} strokeWidth={1.4} />
                <span>0{index + 1}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
