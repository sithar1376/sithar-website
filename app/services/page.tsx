import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { ConsultationCTA } from "@/components/consultation-cta";
import { BookingLink } from "@/components/booking-link";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Dentistry, Outreach & Learning Focus Areas",
  description: "Explore Sithar's focus on dental outreach, oral health education, AI and digital learning, and sharing useful knowledge with others.",
  alternates: { canonical: "/services" },
  openGraph: { title: "Dentistry, Outreach & Learning", description: "Practical focus areas shaped by dentistry, community service, and purposeful learning.", url: "/services" },
};

export default function ServicesPage(){return <main>
  <PageHero eyebrow="FOCUS AREAS" title="Where dentistry, outreach, and modern learning come together" description="I am combining clinical care, community outreach, and new digital skills to find better ways to connect, educate, and help." breadcrumbs={[{label:"Home",href:"/"},{label:"Focus Areas"}]}/>
  <section className="section site-container"><div className="split-heading"><p className="eyebrow">THE GOAL IS SIMPLE</p><h2>Learn with purpose. Reach more people. Share what helps.</h2><p>Each focus area supports the same mission: helping make oral healthcare knowledge and support more accessible.</p></div><div className="services-overview-grid">{services.map(service=><ServiceCard key={service.slug} service={service} detailed/>)}</div></section>
  <section className="section service-fit"><div className="site-container service-fit-inner"><div><p className="eyebrow">LET&apos;S CONNECT</p><h2>Have an idea, question, or shared interest?</h2><p>I&apos;d be glad to hear about your work in dentistry, outreach, education, or responsible use of modern digital tools.</p></div><BookingLink className="button button-primary">Start a Conversation</BookingLink></div></section>
  <ConsultationCTA compact/>
</main>}
