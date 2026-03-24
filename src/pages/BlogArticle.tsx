import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const articles: Record<string, { title: string; meta: string; content: string[] }> = {
  "ameliorer-annonce-airbnb": {
    title: "Comment améliorer une annonce Airbnb avec des visuels professionnels",
    meta: "Découvrez comment des visuels professionnels peuvent transformer votre annonce Airbnb et multiplier vos réservations.",
    content: [
      "La concurrence sur Airbnb est féroce. Avec des millions d'annonces dans le monde, comment faire en sorte que la vôtre se démarque ? La réponse est simple : des visuels professionnels de qualité.",
      "Les études montrent que les annonces avec des photos professionnelles génèrent jusqu'à 40% de réservations supplémentaires. L'œil humain traite les images 60 000 fois plus vite que le texte.",
      "Chez BoostImmoPro, nous utilisons l'intelligence artificielle combinée à notre expertise en design pour transformer vos photos existantes en visuels qui captivent et convertissent.",
      "Nos conseils pour optimiser vos visuels Airbnb : privilégiez la lumière naturelle, montrez chaque pièce sous son meilleur angle, et surtout, permettez aux voyageurs de se projeter dans votre espace.",
      "Le home staging virtuel par IA permet d'ajouter des éléments de décoration, d'ajuster l'éclairage et de créer une ambiance chaleureuse sans aucun travail physique.",
    ],
  },
  "home-staging-virtuel-ia": {
    title: "Home staging virtuel : vendre plus vite grâce à l'IA",
    meta: "Le home staging virtuel par IA révolutionne la vente immobilière. Découvrez comment cette technologie accélère les ventes.",
    content: [
      "Le home staging virtuel est une révolution dans le monde de l'immobilier. Grâce à l'intelligence artificielle, il est désormais possible de transformer virtuellement un espace vide ou mal meublé en un intérieur de rêve.",
      "Cette technologie permet aux acheteurs potentiels de se projeter dans un bien, ce qui est l'un des facteurs les plus déterminants dans la décision d'achat.",
      "Les statistiques sont éloquentes : un bien avec home staging virtuel se vend en moyenne 73% plus vite qu'un bien présenté sans mise en scène.",
      "Chez BoostImmoPro, nous combinons les dernières avancées en IA avec l'œil expert de nos designers pour garantir des résultats à la fois réalistes et séduisants.",
      "Le processus est simple : envoyez-nous vos photos, et en moins de 24 heures, recevez des visuels transformés prêts à être publiés sur toutes les plateformes immobilières.",
    ],
  },
  "photos-immobilieres-decisives": {
    title: "Pourquoi les photos immobilières sont décisives",
    meta: "90% des acheteurs commencent leur recherche en ligne. Découvrez pourquoi vos photos immobilières sont votre premier argument de vente.",
    content: [
      "Dans un marché immobilier de plus en plus digitalisé, la première impression se fait en ligne. Et cette première impression repose presque entièrement sur la qualité de vos photos.",
      "90% des acheteurs commencent leur recherche immobilière sur internet. En moins de 3 secondes, un visiteur décide s'il va cliquer sur votre annonce ou passer à la suivante.",
      "Des photos de qualité professionnelle ne sont plus un luxe, elles sont une nécessité. Les annonces avec des visuels de qualité reçoivent en moyenne 118% de vues supplémentaires.",
      "Les erreurs les plus courantes : photos sombres, angles peu flatteurs, pièces encombrées, et absence de mise en scène. Chacune de ces erreurs peut coûter des milliers d'euros en manque à gagner.",
      "BoostImmoPro corrige ces problèmes grâce à la valorisation visuelle par IA, transformant des photos ordinaires en visuels qui vendent.",
    ],
  },
  "avant-apres-transformer-bien-ia": {
    title: "Avant / après : transformer un bien avec l'IA",
    meta: "Découvrez des exemples concrets de transformations visuelles par IA qui ont changé la donne pour la vente et la location immobilière.",
    content: [
      "Rien ne vaut un bon avant/après pour démontrer la puissance de la valorisation visuelle par IA. Chez BoostImmoPro, nous avons transformé des centaines de photos pour nos clients à Bordeaux.",
      "Un salon vide et froid peut devenir un espace chaleureux et accueillant. Une chambre sans caractère peut se transformer en suite digne d'un hôtel de luxe.",
      "La clé de nos transformations réside dans notre approche hybride : l'IA gère le gros du travail de mise en scène, tandis que nos designers affinent chaque détail pour un rendu parfaitement réaliste.",
      "Nos clients constatent en moyenne une augmentation de 35% du taux de clics sur leurs annonces après transformation de leurs visuels.",
      "Que vous soyez propriétaire, agent immobilier ou hôte Airbnb, la valorisation visuelle par IA est l'investissement le plus rentable que vous puissiez faire pour votre bien.",
    ],
  },
};

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articles[slug] : null;

  if (!article) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-2xl font-display font-bold text-foreground mb-4">Article non trouvé</h1>
            <Link to="/" className="text-accent hover:underline">Retour à l'accueil</Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <article className="pt-28 pb-20">
        <div className="container max-w-3xl">
          <Link to="/#blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft size={16} /> Retour au blog
          </Link>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-6">
            {article.title}
          </h1>

          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">{article.meta}</p>

          <div className="space-y-6">
            {article.content.map((p, i) => (
              <p key={i} className="text-foreground/80 leading-relaxed text-lg">{p}</p>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl gradient-primary text-center">
            <h3 className="text-xl font-bold text-primary-foreground mb-3">
              Prêt à transformer vos visuels ?
            </h3>
            <p className="text-primary-foreground/80 mb-6 text-sm">
              Testez gratuitement sur une photo
            </p>
            <a
              href="https://wa.me/33600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-foreground text-primary px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Envoyer ma photo
            </a>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
};

export default BlogArticle;
