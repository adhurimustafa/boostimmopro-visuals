import { motion } from "framer-motion";
import { Check, ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-interior.jpg";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";

const badges = [
  "Réponse rapide",
  "Résultat en 24h",
  "Service local à Bordeaux",
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Intérieur moderne de luxe" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-foreground/70" />
    </div>

    <div className="container relative z-10 pt-32 pb-24 md:pt-44 md:pb-36">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-[13px] font-medium tracking-wide-premium uppercase text-primary-foreground/60 mb-6">
            Home staging visuel premium
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.05] text-primary-foreground mb-8">
            Transformez vos photos immobilières en visuels qui donnent envie de louer ou d'acheter
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-lg mb-10 font-light leading-relaxed">
            Home staging virtuel haut de gamme, service local à Bordeaux. Résultat en 24h.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#cta"
              className="inline-block gradient-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold hover:opacity-90 transition-all hover:scale-[1.02] shadow-premium text-center"
            >
              Recevoir un exemple gratuit
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground/90 px-8 py-4 rounded-xl text-base font-medium hover:bg-primary-foreground/10 transition-all text-center"
            >
              Voir les transformations
              <ArrowDown size={16} />
            </a>
          </div>

          <div className="flex flex-wrap gap-6">
            {badges.map((b) => (
              <div key={b} className="flex items-center gap-2.5 text-primary-foreground/80 text-sm">
                <div className="w-5 h-5 rounded-full border border-primary-foreground/30 flex items-center justify-center">
                  <Check size={12} />
                </div>
                <span className="font-light">{b}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Before/After visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elevated border border-primary-foreground/10">
              <img src={after1} alt="Après transformation" className="w-full h-80 object-cover" width={800} height={600} />
              <div className="absolute bottom-4 left-4 bg-primary-foreground/95 text-foreground text-xs font-semibold px-4 py-2 rounded-full">
                Après
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-36 rounded-xl overflow-hidden shadow-elevated border-4 border-background/20">
              <img src={before1} alt="Avant transformation" className="w-full h-full object-cover" width={400} height={300} />
              <div className="absolute bottom-2 left-2 bg-foreground/80 text-primary-foreground text-[10px] font-semibold px-3 py-1 rounded-full">
                Avant
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
