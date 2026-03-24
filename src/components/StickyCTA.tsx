import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import WhatsAppLink from "@/components/WhatsAppLink";

const WHATSAPP_URL =
  "https://wa.me/33656869417?text=Bonjour%2C%20j%27aimerais%20en%20savoir%20plus%20sur%20vos%20services";

const StickyCTA = () => (
  <motion.div
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 2, duration: 0.6, ease: "easeOut" }}
    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:px-8 pointer-events-none"
  >
    <div className="max-w-lg mx-auto pointer-events-auto">
      <WhatsAppLink
        href={WHATSAPP_URL}
        section="sticky"
        className="flex items-center justify-center gap-3 w-full gradient-primary text-primary-foreground px-8 py-4 rounded-2xl text-base font-semibold shadow-elevated hover:opacity-95 hover:scale-[1.01] transition-all"
      >
        <MessageCircle size={20} />
        Recevoir mon exemple gratuit
      </a>
      <p className="text-center text-xs text-muted-foreground mt-2 bg-background/80 backdrop-blur-sm rounded-full py-1 px-4 mx-auto w-fit">
        Sans engagement · Réponse rapide · Service local à Bordeaux
      </p>
    </div>
  </motion.div>
);

export default StickyCTA;
