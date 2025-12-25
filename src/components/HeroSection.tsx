import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import roboplayLogo from "@/assets/roboplay-logo.jpg";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/6281234567890?text=Halo%20Roboplay!%20Saya%20ingin%20mendaftar%20kursus%20robotik%20untuk%20anak.";

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gear icon top left */}
        <motion.div
          className="absolute top-20 left-10 text-6xl md:text-8xl opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          ⚙️
        </motion.div>
        
        {/* Robot icon top right */}
        <motion.div
          className="absolute top-32 right-10 md:right-20 text-5xl md:text-7xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          🤖
        </motion.div>
        
        {/* LEGO brick bottom left */}
        <motion.div
          className="absolute bottom-40 left-5 md:left-20 text-4xl md:text-6xl"
          animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          🧱
        </motion.div>
        
        {/* Circuit bottom right */}
        <motion.div
          className="absolute bottom-20 right-10 text-5xl md:text-6xl opacity-30"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          🔌
        </motion.div>
        
        {/* Star decorations */}
        <motion.div
          className="absolute top-1/4 left-1/4 text-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          ⭐
        </motion.div>
        
        <motion.div
          className="absolute top-1/3 right-1/4 text-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          ✨
        </motion.div>
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen py-20 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <img 
            src={roboplayLogo} 
            alt="RoboPlay - Coding & Robotic" 
            className="w-32 h-32 md:w-40 md:h-40 object-contain"
          />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight"
        >
          Belajar <span className="text-primary">Robotik</span> Jadi{" "}
          <span className="text-accent">Seru!</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
        >
          Kursus robotik yang menyenangkan untuk anak usia 5-12 tahun. 
          Belajar coding, bangun robot, dan kembangkan kreativitas bersama{" "}
          <span className="font-bold text-primary">Roboplay</span>! 🚀
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            variant="whatsapp"
            size="lg"
            asChild
            className="group w-full max-w-xs sm:max-w-none sm:w-auto whitespace-normal"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce flex-shrink-0" />
              <span className="text-sm sm:text-base">Daftar Sekarang via WhatsApp</span>
            </a>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
