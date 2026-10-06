import Image from "next/image";
import Link from "next/link";
import { navigation, serviceLinks, siteConfig } from "@/lib/site-config";

export function SiteFooter(){
  const socialLinks = Object.entries(siteConfig.social).filter(([,href])=>Boolean(href));
  return <footer className="site-footer"><div className="site-container footer-grid">
    <div className="footer-brand"><Link className="footer-logo-link" href="/" aria-label="Smile With Sithar home"><Image className="footer-logo" src="/images/sithar-logo.png" alt="Smile With Sithar" width={742} height={336} /></Link><p>Dentistry, dental outreach, purposeful learning, and practical ideas that help more people.</p><p className="footer-note">Learn with purpose. Share with care.</p></div>
    <div><h2>Navigate</h2>{navigation.map((item)=><Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
    <div><h2>Services</h2>{serviceLinks.map((item)=><Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
    <div><h2>Connect</h2>{socialLinks.length ? socialLinks.map(([name,href])=><a key={name} href={href} target="_blank" rel="noreferrer">{name[0].toUpperCase()+name.slice(1)}</a>) : <p className="placeholder-copy">Social profiles can be added in the site configuration.</p>}</div>
  </div><div className="site-container footer-bottom"><span>© {new Date().getFullYear()} Sithar. All rights reserved.</span><span>Dentistry · Dental Outreach · AI Learning</span></div></footer>;
}
