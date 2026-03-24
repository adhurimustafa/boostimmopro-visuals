import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ImageOff, EyeOff, TrendingDown, MousePointerClick } from "lucide-react";

const problems = [
  { icon: ImageOff, title: "Photos froides ou vides", desc: "Des images qui ne mettent pas en valeur votre bien" },
  { icon: EyeOff, title: "Manque de projection", desc: "Les visiteurs ne se voient pas vivre dans l'espace" },
  { icon: TrendingDown, title: "Faible attractivité", desc: "Votre annonce passe inaperçue face à la concurrence" },
  { icon: MousePointerClick, title: "Moins de clics, moins de visites", desc: "Un visuel moyen = des opportunités manquées" },
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
            Pourquoi votre annonce ne{" "}
            <span className="italic">performe pas</span> ?
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
