import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Roboplay - Kursus Robotik Seru untuk Anak Usia 5-12 Tahun</title>
        <meta 
          name="description" 
          content="Roboplay adalah kursus robotik yang menyenangkan untuk anak usia 5-12 tahun. Belajar LEGO WeDo, ScratchJr, Micro:bit dan coding dengan cara yang kreatif dan interaktif!" 
        />
        <meta name="keywords" content="kursus robotik anak, les robotik, LEGO WeDo, ScratchJr, Micro:bit, coding untuk anak, robotik Indonesia" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://roboplay.id" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Roboplay - Kursus Robotik Seru untuk Anak" />
        <meta property="og:description" content="Belajar robotik dan coding dengan cara yang menyenangkan untuk anak usia 5-12 tahun!" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Roboplay - Kursus Robotik Seru untuk Anak" />
        <meta name="twitter:description" content="Belajar robotik dan coding dengan cara yang menyenangkan!" />
      </Helmet>

      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <section id="program">
          <CategoriesSection />
        </section>
        <section id="keuntungan">
          <BenefitsSection />
        </section>
        <CTASection />
        <section id="kontak">
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Index;
