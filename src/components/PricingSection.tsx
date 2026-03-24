import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Crown, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/33656869417?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20services%2C%20pouvez-vous%20me%20contacter%20%3F";

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
            Tarifs simples
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-foreground leading-tight">
            Choisissez votre <span className="italic">formule</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed mt-4">
            Deux offres claires, orientées résultat
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Pack Découverte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="p-10 rounded-2xl border border-border bg-card shadow-card hover:shadow-elevated transition-all duration-500"
          >
            <h3 className="text-2xl font-display font-bold text-foreground mb-2">Pack Découverte</h3>
            <p className="text-sm text-muted-foreground mb-4 font-light">Idéal pour booster votre annonce rapidement</p>
            <div className="text-4xl font-display font-bold text-foreground mb-8">25€</div>
            <div className="space-y-4 mb-10">
              {[
                "3 photos sublimées",
                "Livraison en 24h",
                "Envoi par WhatsApp ou email",
                "Retouches incluses",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border border-border flex items-center justify-center shrink-0">
                    <Check size={12} className="text-foreground" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl border-2 border-foreground text-foreground text-sm font-semibold tracking-wide-premium uppercase hover:bg-foreground hover:text-background transition-all duration-300"
            >
              <MessageCircle size={16} />
              Commander sur WhatsApp
            </a>
          </motion.div>

          {/* Pack Complet */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative p-10 rounded-2xl gradient-primary text-primary-foreground shadow-elevated"
          >
            <div className="absolute -top-4 right-8 flex items-center gap-2 bg-background text-foreground text-xs font-semibold tracking-wide-premium uppercase px-5 py-2 rounded-full shadow-card">
              <Crown size={14} /> Le plus demandé
            </div>
            <h3 className="text-2xl font-display font-bold mb-2">Pack Complet</h3>
            <p className="text-sm text-primary-foreground/60 mb-4 font-light">Maximisez vos réservations et l'impact de votre annonce</p>
            <div className="text-4xl font-display font-bold mb-8">45€</div>
            <div className="space-y-4 mb-10">
              {[
                "5 photos sublimées",
                "Livraison en 24h",
                "Retouches illimitées",
                "Conseil personnalisé inclus",
                "Optimisé pour Airbnb & portails",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border border-primary-foreground/30 flex items-center justify-center shrink-0">
                    <Check size={12} />
                  </div>
                  <span className="text-sm font-light">{item}</span>
                </div>
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary-foreground text-primary text-sm font-semibold tracking-wide-premium uppercase hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={16} />
              Commander sur WhatsApp
            </a>
          </motion.div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 font-light">
          Service local à Bordeaux · Réponse rapide · Sans engagement
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
