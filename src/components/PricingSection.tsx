import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star } from "lucide-react";

const PricingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Nos <span className="gradient-text">offres</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Standard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl border border-border bg-card shadow-card hover:shadow-premium transition-shadow"
          >
            <h3 className="text-xl font-bold text-foreground mb-1">Offre à Distance</h3>
            <p className="text-sm text-muted-foreground mb-6">Envoyez vos photos, on s'occupe du reste</p>
            <div className="space-y-3 mb-8">
              {[
                { label: "1 photo", price: "10€" },
                { label: "3 photos", price: "25€" },
                { label: "5 photos", price: "45€" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between py-2 border-b border-border/50">
                  <span className="text-sm text-foreground">{item.label}</span>
                  <span className="font-bold text-foreground">{item.price}</span>
                </div>
              ))}
            </div>
            <a href="#cta" className="block text-center py-3 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
              Commander
            </a>
          </motion.div>

          {/* Premium */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative p-8 rounded-2xl gradient-primary text-primary-foreground shadow-premium"
          >
            <div className="absolute -top-3 right-6 flex items-center gap-1 bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full">
              <Star size={12} /> Recommandé
            </div>
            <h3 className="text-xl font-bold mb-1">Offre Premium Sur Place</h3>
            <p className="text-sm text-primary-foreground/70 mb-6">Service complet à Bordeaux</p>
            <div className="space-y-3 mb-8">
              {[
                "Déplacement Bordeaux",
                "Photos optimisées",
                "Transformation IA",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 py-2">
                  <Check size={16} className="text-accent-foreground/80 shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="text-3xl font-bold mb-6">80€ – 120€</div>
            <a href="#cta" className="block text-center py-3 rounded-xl bg-primary-foreground text-primary font-semibold hover:opacity-90 transition-opacity">
              Réserver
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
