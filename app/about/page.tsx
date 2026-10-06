import type { Metadata } from "next";
import { Bot, Compass, LineChart, UsersRound } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { BookingLink } from "@/components/booking-link";
import { ConsultationCTA } from "@/components/consultation-cta";

export const metadata: Metadata = {
  title: "About Me",
  description: "Meet Sithar, a dentist passionate about dental outreach, accessible oral healthcare, purposeful learning, and helping others.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Sithar", description: "Dentistry, dental outreach, purposeful learning, and helping others.", url: "/about" },
};

const principles = [
  { icon: Compass, title: "Community First", copy: "Listen carefully and understand the needs behind every outreach effort." },
  { icon: Bot, title: "Curious Learner", copy: "Explore AI and digital tools with humility, care, and a clear purpose." },
  { icon: LineChart, title: "Focused on Impact", copy: "Use learning and action to make oral health support more accessible." },
  { icon: UsersRound, title: "Helping Others", copy: "Share useful lessons so more people can learn, adapt, and contribute." },
];

export default function AboutPage(){return <main>
  <PageHero eyebrow="ABOUT ME" title="Hi, I’m Sithar" description="I’m a dentist with a simple belief: if you have the ability to help someone, you should." breadcrumbs={[{label:"Home",href:"/"},{label:"About"}]}/>
  <section className="section site-container story-grid"><div className="story-note"><span>“</span><blockquote>If you have the ability to help someone, you should.</blockquote><p>— The belief behind my work</p></div><div><p className="eyebrow">MY STORY</p><h2>Trust, communication, and understanding people.</h2><p className="large-copy">Dentistry taught me the importance of all three.</p><p>I&apos;m passionate about <strong>dental outreach and making oral healthcare more accessible</strong> to communities that need it. That mission is the foundation of the work I want to do.</p><p>Alongside my clinical work, I&apos;m learning <strong>AI and digital tools</strong> to stay current, strengthen my outreach skills, and discover better ways to connect, educate, and help.</p></div></section>
  <section className="section approach-section"><div className="site-container"><div className="center-heading"><p className="eyebrow">WHAT GUIDES ME</p><h2>Learn with purpose. Share with care.</h2><p>I want to keep growing as a dentist, use outreach to help bridge gaps in oral healthcare, and share useful lessons with others who are learning too.</p></div><div className="principle-grid">{principles.map(({icon:Icon,title,copy})=><article key={title}><Icon size={25}/><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
  <section className="section talk-section"><div className="site-container talk-inner"><div><p className="eyebrow">LET&apos;S CONNECT</p><h2>Share an idea, a question, or a common purpose.</h2></div><BookingLink className="button button-primary">Connect With Me</BookingLink></div></section>
  <ConsultationCTA compact/>
</main>}
