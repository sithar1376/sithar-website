"use client";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { siteConfig } from "@/lib/site-content";
import { cn } from "@/lib/utils";
export function BookingLink({ className, compact = false }: { className?: string; compact?: boolean }) { const href = siteConfig.bookingUrl || "/contact#book"; return <Link href={href} target={siteConfig.bookingUrl ? "_blank" : undefined} rel={siteConfig.bookingUrl ? "noreferrer" : undefined} data-event="consultation_cta_click" className={cn("button-primary", className)} aria-label="Book a free consultation call"><CalendarDays aria-hidden="true" className="h-4 w-4" />{compact ? "Book a Call" : "Book a Free Consultation Call"}</Link>; }
