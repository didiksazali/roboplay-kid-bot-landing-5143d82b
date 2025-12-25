import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const whatsappLink = "https://wa.me/6281234567890?text=Halo%20Roboplay!%20Saya%20ingin%20mendaftar%20kursus%20robotik%20untuk%20anak.";

  return (
    <section className="py-20 md:py-28 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Emoji decoration */}
          <motion.div
            className="flex justify-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="text-5xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            >
              🚀
            </motion.span>
            <motion.span
              className="text-5xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            >
              🤖
            </motion.span>
            <motion.span
              className="text-5xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            >
              ⭐
            </motion.span>
          </motion.div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Siap Mulai <span className="text-primary">Petualangan</span> Robotik?
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Daftarkan anak Anda sekarang dan biarkan mereka menjadi{" "}
            <span className="font-bold text-accent">inventor masa depan</span>! 
            Hubungi kami via WhatsApp untuk info lebih lanjut.
          </p>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
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

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-6 text-muted-foreground text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">✅</span>
              <span>Free Trial Class</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">✅</span>
              <span>Sertifikat Kelulusan</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">✅</span>
              <span>Pengajar Berpengalaman</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
