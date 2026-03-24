import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

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
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Résultats <span className="gradient-text">concrets</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-card"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
              <div>
                <p className="font-semibold text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
