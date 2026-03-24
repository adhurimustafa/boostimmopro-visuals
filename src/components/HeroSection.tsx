import { motion } from "framer-motion";
import { Check } from "lucide-react";
import heroImg from "@/assets/hero-interior.jpg";

const badges = [
  "Réponse rapide",
  "Résultat en 24h",
  "Service local Bordeaux",
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Intérieur moderne de luxe" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="absolute inset-0 gradient-primary opacity-40" />
    </div>

    <div className="container relative z-10 pt-28 pb-20 md:pt-40 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] text-primary-foreground mb-6">
          Transformez vos photos immobilières en visuels qui{" "}
          <span className="italic">vendent</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-10 font-light leading-relaxed">
          Boostez l'attractivité de votre bien grâce à la valorisation visuelle par IA
        </p>

        <a
          href="#cta"
          className="inline-block gradient-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-all hover:scale-[1.02] shadow-premium"
        >
          Recevoir un exemple gratuit
        </a>

        <div className="flex flex-wrap gap-4 mt-10">
          {badges.map((b) => (
            <div key={b} className="flex items-center gap-2 text-primary-foreground/90 text-sm">
              <Check size={16} className="text-accent" />
              <span>{b}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
