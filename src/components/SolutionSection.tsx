import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Upload, Sparkles, Download } from "lucide-react";

const steps = [
  { icon: Upload, num: "01", title: "Envoyez vos photos", desc: "Partagez simplement vos images par WhatsApp, email ou formulaire" },
  { icon: Sparkles, num: "02", title: "Nous sublîmons votre intérieur", desc: "Notre équipe crée des visuels haut de gamme pour mettre en valeur chaque espace" },
  { icon: Download, num: "03", title: "Recevez vos visuels", desc: "Des images prêtes à publier, livrées en moins de 24h" },
];

const SolutionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-foreground">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-[13px] font-medium tracking-wide-premium uppercase text-primary-foreground/50 mb-4">
            Comment ça marche
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-primary-foreground leading-tight">
            Simple, rapide{" "}
            <span className="italic">et efficace</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-2xl border border-primary-foreground/15 flex items-center justify-center mx-auto mb-6">
                <s.icon size={30} className="text-primary-foreground/80" />
              </div>
              <div className="text-xs font-semibold text-primary-foreground/40 mb-3 tracking-wide-premium uppercase">{s.num}</div>
              <h3 className="text-xl font-display font-bold text-primary-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
