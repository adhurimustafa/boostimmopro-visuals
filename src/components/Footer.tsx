const Footer = () => (
  <footer className="py-14 bg-foreground text-primary-foreground/60">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xl font-display font-bold text-primary-foreground">
            Boost<span className="text-primary-foreground/50">ImmoPro</span>
          </span>
          <p className="text-xs mt-2 text-primary-foreground/40">www.boostimmopro.fr · Bordeaux</p>
        </div>
        <div className="flex items-center gap-8 text-xs tracking-wide-premium uppercase">
          <a href="#" className="hover:text-primary-foreground transition-colors duration-300">Mentions légales</a>
          <a href="#" className="hover:text-primary-foreground transition-colors duration-300">Politique de confidentialité</a>
          <a href="#contact" className="hover:text-primary-foreground transition-colors duration-300">Contact</a>
        </div>
      </div>
      <div className="text-center text-xs mt-12 text-primary-foreground/30">
        © {new Date().getFullYear()} BoostImmoPro. Tous droits réservés.
      </div>
    </div>
  </footer>
);

export default Footer;
