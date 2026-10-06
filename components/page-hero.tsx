import { Breadcrumbs } from "./breadcrumbs";
import { BookingLink } from "./booking-link";

export function PageHero({eyebrow,title,description,breadcrumbs,showCta=true}:{eyebrow:string;title:string;description:string;breadcrumbs?:{label:string;href?:string}[];showCta?:boolean}){
  return <section className="page-hero"><div className="site-container page-hero-inner">{breadcrumbs&&<Breadcrumbs items={breadcrumbs}/>}<p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{description}</p>{showCta&&<BookingLink className="button button-primary">Connect With Me</BookingLink>}</div></section>;
}
