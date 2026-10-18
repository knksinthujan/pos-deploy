import { Icon } from "@/components/Icon";

const QUESTIONS = [
  {
    question: "What does Nexshora do?",
    answer:
      "Nexshora is a multi-business company building business software. Our current focus includes doctor and treatment management and point-of-sale systems, with booking and ERP in our plans.",
  },
  {
    question: "Which products can I enquire about today?",
    answer:
      "You can speak to us about our doctor and treatment management system and our POS system. Tell us about your workflow so we can discuss whether the current products fit your needs.",
  },
  {
    question: "Are booking and ERP available yet?",
    answer:
      "Booking management and enterprise resource planning are planned products. They are part of our roadmap, and launch dates have not been announced. You can share your interest through the enquiry form.",
  },
  {
    question: "Can I request a product walkthrough?",
    answer:
      "Contact us for a walkthrough of our doctor and treatment management or POS system, and to discuss its current features and how it could fit your business.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="faq-section section-spacing">
      <div className="site-container faq-layout">
        <div>
          <span className="section-kicker">A LITTLE MORE CLARITY</span>
          <h2 className="section-title">
            Good questions.
            <br />
            <span>Clear answers.</span>
          </h2>
          <p>
            Still curious about something?
            <br />
            <a className="inline-link" href="#contact">
              Let’s talk about it <Icon name="arrowUpRight" size={16} />
            </a>
          </p>
        </div>
        <div className="faq-list">
          {QUESTIONS.map((item, index) => (
            <details key={item.question}>
              <summary>
                <span className="faq-number">0{index + 1}</span>
                <span>{item.question}</span>
                <span className="faq-plus">
                  <Icon name="plus" size={18} />
                </span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
