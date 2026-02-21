import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { ProcessSection } from "./components/ProcessSection";
import { ProductSection } from "./components/ProductSection";
import { GallerySection } from "./components/GallerySection";
import { TestimonialSection } from "./components/TestimonialSection";
import { NutritionSection } from "./components/NutritionSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ClientOnly } from "./components/ClientOnly";
import { PageLoader } from "./components/PageLoader";
import { CursorGlow } from "./components/CursorGlow";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ClientOnly>
        <PageLoader />
        <CursorGlow />
        <Navbar />
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <ProcessSection />
        <ProductSection />
        <GallerySection />
        <TestimonialSection />
        <NutritionSection />
        <ContactSection />
        <Footer />
      </ClientOnly>
    </main>
  );
}
