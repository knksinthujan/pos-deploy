import { ProductIcon } from "@/components/Brand";
import { Icon } from "@/components/Icon";
import { PRODUCTS } from "@/data/company";

export function BusinessDomainsSection() {
  return (
    <section className="business-domains">
      <div className="site-container">
        <div className="centered-heading">
          <span className="section-kicker">
            ONE COMPANY. MANY POSSIBILITIES.
          </span>
          <h2>
            Built for a world of <span>business.</span>
          </h2>
        </div>
        <div className="domain-strip">
          {PRODUCTS.map((product) => (
            <a
              key={product.id}
              href={product.url ?? "#roadmap"}
              target={product.url ? "_blank" : undefined}
              rel={product.url ? "noopener noreferrer" : undefined}
              title={product.url ? "Opens in a new tab" : undefined}
            >
              <span className="domain-icon">
                <ProductIcon type={product.id} size={28} />
              </span>
              <span>
                <strong>{product.shortName}</strong>
                <small>
                  {product.status === "Planned"
                    ? "On our roadmap"
                    : "Current product"}
                </small>
              </span>
              <Icon name="arrowUpRight" size={17} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
