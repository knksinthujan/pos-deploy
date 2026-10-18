# Nexshora company website

A photographic company website inspired by the supplied Apptron Solutions design reference, for Nexshora, a multi-business company with current doctor and treatment management and POS systems, and planned booking and ERP products.

## Run locally

```bash
npm install
npm run dev
npm run build
npm run preview
```

The site uses React, TypeScript, and Vite. It has native page scrolling and no Three.js or scroll-triggered animation.

## Main source files

- `src/App.tsx`: single-page company website shell with a fixed white header and footer.
- `src/pages/HomePage.tsx`: composes all sections and shares the selected enquiry product.
- `src/components/sections/`: separate components for the hero, business overview, about, approach, solutions, process, roadmap, vision, FAQ, and contact sections.
- `src/components/sections/ContactSection.tsx`: enquiry form, email draft, and downloadable enquiry.
- `src/data/company.ts`: company contact details and product descriptions.
- `src/styles/company.css`: shared layouts, product concepts, and forms.
- `src/styles/reference.css`: photographic company design and responsive overrides.
- `src/styles/contact.css`: contact section layout, typography, and form styling.

The POS and medical treatment product links open `https://pos.nexshora.com/` in a new tab. Their URLs are configured in `src/data/company.ts`. Booking and ERP are clearly identified as planned.

## Sections and navigation

All content appears on one scrolling page. Navigation uses native section anchors such as `#solutions`, `#about`, `#roadmap`, and `#contact`, with smooth scrolling and no application routes or page transitions. Reduced-motion preferences disable the scrolling animation. Footer links also point to `#approach`, `#process`, and `#faq`. Roadmap enquiry links select the relevant product in the contact form.

The production build creates a single `index.html`. Upload the complete `dist/` directory when deploying.

## Contact details

Contact details are configured in `src/data/company.ts`: `info@nexshora.com` and `+94 76 735 5075` for calls and WhatsApp. The form prepares an enquiry for the visitor to review and send through their email app; it does not send emails or store enquiries on a server. Visitors can also download their enquiry as a text file.

## Preview HTML

`Sutrigo.html` is the retained zero-build preview entry. It loads the same React source through an in-browser TypeScript loader. Use Vite for development and the production build for deployment.

## Design reference and photographs

Layout reference: https://www.apptronsolutions.com/

The hero uses a custom AI-generated conceptual illustration of healthcare, retail, and enterprise work. The original and generation prompt are preserved in `design-assets/`; its web export is `public/images/nexshora-business-hero.jpg`.

Other unbranded stock photographs are hosted locally in `public/images`. They illustrate business contexts and are not presented as Nexshora staff or premises. Sources:

- Team photographs: https://images.unsplash.com/photo-1522071820081-009f0129c71c
- Workspace: https://images.unsplash.com/photo-1497366811353-6870744d04b2
- Healthcare: https://unsplash.com/photos/doctor-consults-with-patient-in-medical-office-iyeUwItlIPk
- Retail: https://images.unsplash.com/photo-1441986300917-64674bd600d8
- Booking: https://images.unsplash.com/photo-1450101499163-c8848c66ca85
- Business planning: https://images.unsplash.com/photo-1460925895917-afdab827c52f
