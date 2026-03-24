import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    slug: "ameliorer-annonce-airbnb",
    title: "Comment améliorer une annonce Airbnb avec des visuels professionnels",
    excerpt: "Découvrez les techniques pour transformer vos photos Airbnb et augmenter vos réservations.",
  },
  {
    slug: "home-staging-virtuel-ia",
    title: "Home staging virtuel : vendre plus vite grâce au visuel",
    excerpt: "Le home staging virtuel révolutionne la vente immobilière. Voici comment en profiter.",
  },
  {
    slug: "photos-immobilieres-decisives",
    title: "Pourquoi les photos immobilières sont décisives",
    excerpt: "90% des acheteurs commencent leur recherche en ligne. Vos photos sont votre premier argument.",
  },
  {
    slug: "avant-apres-transformer-bien-ia",
    title: "Avant / après : transformer un bien avec le home staging",
    excerpt: "Exemples concrets de transformations visuelles qui ont changé la donne pour nos clients.",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="blog" className="section-padding bg-background">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-[13px] font-medium tracking-wide-premium uppercase text-muted-foreground mb-4">
            Journal
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-foreground leading-tight">
            Notre <span className="italic">blog</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {articles.map((a, i) => (
            <motion.div
              key={a.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/blog/${a.slug}`}
                className="block p-8 rounded-2xl border border-border bg-card hover:shadow-elevated transition-all duration-500 group h-full"
              >
                <h3 className="text-lg font-display font-bold text-foreground mb-3 group-hover:text-accent transition-colors leading-snug">{a.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed font-light">{a.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-foreground tracking-wide-premium uppercase group-hover:gap-3 transition-all">
                  Lire l'article <ArrowRight size={12} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
