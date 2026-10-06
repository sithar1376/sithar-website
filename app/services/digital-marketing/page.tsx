import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { BookingLink } from "@/components/booking-link";
import { ConsultationCTA } from "@/components/consultation-cta";

export const metadata: Metadata = {
  title: "Dental Outreach",
  description: "Dental outreach rooted in listening, trust, and making oral healthcare support more accessible.",
  alternates: { canonical: "/services/digital-marketing" },
  openGraph: { title: "Dental Outreach", description: "Helping oral health information and care reach communities that need it.", url: "/services/digital-marketing" },
};

export default function DigitalMarketingPage(){return <main>
  <PageHero eyebrow="DENTAL OUTREACH" title="Helping oral healthcare reach beyond the clinic." description="I am passionate about outreach that listens to communities, builds trust, and makes practical dental support more accessible." breadcrumbs={[{label:"Home",href:"/"},{label:"Focus Areas",href:"/services"},{label:"Dental Outreach"}]}/>
  <section className="section site-container two-column"><div><p className="eyebrow">COMMUNITY FIRST</p><h2>Meet people where they are.</h2></div><div><p className="large-copy">Meaningful outreach begins with understanding the people, places, and barriers involved.</p><p>My goal is to support clear oral health education, compassionate care, and practical pathways that help more people access the support they need.</p><BookingLink className="button button-primary">Connect With Me</BookingLink></div></section>
  <ConsultationCTA/>
</main>}
