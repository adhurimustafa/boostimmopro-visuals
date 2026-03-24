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
      "Chez BoostImmoPro, nous transformons vos photos existantes en visuels qui captivent et convertissent grâce à notre expertise en valorisation visuelle.",
      "Nos conseils pour optimiser vos visuels Airbnb : privilégiez la lumière naturelle, montrez chaque pièce sous son meilleur angle, et surtout, permettez aux voyageurs de se projeter dans votre espace.",
      "Le home staging virtuel permet d'ajouter des éléments de décoration, d'ajuster l'éclairage et de créer une ambiance chaleureuse sans aucun travail physique.",
    ],
  },
  "home-staging-virtuel-ia": {
    title: "Home staging virtuel : vendre plus vite grâce au visuel",
    meta: "Le home staging virtuel révolutionne la vente immobilière. Découvrez comment cette approche accélère les ventes.",
    content: [
      "Le home staging virtuel est une révolution dans le monde de l'immobilier. Il est désormais possible de transformer virtuellement un espace vide ou mal meublé en un intérieur de rêve.",
      "Cette approche permet aux acheteurs potentiels de se projeter dans un bien, ce qui est l'un des facteurs les plus déterminants dans la décision d'achat.",
      "Les statistiques sont éloquentes : un bien avec home staging virtuel se vend en moyenne 73% plus vite qu'un bien présenté sans mise en scène.",
      "Chez BoostImmoPro, nous combinons expertise en design d'intérieur et technologies avancées pour garantir des résultats à la fois réalistes et séduisants.",
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
      "BoostImmoPro corrige ces problèmes grâce à la valorisation visuelle professionnelle, transformant des photos ordinaires en visuels qui vendent.",
    ],
  },
  "avant-apres-transformer-bien-ia": {
    title: "Avant / après : transformer un bien avec le home staging virtuel",
    meta: "Découvrez des exemples concrets de transformations visuelles qui ont changé la donne pour la vente et la location immobilière.",
    content: [
      "Rien ne vaut un bon avant/après pour démontrer la puissance de la valorisation visuelle. Chez BoostImmoPro, nous avons transformé des centaines de photos pour nos clients à Bordeaux.",
      "Un salon vide et froid peut devenir un espace chaleureux et accueillant. Une chambre sans caractère peut se transformer en suite digne d'un hôtel de luxe.",
      "La clé de nos transformations réside dans notre approche hybride : des technologies avancées pour la mise en scène, combinées au savoir-faire de nos designers pour un rendu parfaitement réaliste.",
      "Nos clients constatent en moyenne une augmentation de 35% du taux de clics sur leurs annonces après transformation de leurs visuels.",
      "Que vous soyez propriétaire, agent immobilier ou hôte Airbnb, la valorisation visuelle est l'investissement le plus rentable que vous puissiez faire pour votre bien.",
    ],
  },
};

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articles[slug] : null;

  if (!article) {
    return (
      <>
        <Navbar forceScrolled />
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
      <Navbar forceScrolled />
      <article className="pt-32 pb-24">
        <div className="container max-w-3xl">
          <Link to="/#blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 tracking-wide-premium uppercase">
            <ArrowLeft size={14} /> Retour au blog
          </Link>

          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-foreground leading-tight mb-8">
            {article.title}
          </h1>

          <p className="text-lg text-muted-foreground mb-12 leading-relaxed font-light">{article.meta}</p>

          <div className="space-y-8">
            {article.content.map((p, i) => (
              <p key={i} className="text-foreground/80 leading-relaxed text-lg font-light">{p}</p>
            ))}
          </div>

          <div className="mt-20 p-12 rounded-2xl gradient-primary text-center">
            <h3 className="text-2xl font-display font-bold text-primary-foreground mb-4">
              Prêt à transformer vos visuels ?
            </h3>
            <p className="text-primary-foreground/70 mb-8 font-light">
              Testez gratuitement sur une photo
            </p>
            <a
              href="https://wa.me/33656869417"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-foreground text-primary px-8 py-4 rounded-xl font-semibold tracking-wide-premium uppercase hover:opacity-90 transition-opacity"
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
