import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { BookingLink } from "@/components/booking-link";
import { ConsultationCTA } from "@/components/consultation-cta";

export const metadata: Metadata = {
  title: "AI & Digital Learning",
  description: "Learning AI and digital tools to stay current, strengthen communication, and support dental outreach.",
  alternates: { canonical: "/services/email-marketing" },
  openGraph: { title: "AI & Digital Learning", description: "Modern skills learned with purpose and applied with care.", url: "/services/email-marketing" },
};

export default function EmailMarketingPage(){return <main>
  <PageHero eyebrow="AI & DIGITAL LEARNING" title="Stay curious in a changing digital world." description="I am learning AI and digital tools to improve my capabilities, communicate more clearly, and strengthen the reach of my dental outreach mission." breadcrumbs={[{label:"Home",href:"/"},{label:"Focus Areas",href:"/services"},{label:"AI & Digital Learning"}]}/>
  <section className="section site-container two-column"><div><p className="eyebrow">LEARNING IN PUBLIC</p><h2>Use new tools without losing the human purpose.</h2></div><div><p className="large-copy">AI is a skill I am actively learning—not my primary profession.</p><p>I am exploring where these tools can responsibly support research, communication, organization, and outreach while keeping clinical judgment and human connection at the center.</p><BookingLink className="button button-primary">Connect With Me</BookingLink></div></section>
  <ConsultationCTA/>
</main>}
