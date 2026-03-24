import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, BarChart3, Clock, Award, MapPin } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "Plus d'attractivité", desc: "Des visuels qui captent immédiatement l'attention des acquéreurs" },
  { icon: BarChart3, title: "Plus de clics", desc: "Des annonces qui génèrent plus de visites et de conversions" },
  { icon: Clock, title: "Gain de temps", desc: "Résultats livrés en moins de 24 heures" },
  { icon: Award, title: "Présentation haut de gamme", desc: "Qualité studio à un prix accessible" },
  { icon: MapPin, title: "Service local et humain", desc: "Un interlocuteur dédié à Bordeaux, disponible et réactif" },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-secondary">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-[13px] font-medium tracking-wide-premium uppercase text-muted-foreground mb-4">
            Vos avantages
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-foreground leading-tight">
            Pourquoi choisir{" "}
            <span className="italic">BoostImmoPro</span> ?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-5 p-6 rounded-2xl bg-card border border-border hover:shadow-elevated transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <b.icon size={20} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
