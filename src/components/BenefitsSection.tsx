import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Users, Gamepad2, Brain } from "lucide-react";

const benefits = [
  {
    icon: Lightbulb,
    title: "Kreativitas Tanpa Batas",
    description: "Anak-anak bebas berkreasi, merancang, dan membangun robot impian mereka.",
    emoji: "💡",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Brain,
    title: "Berpikir Logis",
    description: "Belajar problem solving dan computational thinking sejak dini.",
    emoji: "🧠",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Users,
    title: "Kerja Tim",
    description: "Kolaborasi dengan teman untuk menyelesaikan proyek bersama-sama.",
    emoji: "🤝",
    color: "text-lego-green",
    bgColor: "bg-lego-green/10",
  },
  {
    icon: Gamepad2,
    title: "Belajar Sambil Bermain",
    description: "Pembelajaran interaktif yang membuat anak-anak excited untuk belajar!",
    emoji: "🎮",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const BenefitCard = ({ benefit, index }: { benefit: typeof benefits[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="flex items-start gap-5 group"
    >
      {/* Icon container */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className={`flex-shrink-0 w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center shadow-card group-hover:shadow-hover transition-all duration-300`}
      >
        <span className="text-3xl">{benefit.emoji}</span>
      </motion.div>

      {/* Content */}
      <div>
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {benefit.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </motion.div>
  );
};

const BenefitsSection = () => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-gradient-hero relative overflow-hidden">
      {/* Floating decorations */}
      <motion.div
        className="absolute top-20 right-20 text-7xl opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        ⚙️
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-20 text-6xl opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        🚀
      </motion.div>

      <div className="container">
        {/* Section title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-bold mb-4">
            🌟 Keuntungan Belajar
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Kenapa Belajar <span className="text-accent">Robotik?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Robotik bukan hanya soal mesin—tapi tentang mempersiapkan anak untuk masa depan!
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>

        {/* Fun fact */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-card rounded-2xl shadow-card border border-primary/20">
            <span className="text-3xl">🎯</span>
            <p className="text-foreground font-semibold">
              <span className="text-primary">95%</span> anak yang belajar robotik memiliki kemampuan problem-solving yang lebih baik!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
