import { ProductIcon } from "@/components/Brand";
import { Icon } from "@/components/Icon";

export function AboutSection() {
  return (
    <section id="about" className="about-section section-spacing">
      <div className="site-container">
        <div className="centered-heading">
          <span className="section-kicker">WHO WE ARE</span>
          <h2 className="section-title">
            A bigger vision for
            <br className="mobile-only" /> <span>better business.</span>
          </h2>
        </div>
        <div className="about-layout">
          <div className="photo-collage">
            <img
              className="collage-tall"
              src="/images/workspace.jpg"
              alt="A bright shared workspace"
              width={900}
              height={600}
              loading="lazy"
            />
            <img
              className="collage-wide"
              src="/images/team-collaboration.jpg"
              alt="A team collaborating on laptops, illustrative stock photograph"
              width={1000}
              height={667}
              loading="lazy"
            />
            <div className="collage-badge">
              <ProductIcon type="erp" size={27} />
              <strong>One vision.</strong>
              <span>MANY POSSIBILITIES</span>
            </div>
          </div>
          <div className="about-copy">
            <p>
              Nexshora is a multi-business company with a simple ambition: make
              more room for what matters through thoughtful technology.
            </p>
            <p>
              Our journey begins with doctor and treatment management and POS
              systems, with booking and ERP planned for the next chapter.
            </p>
            <div className="about-feature">
              <span>
                <Icon name="heart" size={24} />
              </span>
              <div>
                <h3>People at the centre</h3>
                <p>
                  For the people caring for patients, serving customers, and
                  moving their business forward.
                </p>
              </div>
            </div>
            <div className="about-feature">
              <span>
                <Icon name="trending" size={24} />
              </span>
              <div>
                <h3>Possibility in the everyday</h3>
                <p>
                  Different industries. A shared belief that a better way to
                  work starts with understanding your needs.
                </p>
              </div>
            </div>
            <a className="inline-link" href="#contact">
              Get to know Nexshora <Icon name="arrowRight" size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
