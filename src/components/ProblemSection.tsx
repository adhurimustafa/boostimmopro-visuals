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
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background">
      <div className="container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Pourquoi votre annonce ne <span className="gradient-text">performe pas</span> ?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card hover:shadow-card transition-shadow group"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <p.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
