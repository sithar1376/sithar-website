export const siteConfig = {
  name: "Sithar",
  role: "Dentist | Dental Outreach | AI Learner",
  description: "A dentist passionate about dental outreach, accessible oral healthcare, learning AI and digital tools, and sharing useful lessons with others.",
  url: "https://sithar-ai-marketing.matthewbailey33.chatgpt.site",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "",
  contactEndpoint: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "https://formsubmit.co/ajax/sithar1376@gmail.com",
  contactEmail: "sithar1376@gmail.com",
  social: { linkedin: "", facebook: "", instagram: "" },
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Focus Areas", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const serviceLinks = [
  { label: "Dental Outreach", href: "/services/digital-marketing" },
  { label: "Oral Health Education", href: "/services/meta-ads" },
  { label: "AI & Digital Learning", href: "/services/email-marketing" },
  { label: "Sharing & Supporting", href: "/services/ai-powered-marketing" },
];
