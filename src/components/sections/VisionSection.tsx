import { Icon } from "@/components/Icon";

export function VisionSection() {
  return (
    <section className="vision-section">
      <div className="site-container vision-layout">
        <div>
          <span className="section-kicker">LET’S MOVE FORWARD, TOGETHER</span>
          <h2>
            Ready for your
            <br />
            <span>next chapter?</span>
          </h2>
          <p>
            A big idea or a small question. Tell us about your business and
            let’s explore the possibilities.
          </p>
          <a className="site-button button-blue" href="#contact">
            Start a conversation <Icon name="arrowRight" size={18} />
          </a>
        </div>
        <img
          src="/images/team-collaboration.jpg"
          alt="People working together in a shared office, illustrative stock photograph"
          width={1000}
          height={667}
          loading="lazy"
        />
      </div>
    </section>
  );
}
