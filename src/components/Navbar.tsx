import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Tarifs", href: "#pricing" },
    { label: "Résultats", href: "#testimonials" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-xl shadow-card" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between h-20 md:h-24">
        <a href="#" className="text-xl md:text-2xl font-display font-bold tracking-tight">
          <span className={`transition-colors duration-500 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
            Boost
          </span>
          <span className={`transition-colors duration-500 ${scrolled ? "text-accent" : "text-primary-foreground/80"}`}>
            ImmoPro
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[13px] font-medium tracking-wide-premium uppercase transition-colors duration-300 ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/70 hover:text-primary-foreground"}`}
            >
              {l.label}
            </a>
          ))}
          <a href="#cta" className="gradient-primary text-primary-foreground px-6 py-2.5 rounded-lg text-[13px] font-semibold tracking-wide-premium uppercase hover:opacity-90 transition-opacity">
            Essai gratuit
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className={`md:hidden transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="container py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground py-2 tracking-wide-premium uppercase">
                  {l.label}
                </a>
              ))}
              <a href="#cta" onClick={() => setOpen(false)} className="gradient-primary text-primary-foreground px-5 py-3 rounded-lg text-sm font-semibold text-center tracking-wide-premium uppercase mt-2">
                Essai gratuit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
