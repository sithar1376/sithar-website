import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Analytics } from "@/components/analytics";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url), title: { default: "Sithar | Dentist, Dental Outreach & AI Learning", template: "%s | Sithar" },
  description: "A dentist passionate about dental outreach, accessible oral healthcare, learning AI and digital tools, and sharing useful lessons with others.",
  alternates:{canonical:"/"}, openGraph:{type:"website",siteName:"Sithar",title:"Sithar | Dentist, Dental Outreach & AI Learning",description:"Dentistry, outreach, purposeful learning, and helping others.",url:"/"},
  twitter:{card:"summary",title:"Sithar | Dentist, Dental Outreach & AI Learning",description:"Dentistry, outreach, purposeful learning, and helping others."}, icons:{icon:"/favicon.svg"},
};
const jsonLd={"@context":"https://schema.org","@graph":[{"@type":"Person","@id":`${siteConfig.url}/#person`,name:"Sithar",jobTitle:"Dentist",url:siteConfig.url,description:siteConfig.description,knowsAbout:["Dentistry","Dental outreach","Oral health education","AI learning","Digital tools"]},{"@type":"WebSite","@id":`${siteConfig.url}/#website`,url:siteConfig.url,name:"Sithar",description:siteConfig.description,publisher:{"@id":`${siteConfig.url}/#person`}}]};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader/><div id="main-content">{children}</div><SiteFooter/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/><Analytics/></body></html>}
