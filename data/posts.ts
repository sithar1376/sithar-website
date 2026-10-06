export type ArticleSection = { heading: string; paragraphs: string[]; points?: string[]; subheading?: string };
export type Post = { slug:string; category:string; title:string; excerpt:string; date:string; displayDate:string; readingTime:string; image:string; imageAlt:string; sections:ArticleSection[] };

export const posts: Post[] = [
  {
    slug:"small-business-ai-marketing", category:"AI Learning", title:"5 Ways Small Businesses Can Use AI in Their Marketing",
    excerpt:"Five practical ways to save time, understand customers, and improve marketing without handing your strategy over to a machine.",
    date:"2026-09-18", displayDate:"September 18, 2026", readingTime:"6 min read", image:"/images/ai-marketing.jpg", imageAlt:"Desk with a laptop displaying marketing charts and cards representing a connected AI workflow",
    sections:[
      {heading:"AI works best as an assistant, not a replacement",paragraphs:["Small businesses do not need a complicated technology stack to benefit from AI. The most useful starting point is usually a repetitive task, a slow research process, or a blank page that regularly delays your marketing.","Keep your business judgment in the loop. AI can help you move faster, but your knowledge of your customers, values, and offer should guide every decision."]},
      {heading:"1. Turn customer questions into content ideas",paragraphs:["Collect the questions customers ask before they buy. AI can group them into themes, suggest article or video ideas, and help you build a useful content calendar."],points:["Use real customer language as the input","Review every suggestion for accuracy","Answer one clear question at a time"]},
      {heading:"2. Draft and refine marketing copy",paragraphs:["AI can help create a first draft for an email, advertisement, or landing page. Give it a clear audience, offer, desired action, and tone—then edit the result until it sounds like your business."],points:["Start with a specific brief","Remove vague or exaggerated claims","Check facts and brand voice before publishing"]},
      {heading:"3. Summarize customer feedback",paragraphs:["Reviews, survey answers, and sales notes contain useful patterns. With appropriate privacy safeguards, AI can help summarize recurring needs, objections, and phrases that may improve your messaging."]},
      {heading:"4. Create a more consistent workflow",paragraphs:["Use AI to create checklists, campaign briefs, meeting summaries, and repeatable templates. The goal is not more content—it is a clearer, more reliable way of working."]},
      {heading:"5. Review performance with better questions",paragraphs:["AI can help you formulate questions about campaign results and organize observations. It should support analysis, not invent conclusions that the data does not justify."],points:["What changed compared with the previous period?","Where are prospects dropping out?","Which message produced higher-quality conversations?"]},
      {heading:"Start small and keep the goal visible",paragraphs:["Choose one task that costs time every week. Define what a better outcome looks like, test an AI-assisted process, and review the quality before expanding it. Useful AI adoption is measured by clearer work and better decisions—not by the number of tools you use."]},
    ],
  },
  {
    slug:"facebook-ads-not-generating-leads", category:"Digital Skills", title:"Why Your Facebook Ads Aren't Generating Enough Leads",
    excerpt:"The common gaps between an ad getting attention and a campaign creating genuinely useful enquiries for your business.",
    date:"2026-09-08", displayDate:"September 8, 2026", readingTime:"7 min read", image:"/images/meta-ads.jpg", imageAlt:"Campaign planning cards beside a phone and performance charts",
    sections:[
      {heading:"The ad may not be the real problem",paragraphs:["When a campaign underperforms, it is easy to blame targeting or creative. But lead generation is a connected system. Your offer, message, landing experience, follow-up, and measurement all affect the result."]},
      {heading:"Your offer is too broad",paragraphs:["People respond to specific value. A general invitation to learn more often creates less urgency than a clear, relevant next step that addresses a recognizable problem."],points:["Name the problem you solve","Explain who the offer is for","Make the next step simple and low-pressure"]},
      {heading:"The message does not match the audience",paragraphs:["A strong message reflects what the customer already cares about. Use the language you hear in sales conversations and explain the practical outcome before describing features."]},
      {heading:"The journey after the click creates friction",paragraphs:["A confusing page, slow load, or long form can lose interested prospects. Keep the landing experience consistent with the ad and ask only for information you will actually use."]},
      {heading:"Follow-up is too slow or inconsistent",paragraphs:["A lead is the beginning of a conversation. Decide who responds, how quickly, what information they need, and what happens when the person is not ready immediately."]},
      {heading:"You are optimizing the wrong signal",paragraphs:["Low-cost clicks do not automatically mean strong business opportunities. Track the measures that help you judge lead quality and the conversations that follow."],points:["Qualified enquiries","Booked consultations","Response and show-up rates","Meaningful sales conversations"]},
      {heading:"Improve one part at a time",paragraphs:["Establish a clear baseline, choose the most likely constraint, and run a focused test. A disciplined learning cycle creates more useful insight than changing the audience, creative, and offer all at once."]},
    ],
  },
  {
    slug:"email-follow-up-turns-leads-into-customers", category:"Communication", title:"How Email Follow-Up Can Turn More Leads Into Customers",
    excerpt:"A practical framework for staying helpful and relevant after someone shows interest in your business.",
    date:"2026-08-26", displayDate:"August 26, 2026", readingTime:"6 min read", image:"/images/email-marketing.jpg", imageAlt:"A sequence of blue envelope cards leading to a customer card in an open notebook",
    sections:[
      {heading:"Interest does not always become an immediate decision",paragraphs:["People get busy, compare options, and need time to feel confident. A useful follow-up sequence helps them understand the next step without adding pressure."]},
      {heading:"Begin with a clear promise",paragraphs:["Set expectations when someone joins your list or requests information. Tell them what they will receive, when they can expect it, and how it will help."]},
      {heading:"Answer the questions that slow decisions",paragraphs:["Use real sales conversations to identify uncertainty. Your emails can explain the process, clarify who the service is for, and help the reader evaluate their options."],points:["What happens next?","How does the process work?","What should I prepare?","Is this right for my situation?"]},
      {heading:"Build a simple nurture sequence",paragraphs:["A practical sequence might include a welcome message, a useful resource, an explanation of your approach, a common-question email, and an invitation to talk. Each message should have one main purpose."]},
      {heading:"Segment when the difference matters",paragraphs:["You do not need dozens of segments. Start by separating contacts when they have meaningfully different needs, interests, or stages in the customer journey."]},
      {heading:"Measure useful behavior",paragraphs:["Open rates can be directional, but they are not the whole story. Review clicks, replies, booked calls, unsubscribe patterns, and the quality of the conversations that follow."]},
      {heading:"Helpful consistency earns attention",paragraphs:["Good email follow-up is not a stream of reminders to buy. It is a planned set of useful messages that makes it easier for a prospective customer to understand, trust, and take the next step."]},
    ],
  },
];

export function getPost(slug:string){ return posts.find((post)=>post.slug===slug); }
