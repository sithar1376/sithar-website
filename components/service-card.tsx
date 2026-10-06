import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";
import { BookingLink } from "./booking-link";

export function ServiceCard({service,detailed=false}:{service:Service;detailed?:boolean}){
  return <article className={`service-card ${service.accent === "navy" ? "service-card-dark" : ""}`}><div className="service-number">{service.number}</div><p className="card-label">{service.name.toUpperCase()}</p><h3>{service.cardTitle}</h3><p>{service.description}</p><div className="card-actions"><Link href={`/services/${service.slug}`}>{service.cta}<ArrowRight size={16}/></Link>{detailed&&<BookingLink className="card-book">Connect</BookingLink>}</div></article>;
}
