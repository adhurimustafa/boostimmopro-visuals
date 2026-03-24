import { ReactNode } from "react";
import { trackWhatsAppClick } from "@/hooks/use-track-click";

interface WhatsAppLinkProps {
  href: string;
  section: string;
  className?: string;
  children: ReactNode;
}

const WhatsAppLink = ({ href, section, className, children }: WhatsAppLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
    onClick={() => trackWhatsAppClick(section, href)}
  >
    {children}
  </a>
);

export default WhatsAppLink;
