const Footer = () => (
  <footer className="py-10 bg-foreground text-primary-foreground/70">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-lg font-display font-bold text-primary-foreground">
            Boost<span className="text-accent">ImmoPro</span>
          </span>
          <p className="text-xs mt-1">www.boostimmopro.fr</p>
        </div>
        <div className="flex items-center gap-6 text-xs">
          <a href="#" className="hover:text-primary-foreground transition-colors">Mentions légales</a>
          <a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a>
        </div>
      </div>
      <div className="text-center text-xs mt-8 text-primary-foreground/40">
        © {new Date().getFullYear()} BoostImmoPro. Tous droits réservés.
      </div>
    </div>
  </footer>
);

export default Footer;
