import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Check } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/33600000000?text=Bonjour%2C%20je%20souhaite%20recevoir%20un%20exemple%20gratuit%20BoostImmoPro";

const FinalCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cta" className="section-padding">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="gradient-primary rounded-3xl p-12 md:p-20 text-center shadow-elevated"
        >
          <p className="text-[13px] font-medium tracking-wide-premium uppercase text-primary-foreground/50 mb-6">
            Offre découverte
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-primary-foreground mb-6 leading-tight">
            Voyez la différence sur{" "}
            <span className="italic">votre annonce</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10 max-w-lg mx-auto font-light">
            Recevez votre exemple gratuit en moins de 24h et constatez l'impact sur vos résultats
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary-foreground text-primary px-10 py-5 rounded-xl text-base font-semibold tracking-wide-premium uppercase hover:opacity-90 transition-all hover:scale-[1.02]"
          >
            <MessageCircle size={20} />
            Recevoir mon exemple gratuit en moins de 24h
          </a>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {["Sans engagement", "Réponse rapide", "Service local"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <Check size={14} />
                <span className="font-light">{t}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
