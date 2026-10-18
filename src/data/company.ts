/** Shared company contact details used by the website and enquiry drafts. */
export const COMPANY = {
  name: "Nexshora",
  email: "info@nexshora.com",
  phone: "+94 76 735 5075",
  phoneLink: "+94767355075",
  whatsappUrl: "https://wa.me/94767355075",
};

export type ProductId = "care" | "pos" | "booking" | "erp";
export type LiveProductId = Extract<ProductId, "care" | "pos">;
const SYSTEM_URL = "https://pos.nexshora.com/";

export const PRODUCTS = [
  {
    id: "care" as const,
    name: "Doctor & treatment management",
    shortName: "Healthcare",
    category: "FOR HEALTHCARE",
    description:
      "More focus on care. Less time on the everyday work around it. Explore our system for doctors and treatment management.",
    icon: "care" as const,
    status: "Current product",
    url: SYSTEM_URL,
  },
  {
    id: "pos" as const,
    name: "Point of sale",
    shortName: "Retail & POS",
    category: "FOR EVERYDAY BUSINESS",
    description:
      "Make the point of sale a better part of your business. Discover the Nexshora POS system and discuss the right fit for your team.",
    icon: "pos" as const,
    status: "Current product",
    url: SYSTEM_URL,
  },
  {
    id: "booking" as const,
    name: "Booking management",
    shortName: "Booking",
    category: "ON OUR ROADMAP",
    description:
      "A simpler way to bring people, availability, and reservations together. Part of our next chapter.",
    icon: "booking" as const,
    status: "Planned",
  },
  {
    id: "erp" as const,
    name: "Enterprise resource planning",
    shortName: "ERP",
    category: "ON OUR ROADMAP",
    description:
      "A broader view of the business, with a connected approach to everyday operations. Part of our long-term vision.",
    icon: "erp" as const,
    status: "Planned",
  },
];
