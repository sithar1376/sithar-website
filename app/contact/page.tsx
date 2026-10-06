import type { Metadata } from "next";
import { CalendarCheck, Check, MessageSquareText } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { BookingLink } from "@/components/booking-link";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Connect With Sithar",
  description: "Connect with Sithar about dentistry, dental outreach, oral health education, AI learning, and helping others.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Connect With Sithar", description: "Start a conversation around dentistry, outreach, learning, and shared impact.", url: "/contact" },
};

export default function ContactPage(){return <main>
  <PageHero eyebrow="CONNECT" title="Let’s start a meaningful conversation." description="Reach out about dentistry, dental outreach, oral health education, AI learning, or an idea that could help others." breadcrumbs={[{label:"Home",href:"/"},{label:"Contact"}]} showCta={false}/>
  <section id="booking" className="section booking-section"><div className="site-container booking-grid"><div><p className="eyebrow">SHARE WHAT YOU&apos;RE WORKING ON</p><h2>Good ideas begin with a conversation.</h2><p className="large-copy">Tell me about your work, community, question, or shared interest.</p><p>I&apos;m especially interested in conversations that connect <strong>oral healthcare, outreach, learning, and practical impact.</strong></p><div className="booking-points">{["Dental outreach and oral health education","Purposeful AI and digital learning","Ideas and resources that can help others"].map(item=><p key={item}><Check size={17}/>{item}</p>)}</div></div><div className="booking-widget"><CalendarCheck size={30}/><span>CONNECT WITH SITHAR</span><h3>{siteConfig.bookingUrl?"Choose a convenient time":"Send a message"}</h3><p>{siteConfig.bookingUrl?"Open the scheduling page to select an available time.":"Online scheduling is being prepared. For now, use the form below to introduce yourself and share what you would like to discuss."}</p>{siteConfig.bookingUrl?<BookingLink className="button button-primary" showIcon/>:<a className="button button-primary" href="#message-form">Go to the Message Form</a>}</div></div></section>
  <section className="section contact-form-section" id="message-form"><div className="site-container contact-layout"><aside><MessageSquareText size={25}/><h2>Tell me what brings you here.</h2><p>Share your background, your idea, and what you would like to explore together.</p><div className="contact-aside-note"><strong>Curious and practical</strong><p>The goal is to understand the opportunity and see whether there is a useful next step.</p></div></aside><ContactForm endpoint={siteConfig.contactEndpoint}/></div></section>
</main>}
