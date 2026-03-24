import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import bordeaux from "@/assets/bordeaux-city.jpg";

const LocalSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-secondary overflow-hidden">
      <div className="container" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[13px] font-medium tracking-wide-premium uppercase text-muted-foreground mb-4">
              Ancrage local
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-foreground mb-8 leading-tight">
              Un service local, au plus près de{" "}
              <span className="italic">vos biens</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6 font-light">
              BoostImmoPro accompagne les propriétaires, hôtes Airbnb et professionnels de l'immobilier à Bordeaux et dans ses alentours.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light">
              Notre connaissance du marché bordelais et de ses spécificités nous permet de créer des visuels parfaitement adaptés à votre cible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-elevated"
          >
            <img src={bordeaux} alt="Bordeaux" loading="lazy" width={1200} height={600} className="w-full h-72 md:h-96 object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocalSection;
