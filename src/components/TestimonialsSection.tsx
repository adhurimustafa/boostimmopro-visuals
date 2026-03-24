import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marie L.",
    role: "Hôte Airbnb, Bordeaux",
    text: "Grâce à BoostImmoPro, mon annonce Airbnb a beaucoup plus de réservations. Les photos sont incroyablement réalistes et attractives.",
    stars: 5,
  },
  {
    name: "Thomas D.",
    role: "Agent immobilier",
    text: "Un service rapide et professionnel. Mes clients sont bluffés par la qualité des visuels. Je recommande sans hésitation.",
    stars: 5,
  },
  {
    name: "Sophie M.",
    role: "Propriétaire",
    text: "J'ai vendu mon appartement en 2 semaines après avoir refait les photos avec BoostImmoPro. La différence est flagrante !",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-[13px] font-medium tracking-wide-premium uppercase text-muted-foreground mb-4">
            Témoignages
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-foreground leading-tight">
            Résultats <span className="italic">concrets</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-500 relative"
            >
              <Quote size={32} className="text-border mb-6" />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} size={14} className="fill-foreground text-foreground" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-8 font-light">"{t.text}"</p>
              <div className="border-t border-border pt-5">
                <p className="font-semibold text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
