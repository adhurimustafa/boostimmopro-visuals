import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";

const comparisons = [
  { before: before1, after: after1, label: "Salon" },
  { before: before2, after: after2, label: "Chambre" },
];

const ComparisonCard = ({ before, after, label, index }: { before: string; after: string; label: string; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="space-y-4"
    >
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        <div className="relative overflow-hidden rounded-xl">
          <div className="absolute top-3 left-3 z-10 bg-foreground/70 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            Avant
          </div>
          <img src={before} alt={`${label} avant`} loading="lazy" width={800} height={600} className="w-full h-48 md:h-64 lg:h-72 object-cover" />
        </div>
        <div className="relative overflow-hidden rounded-xl">
          <div className="absolute top-3 left-3 z-10 gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            Après
          </div>
          <img src={after} alt={`${label} après`} loading="lazy" width={800} height={600} className="w-full h-48 md:h-64 lg:h-72 object-cover" />
        </div>
      </div>
      <p className="text-center text-sm text-muted-foreground font-medium">{label}</p>
    </motion.div>
  );
};

const BeforeAfterSection = () => (
  <section id="services" className="section-padding bg-secondary">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
          Une transformation qui fait la <span className="gradient-text">différence</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Chaque image est optimisée pour séduire et projeter
        </p>
      </div>

      <div className="space-y-10 max-w-4xl mx-auto">
        {comparisons.map((c, i) => (
          <ComparisonCard key={c.label} {...c} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
