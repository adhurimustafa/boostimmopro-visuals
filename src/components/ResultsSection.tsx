import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MousePointerClick, Eye, Zap } from "lucide-react";

const results = [
  {
    icon: MousePointerClick,
    title: "Plus de clics sur vos annonces",
    desc: "Des visuels premium qui captent l'attention dès la première seconde",
  },
  {
    icon: Eye,
    title: "Meilleure projection pour les visiteurs",
    desc: "Vos futurs locataires ou acheteurs se projettent instantanément",
  },
  {
    icon: Zap,
    title: "Biens loués ou vendus plus rapidement",
    desc: "Des résultats concrets : moins de temps sur le marché",
  },
];

const ResultsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-background">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-[13px] font-medium tracking-wide-premium uppercase text-muted-foreground mb-4">
            L'impact
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-foreground leading-tight">
            Des résultats <span className="italic">concrets</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {results.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="text-center p-8 rounded-2xl border border-border bg-card hover:shadow-elevated transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                <r.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-3">
                {r.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/33600000000?text=Bonjour%2C%20je%20souhaite%20recevoir%20un%20exemple%20gratuit%20BoostImmoPro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 gradient-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold hover:opacity-90 transition-all hover:scale-[1.02] shadow-premium"
          >
            Envoyer une photo sur WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
