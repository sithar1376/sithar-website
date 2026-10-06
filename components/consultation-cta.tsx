import { CalendarCheck, Check } from "lucide-react";
import { BookingLink } from "./booking-link";

export function ConsultationCTA({ compact=false }: { compact?:boolean }){
  return <section id="consultation" className={`consultation-cta ${compact ? "consultation-compact" : ""}`}><div className="site-container consultation-inner">
    <div><p className="eyebrow eyebrow-light">LET&apos;S CONNECT</p><h2>Good ideas grow through shared purpose.</h2><p>If you care about dentistry, outreach, education, or learning how modern tools can support meaningful work, I&apos;d be glad to hear from you.</p></div>
    <div className="consultation-offer"><CalendarCheck size={26}/><p><strong>Start a conversation with Sithar</strong></p>{["Dental outreach and oral health education", "Responsible AI and digital learning", "Ideas, resources, and opportunities to help others"].map(item=><span key={item}><Check size={15}/>{item}</span>)}<BookingLink className="button button-white">Connect With Me</BookingLink><small>Curious, practical, and focused on impact.</small></div>
  </div></section>;
}
