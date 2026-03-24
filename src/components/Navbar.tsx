import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ forceScrolled = false }: { forceScrolled?: boolean }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(forceScrolled);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Tarifs", href: "#pricing" },
    { label: "Résultats", href: "#testimonials" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${open ? "bg-foreground" : scrolled ? "bg-background/90 backdrop-blur-xl shadow-card" : "bg-transparent"}`}>
        <div className="container flex items-center justify-between h-20 md:h-24">
          <a href="#" className="text-xl md:text-2xl font-display font-bold tracking-tight">
            <span className={`transition-colors duration-500 ${open ? "text-primary-foreground" : scrolled ? "text-foreground" : "text-primary-foreground"}`}>
              Boost
            </span>
            <span className={`transition-colors duration-500 ${open ? "text-primary-foreground/60" : scrolled ? "text-accent" : "text-primary-foreground/80"}`}>
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

          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden transition-colors duration-300 ${open ? "text-primary-foreground" : scrolled ? "text-foreground" : "text-primary-foreground"}`}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-foreground md:hidden flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 + i * 0.06 }}
                  className="text-2xl font-display font-bold text-primary-foreground/80 hover:text-primary-foreground transition-colors tracking-wide-premium"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#cta"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="mt-4 gradient-primary text-primary-foreground px-10 py-4 rounded-xl text-base font-semibold tracking-wide-premium uppercase hover:opacity-90 transition-opacity"
              >
                Essai gratuit
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
