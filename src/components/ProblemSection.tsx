import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Timer, ImageOff, EyeOff, TrendingDown } from "lucide-react";

const problems = [
  { icon: Timer, title: "Les visiteurs décident en quelques secondes", desc: "La première impression est visuelle. Pas de deuxième chance." },
  { icon: ImageOff, title: "Une mauvaise photo = annonce ignorée", desc: "Votre bien passe inaperçu face à la concurrence." },
  { icon: EyeOff, title: "Pas de projection, pas de visite", desc: "Sans décor, les acheteurs ne se voient pas vivre chez vous." },
  { icon: TrendingDown, title: "Le visuel est la clé de la réservation", desc: "90% des locataires et acheteurs commencent leur recherche en ligne." },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-background">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-[13px] font-medium tracking-wide-premium uppercase text-muted-foreground mb-4">
            Le constat
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-foreground leading-tight">
            Pourquoi vos photos actuelles ne{" "}
            <span className="italic">suffisent pas</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-border bg-card hover:shadow-elevated transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                <p.icon size={24} className="text-foreground group-hover:text-primary-foreground transition-colors duration-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
