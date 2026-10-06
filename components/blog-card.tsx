import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Post } from "@/data/posts";

export function BlogCard({post,featured=false}:{post:Post;featured?:boolean}){
  return <article className={`blog-card ${featured?"blog-card-featured":""}`}><Link href={`/blog/${post.slug}`} className="blog-image">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={post.image} alt={post.imageAlt} width="1200" height="800" loading="lazy" decoding="async"/></Link><div className="blog-card-body"><div className="article-meta"><span>{post.category}</span><time dateTime={post.date}>{post.displayDate}</time><span>{post.readingTime}</span></div><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p><Link className="read-link" href={`/blog/${post.slug}`}>Read article <ArrowRight size={16}/></Link></div></article>;
}
