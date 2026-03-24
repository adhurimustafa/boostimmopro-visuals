import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, BarChart3, Clock, Award, MapPin } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "Augmente l'attractivité", desc: "Des visuels qui captent immédiatement l'attention" },
  { icon: BarChart3, title: "Améliore les performances", desc: "Plus de clics, plus de visites, plus de conversions" },
  { icon: Clock, title: "Gain de temps", desc: "Résultats livrés en moins de 24 heures" },
  { icon: Award, title: "Résultat professionnel", desc: "Qualité studio à un prix accessible" },
  { icon: MapPin, title: "Service local + humain", desc: "Un interlocuteur à Bordeaux, disponible et réactif" },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary">
      <div className="container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Pourquoi <span className="gradient-text">BoostImmoPro</span> ?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:shadow-card transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                <b.icon size={18} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{b.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
