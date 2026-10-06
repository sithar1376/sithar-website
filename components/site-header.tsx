import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { BookingLink } from "./booking-link";
import { navigation, serviceLinks } from "@/lib/site-config";

export function SiteHeader(){
  return <header className="site-header">
    <div className="nav-wrap site-container">
      <Link className="brand-logo-link" href="/" aria-label="Smile With Sithar home">
        <Image className="brand-logo" src="/images/sithar-logo.png" alt="Smile With Sithar" width={742} height={336} priority />
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item)=> item.label === "Services" ?
          <div className="nav-dropdown" key={item.href}><Link href={item.href}>{item.label}<ChevronDown size={14}/></Link><div className="dropdown-panel">{serviceLinks.map((service)=><Link key={service.href} href={service.href}>{service.label}<span>Explore service</span></Link>)}</div></div>
          : <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </nav>
      <BookingLink className="button button-small" showIcon>Connect With Me</BookingLink>
      <details className="mobile-nav">
        <summary aria-label="Open navigation"><Menu size={22}/></summary>
        <div className="mobile-panel">
          {navigation.map((item)=><Link key={item.href} href={item.href}>{item.label}</Link>)}
          <div className="mobile-services">{serviceLinks.map((item)=><Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
          <BookingLink className="button button-primary">Connect With Me</BookingLink>
        </div>
      </details>
    </div>
  </header>;
}
