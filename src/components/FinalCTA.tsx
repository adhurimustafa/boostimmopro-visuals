import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" className="section-padding">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="gradient-primary rounded-3xl p-10 md:p-16 text-center shadow-premium"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
            Testez gratuitement sur une photo
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg mx-auto">
            Découvrez le potentiel de votre bien dès maintenant
          </p>
          <a
            href="https://wa.me/33600000000?text=Bonjour%2C%20je%20souhaite%20tester%20le%20service%20BoostImmoPro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-all hover:scale-[1.02]"
          >
            Envoyer ma photo <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
