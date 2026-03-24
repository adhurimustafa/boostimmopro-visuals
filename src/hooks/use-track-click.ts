type ClickEvent = {
  section: string;
  timestamp: number;
  url: string;
};

const STORAGE_KEY = "whatsapp_clicks";

export const trackWhatsAppClick = (section: string, url: string) => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const clicks: ClickEvent[] = stored ? JSON.parse(stored) : [];
    clicks.push({ section, timestamp: Date.now(), url });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clicks));
    console.log(`[WhatsApp Track] Clic depuis: ${section}`);
  } catch {
    // silently fail
  }
};

export const getWhatsAppClicks = (): ClickEvent[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const getClickStats = () => {
  const clicks = getWhatsAppClicks();
  const bySection: Record<string, number> = {};
  clicks.forEach((c) => {
    bySection[c.section] = (bySection[c.section] || 0) + 1;
  });
  return { total: clicks.length, bySection, clicks };
};
