import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-padding-sm bg-secondary">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-[13px] font-medium tracking-wide-premium uppercase text-muted-foreground mb-4">
            Nous contacter
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Parlons de votre projet
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto"
        >
          <a
            href="https://wa.me/33656869417?text=Bonjour%2C%20je%20souhaite%20%C3%AAtre%20contact%C3%A9%20pour%20mon%20projet"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-500 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={22} className="text-foreground" />
            <span className="font-semibold text-foreground">WhatsApp</span>
          </a>

          <a
            href="mailto:contact@boostimmopro.fr"
            className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-500 w-full sm:w-auto justify-center"
          >
            <Mail size={22} className="text-foreground" />
            <span className="font-semibold text-foreground">contact@boostimmopro.fr</span>
          </a>
        </motion.div>

        <div className="flex items-center justify-center gap-2.5 mt-10 text-muted-foreground text-sm font-light">
          <MapPin size={16} />
          <span>Bordeaux et alentours</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
