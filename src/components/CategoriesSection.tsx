import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "LEGO WeDo 2.0",
    description: "Bangun robot dengan LEGO! Belajar mekanik dasar sambil bermain dan berkreasi.",
    emoji: "🧱",
    color: "bg-accent",
    gradient: "from-accent/20 to-accent/5",
    borderColor: "border-accent/30",
    iconBg: "bg-accent/10",
  },
  {
    title: "ScratchJr Programming",
    description: "Belajar coding dengan cara yang mudah dan menyenangkan melalui blok visual!",
    emoji: "🐱",
    color: "bg-lego-orange",
    gradient: "from-secondary/30 to-secondary/5",
    borderColor: "border-secondary/40",
    iconBg: "bg-secondary/20",
  },
  {
    title: "Micro:bit & Tiny:bit",
    description: "Eksplorasi robotik elektronik! Membuat robot yang bisa bergerak dan berinteraksi.",
    emoji: "🔧",
    color: "bg-primary",
    gradient: "from-primary/20 to-primary/5",
    borderColor: "border-primary/30",
    iconBg: "bg-primary/10",
  },
];

const CategoryCard = ({ category, index }: { category: typeof categories[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`relative bg-gradient-to-br ${category.gradient} rounded-3xl p-8 border-2 ${category.borderColor} shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer group overflow-hidden`}
    >
      {/* Background decoration */}
      <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-gradient-to-br from-card/50 to-transparent opacity-50" />
      
      {/* Icon */}
      <div className={`w-20 h-20 ${category.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <span className="text-5xl">{category.emoji}</span>
      </div>
      
      {/* Title */}
      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
        {category.title}
      </h3>
      
      {/* Description */}
      <p className="text-muted-foreground leading-relaxed">
        {category.description}
      </p>

      {/* Hover indicator */}
      <motion.div
        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="text-2xl">→</span>
      </motion.div>
    </motion.div>
  );
};

const CategoriesSection = () => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 text-6xl opacity-10 rotate-12">🤖</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-10 -rotate-12">🎮</div>

      <div className="container">
        {/* Section title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4">
            📚 Program Belajar
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Kategori <span className="text-primary">Pembelajaran</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pilih program yang sesuai untuk anak Anda dan mulai petualangan robotik yang seru!
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
