import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { BookingLink } from "@/components/booking-link";
import { ConsultationCTA } from "@/components/consultation-cta";

export const metadata: Metadata = {
  title: "Oral Health Education",
  description: "Clear, approachable oral health education that helps people understand prevention and care.",
  alternates: { canonical: "/services/meta-ads" },
  openGraph: { title: "Oral Health Education", description: "Making useful dental knowledge easier to understand and share.", url: "/services/meta-ads" },
};

export default function MetaAdsPage(){return <main>
  <PageHero eyebrow="ORAL HEALTH EDUCATION" title="Make useful dental knowledge easier to understand." description="Clear, approachable education can help people feel more confident about prevention, treatment, and everyday oral health decisions." breadcrumbs={[{label:"Home",href:"/"},{label:"Focus Areas",href:"/services"},{label:"Oral Health Education"}]}/>
  <section className="section site-container two-column"><div><p className="eyebrow">CLEAR AND PRACTICAL</p><h2>Good information can help people act sooner.</h2></div><div><p className="large-copy">Dental knowledge should feel understandable, relevant, and respectful of each community&apos;s needs.</p><p>I want to explore better ways to turn clinical knowledge into practical guidance that people can use in everyday life.</p><BookingLink className="button button-primary">Connect With Me</BookingLink></div></section>
  <ConsultationCTA/>
</main>}
