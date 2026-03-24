import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import bordeaux from "@/assets/bordeaux-city.jpg";

const LocalSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary overflow-hidden">
      <div className="container" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Un service unique à <span className="gradient-text">Bordeaux</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              Contrairement aux services en ligne, nous pouvons nous déplacer pour capturer et optimiser vos visuels directement sur place.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Notre connaissance du marché bordelais et de ses spécificités nous permet de créer des visuels parfaitement adaptés à votre cible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-premium"
          >
            <img src={bordeaux} alt="Bordeaux" loading="lazy" width={1200} height={600} className="w-full h-64 md:h-80 object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocalSection;
