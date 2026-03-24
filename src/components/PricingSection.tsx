import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Crown } from "lucide-react";

const PricingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-[13px] font-medium tracking-wide-premium uppercase text-muted-foreground mb-4">
            Tarifs
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-foreground leading-tight">
            Nos <span className="italic">offres</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* À distance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="p-10 rounded-2xl border border-border bg-card shadow-card hover:shadow-elevated transition-all duration-500"
          >
            <h3 className="text-2xl font-display font-bold text-foreground mb-2">À distance</h3>
            <p className="text-sm text-muted-foreground mb-8 font-light">Envoyez vos photos, on s'occupe du reste</p>
            <div className="space-y-4 mb-10">
              {[
                { label: "1 photo", price: "10€" },
                { label: "3 photos", price: "25€" },
                { label: "5 photos", price: "45€" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between py-3 border-b border-border/60">
                  <span className="text-sm text-foreground">{item.label}</span>
                  <span className="text-lg font-display font-bold text-foreground">{item.price}</span>
                </div>
              ))}
            </div>
            <a href="#cta" className="block text-center py-4 rounded-xl border-2 border-foreground text-foreground text-sm font-semibold tracking-wide-premium uppercase hover:bg-foreground hover:text-background transition-all duration-300">
              Commander
            </a>
          </motion.div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative p-10 rounded-2xl gradient-primary text-primary-foreground shadow-elevated"
          >
            <div className="absolute -top-4 right-8 flex items-center gap-2 bg-background text-foreground text-xs font-semibold tracking-wide-premium uppercase px-5 py-2 rounded-full shadow-card">
              <Crown size={14} /> Le plus demandé
            </div>
            <h3 className="text-2xl font-display font-bold mb-2">Service Signature</h3>
            <p className="text-sm text-primary-foreground/60 mb-8 font-light">Service complet à Bordeaux</p>
            <div className="space-y-4 mb-10">
              {[
                "Déplacement sur place",
                "Prise de vues optimisées",
                "Valorisation visuelle premium",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 py-3">
                  <div className="w-6 h-6 rounded-full border border-primary-foreground/30 flex items-center justify-center shrink-0">
                    <Check size={14} />
                  </div>
                  <span className="text-sm font-light">{item}</span>
                </div>
              ))}
            </div>
            <div className="text-4xl font-display font-bold mb-8">80€ – 120€</div>
            <a href="#cta" className="block text-center py-4 rounded-xl bg-primary-foreground text-primary text-sm font-semibold tracking-wide-premium uppercase hover:opacity-90 transition-opacity">
              Réserver
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
