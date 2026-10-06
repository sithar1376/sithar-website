import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

type BookingLinkProps = { children?: React.ReactNode; className?: string; showIcon?: boolean };
export function BookingLink({ children="Connect With Me", className="button button-primary", showIcon=false }: BookingLinkProps){
  const href = siteConfig.bookingUrl || "/contact#booking";
  const external = Boolean(siteConfig.bookingUrl);
  return <Link className={className} href={href} {...(external ? {target:"_blank", rel:"noreferrer"} : {})}>
    {children}{showIcon && <ArrowUpRight size={17} aria-hidden="true" />}
  </Link>;
}
