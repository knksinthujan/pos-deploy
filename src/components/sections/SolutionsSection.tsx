import { ProductIcon } from "@/components/Brand";
import { Icon } from "@/components/Icon";
import { PRODUCTS } from "@/data/company";

const IMAGES = {
  care: "/images/healthcare.jpg",
  pos: "/images/retail.jpg",
  booking: "/images/booking.jpg",
  erp: "/images/business-planning.jpg",
};

export function SolutionsSection() {
  return (
    <section id="solutions" className="solutions-section section-spacing">
      <div className="site-container">
        <div className="centered-heading">
          <span className="section-kicker">OUR SOLUTIONS</span>
          <h2 className="section-title">
            Technology for the way
            <br className="mobile-only" /> <span>you do business.</span>
          </h2>
          <p>
            Explore our current systems and the possibilities we’re planning
            next.
          </p>
        </div>
        <div className="photo-solutions-grid">
          {PRODUCTS.map((product) => (
            <article
              className={`photo-solution solution-${product.id}`}
              key={product.id}
            >
              <img
                src={IMAGES[product.id]}
                alt=""
                width={800}
                height={1000}
                loading="lazy"
              />
              <div className="photo-solution-overlay" />
              <div className="photo-solution-content">
                <span
                  className={`photo-product-status ${product.status === "Planned" ? "is-planned" : ""}`}
                >
                  <span /> {product.status}
                </span>
                <span className="photo-product-icon">
                  <ProductIcon type={product.id} size={30} />
                </span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <a
                  className="site-button"
                  href={product.url ?? "#roadmap"}
                  target={product.url ? "_blank" : undefined}
                  rel={product.url ? "noopener noreferrer" : undefined}
                  title={product.url ? "Opens in a new tab" : undefined}
                >
                  {product.status === "Planned"
                    ? "Discover what’s next"
                    : product.id === "pos"
                      ? "Open POS system"
                      : "Open medical system"}{" "}
                  <Icon name="arrowRight" size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
