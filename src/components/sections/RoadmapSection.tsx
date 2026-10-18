import { ProductIcon } from "@/components/Brand";
import { Icon } from "@/components/Icon";
import { PRODUCTS, type ProductId } from "@/data/company";

export function RoadmapSection({
  onInterestChange,
}: {
  onInterestChange: (value: ProductId) => void;
}) {
  return (
    <section id="roadmap" className="roadmap-section section-spacing">
      <div className="site-container">
        <div className="centered-heading">
          <span className="section-kicker">OUR NEXT CHAPTER</span>
          <h2 className="section-title">
            Today is just <span>the beginning.</span>
          </h2>
          <p>
            We’re thinking beyond today’s products. Here’s where we plan to go
            next.
          </p>
        </div>
        <div className="roadmap-grid">
          {PRODUCTS.slice(2).map((product) => (
            <article className="roadmap-card" key={product.id}>
              <div className="roadmap-card-top">
                <span className="roadmap-product-icon">
                  <ProductIcon type={product.id} size={30} />
                </span>
                <span className="planned-badge">On the roadmap</span>
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <a href="#contact" onClick={() => onInterestChange(product.id)}>
                Share your interest <Icon name="arrowUpRight" size={19} />
              </a>
            </article>
          ))}
        </div>
        <div className="roadmap-foot">
          <span>
            <Icon name="info" size={15} /> Planned products. Launch dates will
            be shared when they’re ready.
          </span>
        </div>
      </div>
    </section>
  );
}
