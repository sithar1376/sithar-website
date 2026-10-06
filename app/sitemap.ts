import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";
import { siteConfig } from "@/lib/site-config";

export default function sitemap():MetadataRoute.Sitemap{
  const routes=["","/about","/services","/services/digital-marketing","/services/meta-ads","/services/email-marketing","/services/ai-powered-marketing","/blog","/contact"];
  return [...routes.map(route=>({url:`${siteConfig.url}${route}`,lastModified:new Date("2026-10-04"),changeFrequency:route==="/blog"?"weekly" as const:"monthly" as const,priority:route===""?1:route==="/contact"?0.9:0.8})),...posts.map(post=>({url:`${siteConfig.url}/blog/${post.slug}`,lastModified:new Date(post.date),changeFrequency:"monthly" as const,priority:0.7}))];
}
