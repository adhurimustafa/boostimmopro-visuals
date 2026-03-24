import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";

const comparisons = [
  { before: before1, after: after1, label: "Salon — Mise en scène complète" },
  { before: before2, after: after2, label: "Chambre — Ambiance haut de gamme" },
];

const ComparisonCard = ({ before, after, label, index }: { before: string; after: string; label: string; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
    >
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        <div className="relative overflow-hidden rounded-2xl shadow-elevated group">
          <div className="absolute top-4 left-4 z-10 bg-foreground/80 text-primary-foreground text-xs font-medium tracking-wide-premium uppercase px-4 py-2 rounded-full">
            Avant
          </div>
          <img src={before} alt={`${label} avant`} loading="lazy" width={800} height={600} className="w-full h-56 md:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="relative overflow-hidden rounded-2xl shadow-elevated group">
          <div className="absolute top-4 left-4 z-10 gradient-primary text-primary-foreground text-xs font-medium tracking-wide-premium uppercase px-4 py-2 rounded-full">
            Après
          </div>
          <img src={after} alt={`${label} après`} loading="lazy" width={800} height={600} className="w-full h-56 md:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
      </div>
      <p className="text-center text-sm text-muted-foreground font-medium mt-5 tracking-premium">{label}</p>
    </motion.div>
  );
};

const BeforeAfterSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-[13px] font-medium tracking-wide-premium uppercase text-muted-foreground mb-4">
            Nos réalisations
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
            La transformation qui capte{" "}
            <span className="italic">l'attention</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            Chaque visuel est conçu pour mieux révéler le potentiel d'un bien.
          </p>
        </motion.div>

        <div className="space-y-14 max-w-5xl mx-auto">
          {comparisons.map((c, i) => (
            <ComparisonCard key={c.label} {...c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
