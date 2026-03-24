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
    title: "Home staging virtuel : vendre plus vite grâce à l'IA",
    excerpt: "L'intelligence artificielle révolutionne le home staging. Voici comment en profiter.",
  },
  {
    slug: "photos-immobilieres-decisives",
    title: "Pourquoi les photos immobilières sont décisives",
    excerpt: "90% des acheteurs commencent leur recherche en ligne. Vos photos sont votre premier argument.",
  },
  {
    slug: "avant-apres-transformer-bien-ia",
    title: "Avant / après : transformer un bien avec l'IA",
    excerpt: "Exemples concrets de transformations visuelles qui ont changé la donne pour nos clients.",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="section-padding bg-background">
      <div className="container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Notre <span className="gradient-text">blog</span>
          </h2>
          <p className="text-muted-foreground">Conseils et actualités pour optimiser vos annonces immobilières</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {articles.map((a, i) => (
            <motion.div
              key={a.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                to={`/blog/${a.slug}`}
                className="block p-6 rounded-2xl border border-border bg-card hover:shadow-card transition-all group"
              >
                <h3 className="font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{a.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{a.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                  Lire l'article <ArrowRight size={14} />
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
