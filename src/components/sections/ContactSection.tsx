import { useEffect, useState, type FormEvent } from "react";
import { COMPANY, PRODUCTS, type ProductId } from "@/data/company";
import { Icon } from "@/components/Icon";
import { BrandMark, ProductIcon } from "@/components/Brand";

export function ContactSection({
  interest,
  onInterestChange,
}: {
  interest: ProductId | "";
  onInterestChange: (value: ProductId | "") => void;
}) {
  const [draft, setDraft] = useState<{ subject: string; body: string } | null>(
    null,
  );

  useEffect(() => setDraft(null), [interest]);

  const prepareEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const solution =
      PRODUCTS.find((product) => product.id === values.get("solution"))?.name ||
      "A conversation about Nexshora";
    setDraft({
      subject: `Nexshora enquiry — ${solution}`,
      body: `Hello Nexshora team,\n\n${String(values.get("message")).trim()}\n\nInterested in: ${solution}\nName: ${String(values.get("name")).trim()}\nBusiness: ${String(values.get("business")).trim() || "Not provided"}\nEmail: ${String(values.get("email")).trim()}\n`,
    });
  };

  const downloadEnquiry = () => {
    if (!draft) return;
    const blob = new Blob([`${draft.subject}\n\n${draft.body}`], {
      type: "text/plain;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "nexshora-enquiry.txt";
    anchor.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="site-container">
        <div className="centered-heading contact-heading">
          <span className="section-kicker">LET’S BUILD WHAT’S NEXT</span>
          <h2 id="contact-title" className="section-title">
            Your next chapter starts with a <span>conversation.</span>
          </h2>
          <p>
            Tell us a little about your business. We’ll help you explore where
            Nexshora could fit.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-copy">
            <BrandMark className="contact-brand-watermark" />
            <span className="contact-panel-kicker">
              ONE COMPANY. MANY POSSIBILITIES.
            </span>
            <h3>
              Let’s find your <span>next step.</span>
            </h3>
            <p>
              Healthcare, retail, or the next stage of your business. Tell us
              what you have in mind.
            </p>
            <div className="contact-methods">
              <a href={`mailto:${COMPANY.email}`}>
                <span className="contact-method-icon">@</span>
                <div>
                  <small>Drop us a line</small>
                  <strong>{COMPANY.email}</strong>
                </div>
                <Icon name="arrowUpRight" size={20} />
              </a>
              <a href={`tel:${COMPANY.phoneLink}`}>
                <span className="contact-method-icon">
                  <Icon name="phone" size={21} />
                </span>
                <div>
                  <small>Call us</small>
                  <strong>{COMPANY.phone}</strong>
                </div>
                <Icon name="arrowUpRight" size={20} />
              </a>
              <a
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-method-icon">
                  <Icon name="whatsapp" size={22} />
                </span>
                <div>
                  <small>WhatsApp</small>
                  <strong>{COMPANY.phone}</strong>
                </div>
                <Icon name="arrowUpRight" size={20} />
              </a>
            </div>
            <div className="contact-businesses">
              <p>A world of possibilities</p>
              <div className="contact-business-tags">
                {PRODUCTS.map((product) => (
                  <span className="contact-business-tag" key={product.id}>
                    <ProductIcon type={product.id} size={18} />
                    {product.id === "pos" ? "POS" : product.shortName}
                    {product.status === "Planned" && <small>Planned</small>}
                  </span>
                ))}
              </div>
            </div>
            <div className="contact-note">
              <Icon name="sparkle" size={18} />
              <span>
                A big idea or a small question.
                <br />
                We’d love to hear it.
              </span>
            </div>
          </div>
          <div className="enquiry-card">
            <div className="enquiry-heading">
              <span className="enquiry-kicker">START A CONVERSATION</span>
              <h3>Tell us about your business.</h3>
              <p>A few details to help us understand what you need.</p>
            </div>
            <form onSubmit={prepareEnquiry} onChange={() => setDraft(null)}>
              <div className="form-two-columns">
                <label htmlFor="enquiry-name">
                  Your name <span>*</span>
                  <input
                    id="enquiry-name"
                    name="name"
                    autoComplete="name"
                    placeholder="Alex Morgan"
                    required
                    maxLength={100}
                  />
                </label>
                <label htmlFor="enquiry-email">
                  Work email <span>*</span>
                  <input
                    id="enquiry-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="alex@yourbusiness.com"
                    required
                    maxLength={200}
                  />
                </label>
              </div>
              <label htmlFor="enquiry-business">
                Business name
                <input
                  id="enquiry-business"
                  name="business"
                  autoComplete="organization"
                  placeholder="Your company or practice"
                  maxLength={150}
                />
              </label>
              <label htmlFor="enquiry-solution">
                What are you interested in?
                <select
                  id="enquiry-solution"
                  name="solution"
                  value={interest}
                  onChange={(event) =>
                    onInterestChange(event.target.value as ProductId | "")
                  }
                >
                  <option value="">Let’s explore together</option>
                  {PRODUCTS.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                      {product.status === "Planned" ? " (planned)" : ""}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor="enquiry-message">
                Tell us a little more <span>*</span>
                <textarea
                  id="enquiry-message"
                  name="message"
                  rows={4}
                  required
                  maxLength={2500}
                  placeholder="What does your business need a little help with?"
                />
              </label>
              <button
                className="site-button button-blue enquiry-submit"
                type="submit"
              >
                Prepare my enquiry <Icon name="arrowUpRight" size={19} />
              </button>
              <p className="form-helper">
                We’ll prepare an email draft for you to review and send.
              </p>
              {draft && (
                <div className="enquiry-result" role="status">
                  <span className="result-icon">
                    <Icon name="check" size={18} />
                  </span>
                  <div>
                    <strong>Your enquiry is ready.</strong>
                    <p>
                      Open your email app to review and send it, or download a
                      copy.
                    </p>
                    <div className="enquiry-result-actions">
                      <a
                        href={`mailto:${COMPANY.email}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`}
                      >
                        Open email draft <Icon name="arrowUpRight" size={15} />
                      </a>
                      <button type="button" onClick={downloadEnquiry}>
                        Download <Icon name="download" size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
