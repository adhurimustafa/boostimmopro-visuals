import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Upload, Wand2, Download } from "lucide-react";

const steps = [
  { icon: Upload, num: "01", title: "Envoyez vos photos", desc: "Partagez simplement vos images par WhatsApp, email ou formulaire" },
  { icon: Wand2, num: "02", title: "Nous transformons votre intérieur", desc: "IA + design professionnel pour un résultat bluffant" },
  { icon: Download, num: "03", title: "Recevez vos visuels", desc: "Des images prêtes à publier en moins de 24h" },
];

const SolutionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary">
      <div className="container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Une solution <span className="gradient-text">simple, rapide et efficace</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-5 shadow-premium">
                <s.icon size={28} className="text-primary-foreground" />
              </div>
              <div className="text-xs font-bold text-accent mb-2 tracking-widest uppercase">{s.num}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
