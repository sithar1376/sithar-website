import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { BlogCard } from "@/components/blog-card";
import { ConsultationCTA } from "@/components/consultation-cta";
import { posts } from "@/data/posts";

export const metadata:Metadata={title:"Notes on Dentistry, Outreach & Digital Learning",description:"Practical notes from Sithar's journey through dentistry, dental outreach, communication, AI learning, and modern digital tools.",alternates:{canonical:"/blog"},openGraph:{title:"Notes on Dentistry, Outreach & Learning",description:"Useful ideas, honest learning, and practical takeaways shared along the way.",url:"/blog"}};
const categories=["All","Dentistry","Dental Outreach","Oral Health","AI Learning","Digital Skills","Communication","Community Impact"];
export default function BlogPage(){return <main><PageHero eyebrow="BLOG" title="Notes from a journey of dentistry, outreach, and learning" description="Useful ideas, honest lessons, and practical takeaways from what I am learning in dentistry, outreach, AI, communication, and modern digital tools." breadcrumbs={[{label:"Home",href:"/"},{label:"Blog"}]} showCta={false}/><section className="section site-container"><div className="category-strip" aria-label="Article categories">{categories.map((category,index)=><span className={index===0?"active":""} key={category}>{category}</span>)}</div><div className="blog-feature"><BlogCard post={posts[0]} featured/></div><div className="blog-grid blog-grid-two">{posts.slice(1).map(post=><BlogCard key={post.slug} post={post}/>)}</div></section><ConsultationCTA compact/></main>}
