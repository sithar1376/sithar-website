import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { BookingLink } from "@/components/booking-link";
import { ConsultationCTA } from "@/components/consultation-cta";

export const metadata: Metadata = {
  title: "Sharing & Supporting Others",
  description: "Sharing useful lessons from dentistry, outreach, AI learning, and digital tools to help others adapt and create impact.",
  alternates: { canonical: "/services/ai-powered-marketing" },
  openGraph: { title: "Sharing & Supporting Others", description: "Turning personal learning into practical help for others.", url: "/services/ai-powered-marketing" },
};

export default function AiPoweredMarketingPage(){return <main>
  <PageHero eyebrow="SHARING & SUPPORTING" title="What we learn becomes more valuable when we share it." description="As I build new skills, I hope to turn useful lessons into clear, practical support for others who are learning and adapting too." breadcrumbs={[{label:"Home",href:"/"},{label:"Focus Areas",href:"/services"},{label:"Sharing & Supporting"}]}/>
  <section className="section site-container two-column"><div><p className="eyebrow">PASS IT FORWARD</p><h2>Learn, apply, reflect, and share.</h2></div><div><p className="large-copy">I do not want learning to stop with me.</p><p>By sharing honest experiences, useful resources, and practical takeaways, I hope to help others approach AI and digital tools with more confidence and a clearer sense of purpose.</p><BookingLink className="button button-primary">Connect With Me</BookingLink></div></section>
  <ConsultationCTA/>
</main>}
