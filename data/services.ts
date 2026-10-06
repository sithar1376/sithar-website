export type Service = {
  slug: string;
  number: string;
  name: string;
  cardTitle: string;
  description: string;
  cta: string;
  accent: "blue" | "navy" | "sky";
};

export const services: Service[] = [
  {
    slug: "digital-marketing", number: "01", name: "Dental Outreach",
    cardTitle: "Help oral health information and care reach communities that need it.",
    description: "I care about outreach that begins with listening, builds trust, and makes practical dental support more accessible.",
    cta: "Explore Dental Outreach", accent: "blue",
  },
  {
    slug: "meta-ads", number: "02", name: "Oral Health Education",
    cardTitle: "Make useful dental knowledge clearer, friendlier, and easier to share.",
    description: "Good education can help people understand prevention, feel more confident, and make informed choices about their oral health.",
    cta: "Explore Oral Health Education", accent: "navy",
  },
  {
    slug: "email-marketing", number: "03", name: "AI & Digital Learning",
    cardTitle: "Learn modern tools that can strengthen communication and outreach.",
    description: "I am exploring AI and digital skills to stay current, improve my capabilities, and support my work in dentistry and outreach.",
    cta: "Explore My Learning", accent: "sky",
  },
  {
    slug: "ai-powered-marketing", number: "04", name: "Sharing & Supporting",
    cardTitle: "Turn personal learning into practical help for others.",
    description: "As I learn, I want to share useful lessons with people who are also adapting to AI and digital tools in their own work.",
    cta: "Discover What I Share", accent: "blue",
  },
];
