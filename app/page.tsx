import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, CircleDot, Compass, LineChart, Search, SlidersHorizontal, Target, UsersRound } from "lucide-react";
import { BookingLink } from "@/components/booking-link";
import { ServiceCard } from "@/components/service-card";
import { ConsultationCTA } from "@/components/consultation-cta";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Dentistry, Dental Outreach & Learning With Purpose",
  description: "Sithar is a dentist passionate about dental outreach, improving access to oral healthcare, learning AI and digital tools, and sharing what she learns to help others.",
  alternates: { canonical: "/" },
};

const problems = [
  "Oral health information does not always reach the people who need it",
  "Many communities still face barriers to accessible dental care",
  "Outreach works best when it begins with listening and trust",
  "Modern digital tools can help useful information travel further",
  "What we learn becomes more valuable when we share it with others",
];

const principles = [
  { icon: Compass, title: "Community First", copy: "Start by listening to people and understanding the barriers they face." },
  { icon: Bot, title: "Learning With Purpose", copy: "Explore AI and digital tools as practical ways to strengthen meaningful work." },
  { icon: LineChart, title: "Focused on Impact", copy: "Use every skill with the goal of making oral health support more accessible." },
  { icon: UsersRound, title: "Share What Helps", copy: "Pass useful lessons forward so others can learn, adapt, and create impact too." },
];

const process = [
  ["01", Search, "Listen and Understand", "Begin with the real needs, questions, and barriers experienced by people and communities."],
  ["02", SlidersHorizontal, "Identify the Opportunity", "Look for practical ways that dentistry, outreach, and communication can work together."],
  ["03", Target, "Learn and Apply", "Explore useful AI and digital tools carefully, then apply what genuinely supports the mission."],
  ["04", LineChart, "Share What Works", "Turn useful lessons into clear resources that can help more people learn and take action."],
] as const;

export default function Home() {
  return <main>
    <section className="hero-shell"><div className="hero-grid site-container"><div className="hero-copy"><p className="eyebrow">DENTISTRY · OUTREACH · LEARNING</p><h1>Helping more people smile through dentistry and <span>purposeful learning.</span></h1><p className="hero-lede">I&apos;m a dentist passionate about dental outreach and making oral healthcare more accessible. I&apos;m also learning AI and digital tools to strengthen that mission, stay current, and share useful lessons with others.</p><div className="hero-actions"><BookingLink>Discover My Mission</BookingLink></div><p className="trust-note"><span/>Combining compassionate dental care, community outreach, and modern digital skills to create meaningful impact.</p></div><div className="portrait-card"><Image className="hero-portrait-image" src="/images/sithar-hero-v2.png" alt="Portrait of Sithar with mountains in the background" width={1141} height={1379} priority sizes="(max-width: 1000px) min(580px, calc(100vw - 40px)), 38vw"/><div className="portrait-caption"><strong>Sithar</strong><span>Prescribing Smiles Where Prescriptions Are Rare</span></div></div></div></section>

    <section className="section problem-section"><div className="site-container problem-grid"><div><p className="eyebrow">WHY THIS WORK MATTERS</p><h2>Oral healthcare should be easier to understand and access.</h2><p className="section-copy">Lasting impact begins with <strong>care, trust, and practical ways to reach more people.</strong></p><Link className="text-link" href="/services">Explore my focus areas <ArrowRight size={17}/></Link></div><div className="problem-list">{problems.map((problem,index)=><div key={problem}><span>{String(index+1).padStart(2,"0")}</span><p>{problem}</p><CircleDot size={17}/></div>)}</div></div></section>

    <section className="section site-container"><div className="split-heading"><p className="eyebrow">FOCUS AREAS</p><h2>Where dentistry, outreach, and learning come <span className="ink-blue">together.</span></h2><p>My work and learning are connected by one goal: using practical knowledge, thoughtful outreach, and modern tools to help more people.</p></div><div className="service-grid">{services.map(service=><ServiceCard service={service} key={service.slug}/>)}</div></section>

    <section className="section approach-section"><div className="site-container"><div className="center-heading"><p className="eyebrow">WHAT GUIDES MY WORK</p><h2>Learn with purpose. Share with care.</h2><p>Dentistry is the foundation. Outreach gives the work direction, and modern digital skills can help useful ideas reach further.</p></div><div className="principle-grid">{principles.map(({icon:Icon,title,copy})=><article key={title}><Icon size={25}/><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="section process-section"><div className="site-container"><div className="process-header"><div><p className="eyebrow">HOW I APPROACH IT</p><h2>A practical path from learning to impact.</h2></div><BookingLink className="button button-primary">Connect With Me</BookingLink></div><div className="process-line">{process.map(([num,Icon,title,copy])=><article key={title}><span className="step-number">{num}</span><Icon size={24}/><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="section about-preview"><div className="site-container about-preview-grid"><div className="about-photo-card"><Image className="about-photo" src="/images/sithar-about-outreach.png" alt="Sithar providing dental outreach with children" width={1164} height={1351} sizes="(max-width: 1000px) calc(100vw - 40px), 42vw"/></div><div><p className="eyebrow">ABOUT ME</p><h2>Hi, I&apos;m Sithar.</h2><p className="large-copy"><strong>I&apos;m a dentist with a simple belief: if you have the ability to help someone, you should.</strong></p><p>I&apos;m passionate about <strong>dental outreach and making oral healthcare more accessible to communities that need it.</strong> Alongside my clinical work, I&apos;m learning <strong>AI and digital marketing</strong> to strengthen my outreach skills, stay up to date with today&apos;s digital world, and find better ways to connect with and help more people.</p><p>My mission is to help <strong>bridge the gap in oral healthcare</strong> by combining community outreach, clinical care, and modern digital strategies.</p><p>As I continue learning and applying these skills, I also hope to <strong>share what I learn and help others who want to use AI and digital tools to create a greater impact in their own work.</strong></p><Link className="text-link" href="/about">More About Me <ArrowRight size={17}/></Link></div></div></section>

    <ConsultationCTA/>
  </main>;
}
