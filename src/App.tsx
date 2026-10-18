import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HomePage } from "@/pages/HomePage";

export function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="home-page">
        <HomePage />
      </main>
      <Footer />
    </>
  );
}
