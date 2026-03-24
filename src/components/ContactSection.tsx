import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Contactez-nous
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto"
        >
          <a
            href="https://wa.me/33600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border shadow-card hover:shadow-premium transition-shadow w-full sm:w-auto justify-center"
          >
            <MessageCircle size={20} className="text-accent" />
            <span className="font-semibold text-foreground">WhatsApp</span>
          </a>

          <a
            href="mailto:contact@boostimmopro.fr"
            className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border shadow-card hover:shadow-premium transition-shadow w-full sm:w-auto justify-center"
          >
            <Mail size={20} className="text-accent" />
            <span className="font-semibold text-foreground">contact@boostimmopro.fr</span>
          </a>
        </motion.div>

        <div className="flex items-center justify-center gap-2 mt-8 text-muted-foreground text-sm">
          <MapPin size={16} />
          <span>Bordeaux et alentours</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
