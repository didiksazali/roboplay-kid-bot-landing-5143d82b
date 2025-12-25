import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-foreground text-card py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-accent" />
      <motion.div
        className="absolute top-10 right-10 text-5xl opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        ⚙️
      </motion.div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <span className="text-2xl font-extrabold text-card">Roboplay</span>
              </div>
              <p className="text-card/70 leading-relaxed max-w-sm">
                Kursus robotik terbaik untuk anak-anak usia 5-12 tahun. 
                Belajar coding, mekanik, dan kreativitas dengan cara yang menyenangkan!
              </p>
            </motion.div>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 bg-card/10 hover:bg-primary rounded-xl flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-6 text-card">Kontak Kami</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-card/70 text-sm">
                  Jl. Pendidikan No. 123,<br />
                  Kota Anda, Indonesia 12345
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-card/70 text-sm">+62 812-3456-7890</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-card/70 text-sm">info@roboplay.id</p>
              </div>
            </div>
          </motion.div>

          {/* Quick links column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-6 text-card">Jam Operasional</h3>
            <div className="space-y-3 text-card/70 text-sm">
              <p>Senin - Jumat: 14:00 - 19:00</p>
              <p>Sabtu: 09:00 - 17:00</p>
              <p>Minggu: 10:00 - 15:00</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-card/20 text-center"
        >
          <p className="text-card/60 text-sm">
            © {currentYear} <span className="font-bold text-primary">Roboplay</span>. All rights reserved. 
            Made with 🤖 for future innovators!
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
