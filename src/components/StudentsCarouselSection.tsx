import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Student data - replace image paths with actual student photos later
// Recommended: portrait orientation (3:4 or 2:3 aspect ratio)
const students = [
  {
    id: 1,
    name: "Aisyah",
    age: 7,
    quote: "Suka banget bikin robot LEGO!",
    image: "/placeholder.svg",
    program: "LEGO WeDo 2.0",
  },
  {
    id: 2,
    name: "Bima",
    age: 9,
    quote: "Coding itu seru dan gampang!",
    image: "/placeholder.svg",
    program: "ScratchJr",
  },
  {
    id: 3,
    name: "Citra",
    age: 8,
    quote: "Robotku bisa bergerak sendiri!",
    image: "/placeholder.svg",
    program: "Micro:bit",
  },
  {
    id: 4,
    name: "Dimas",
    age: 10,
    quote: "Pengen jadi programmer robot!",
    image: "/placeholder.svg",
    program: "LEGO WeDo 2.0",
  },
  {
    id: 5,
    name: "Ella",
    age: 6,
    quote: "Belajar sambil main, asik!",
    image: "/placeholder.svg",
    program: "ScratchJr",
  },
  {
    id: 6,
    name: "Farel",
    age: 11,
    quote: "Robotik bikin aku kreatif!",
    image: "/placeholder.svg",
    program: "Micro:bit",
  },
];

const StudentCard = ({ student, index }: { student: typeof students[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-card rounded-3xl p-4 border-2 border-border shadow-card hover:shadow-hover transition-all duration-300">
        {/* Portrait Image Container */}
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted mb-4">
          <img
            src={student.image}
            alt={`Foto ${student.name}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Program Badge */}
          <div className="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-white text-xs font-bold rounded-full backdrop-blur-sm">
            {student.program}
          </div>
        </div>

        {/* Info */}
        <div className="text-center">
          <h3 className="text-lg font-bold text-foreground mb-1">
            {student.name}, {student.age} th
          </h3>
          <p className="text-muted-foreground text-sm italic">
            "{student.quote}"
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const StudentsCarouselSection = () => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 text-6xl opacity-10 -rotate-12">📸</div>
      <div className="absolute bottom-10 left-10 text-6xl opacity-10 rotate-12">🎓</div>

      <div className="container">
        {/* Section title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-bold mb-4">
            👨‍👩‍👧‍👦 Murid Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Cerita <span className="text-secondary">Murid Roboplay</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Lihat bagaimana anak-anak ini belajar dan berkembang bersama kami!
          </p>
        </motion.div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {students.map((student, index) => (
              <CarouselItem
                key={student.id}
                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <StudentCard student={student} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative left-0 top-0 translate-y-0 h-10 w-10 bg-primary text-white hover:bg-primary/90 border-none shadow-playful" />
            <CarouselNext className="relative right-0 top-0 translate-y-0 h-10 w-10 bg-primary text-white hover:bg-primary/90 border-none shadow-playful" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default StudentsCarouselSection;
