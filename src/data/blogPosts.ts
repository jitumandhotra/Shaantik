import blog01 from "@/assets/images/blog_01_website_mistakes.png";
import blog02 from "@/assets/images/blog_02_google_ads.png";
import blog03 from "@/assets/images/blog_03_react_vs_flutter.png";
import blog04 from "@/assets/images/blog_04_brand_audit.png";
import blog05 from "@/assets/images/blog_05_revenue_growth.png";
import blog06 from "@/assets/images/blog_06_ux_principles.png";
import blog07 from "@/assets/images/blog_07_seo_2025.png";
import blog08 from "@/assets/images/blog_08_typescript_react.png";

export type BlogCategory = "All" | "Web Dev" | "Marketing" | "Design" | "Mobile" | "Business";

export interface BlogSection {
  heading: string;
  body: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: Exclude<BlogCategory, "All">;
  readTime: string;
  date: string;
  publishedDate: string;
  lastmod: string;
  image: string;
  featured?: boolean;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "website-mistakes-costing-customers",
    title: "10 Website Mistakes That Are Costing You Customers (And How to Fix Them)",
    excerpt: "From slow load times to broken mobile layouts, these common website errors are silently driving away your prospects. Here's a practical checklist to audit and fix each one.",
    category: "Web Dev",
    readTime: "8 min read",
    date: "Mar 20, 2025",
    publishedDate: "2025-03-20",
    lastmod: "2026-05-17",
    image: blog01,
    featured: true,
    sections: [
      {
        heading: "Slow pages lose buyers before the pitch starts",
        body: "Your site has only a few seconds to prove that it is worth a visitor's time. Compress large media, remove unused scripts, lazy-load noncritical images, and keep your hosting stack simple enough to stay fast under real traffic.",
      },
      {
        heading: "Mobile experience is the main experience",
        body: "Most prospects will see your brand on a phone first. Buttons need enough tap space, forms should be short, headings must wrap cleanly, and the content order should guide people toward one next action.",
      },
      {
        heading: "Clear calls to action beat clever copy",
        body: "Every important page should make the next step obvious. Use direct language like request a quote, book a consultation, or view services, then repeat the action naturally after proof sections and pricing context.",
      },
      {
        heading: "Trust signals need to be visible",
        body: "Testimonials, case studies, process details, contact information, and real project examples reduce hesitation. Place them near conversion points so visitors do not need to hunt for reasons to believe you.",
      },
    ],
  },
  {
    id: 2,
    slug: "google-ads-campaigns-fail-first-90-days",
    title: "Why Most Google Ads Campaigns Fail in the First 90 Days",
    excerpt: "Budget misallocation, wrong bidding strategies, and poor landing pages are the real culprits. We break down the top 5 reasons - and the fixes that actually work.",
    category: "Marketing",
    readTime: "6 min read",
    date: "Mar 14, 2025",
    publishedDate: "2025-03-14",
    lastmod: "2026-05-17",
    image: blog02,
    sections: [
      {
        heading: "Campaigns fail when intent is mixed",
        body: "High-intent search terms should not compete with broad research terms in the same budget pool. Split campaigns by buyer intent, match landing pages to that intent, and watch search terms weekly.",
      },
      {
        heading: "Landing pages carry the conversion",
        body: "A good ad can only earn the click. The landing page has to answer the promise, load quickly, show proof, and give visitors one clear action without distractions.",
      },
      {
        heading: "Early data needs patience and cleanup",
        body: "The first month should focus on signal quality. Remove irrelevant queries, test offers, tighten location targeting, and avoid judging the whole channel before the account has clean conversion data.",
      },
    ],
  },
  {
    id: 3,
    slug: "react-native-vs-flutter-2025",
    title: "React Native vs Flutter in 2025: What Should You Choose for Your App?",
    excerpt: "Both are excellent - but the right choice depends on your team, timeline, and product goals. Here's an honest, side-by-side breakdown to help you decide.",
    category: "Mobile",
    readTime: "10 min read",
    date: "Mar 08, 2025",
    publishedDate: "2025-03-08",
    lastmod: "2026-05-17",
    image: blog03,
    sections: [
      {
        heading: "Choose around your team, not just the framework",
        body: "React Native is a natural fit for teams already strong in React and TypeScript. Flutter can be excellent when you want a highly controlled UI layer and are comfortable investing in Dart expertise.",
      },
      {
        heading: "Performance depends on the product shape",
        body: "Both frameworks can deliver smooth consumer apps. The real performance questions are usually about animations, native integrations, offline behavior, and how disciplined the codebase stays as features grow.",
      },
      {
        heading: "Long-term maintenance matters most",
        body: "Look at hiring market, library maturity, app store release process, and your internal roadmap. The best choice is the one your team can maintain confidently for several years.",
      },
    ],
  },
  {
    id: 4,
    slug: "brand-audit-visual-identity-hurting-business",
    title: "The Brand Audit: 7 Signs Your Visual Identity Is Hurting Your Business",
    excerpt: "Inconsistent logos, outdated color palettes, and poor typography are eroding trust with your audience. Find out how to spot the signs and what to do about it.",
    category: "Design",
    readTime: "7 min read",
    date: "Feb 27, 2025",
    publishedDate: "2025-02-27",
    lastmod: "2026-05-17",
    image: blog04,
    sections: [
      {
        heading: "Inconsistency makes the brand feel smaller",
        body: "When your website, proposals, ads, and social posts all look different, customers read that as a lack of maturity. A simple visual system with rules for logo, color, type, and spacing fixes most of it.",
      },
      {
        heading: "Typography can quietly damage trust",
        body: "Hard-to-read type, cramped spacing, and mismatched fonts make even strong offers feel less professional. Choose a restrained type system and test it on real mobile screens.",
      },
      {
        heading: "A useful brand audit ends in actions",
        body: "Do not stop at opinions. List the assets that need replacing, define what stays, document the new rules, and update the touchpoints prospects see most often first.",
      },
    ],
  },
  {
    id: 5,
    slug: "client-zero-to-250k-monthly-revenue",
    title: "How We Took a Client from $0 to $250K in Monthly Revenue in 6 Months",
    excerpt: "A full breakdown of the strategy, tools, and tactics we used to build a complete digital presence from scratch - including the mistakes we made along the way.",
    category: "Business",
    readTime: "12 min read",
    date: "Feb 18, 2025",
    publishedDate: "2025-02-18",
    lastmod: "2026-05-17",
    image: blog05,
    sections: [
      {
        heading: "The offer came before the website",
        body: "Growth started with a sharp offer, a clear buyer, and a simple conversion path. The website, ads, email flows, and reporting were built around that commercial foundation.",
      },
      {
        heading: "We measured the funnel weekly",
        body: "Traffic alone was not the goal. We tracked cost per qualified lead, close rate, objections, form drop-off, and sales follow-up speed so each improvement connected to revenue.",
      },
      {
        heading: "Scaling happened after proof",
        body: "Once the landing page and sales process converted consistently, budget increased in stages. That kept the team from scaling confusion and made every channel easier to judge.",
      },
    ],
  },
  {
    id: 6,
    slug: "ux-principles-business-owner-product",
    title: "The UX Principles Every Business Owner Should Know Before Building a Product",
    excerpt: "Great UX isn't just about aesthetics - it's about reducing friction, building trust, and guiding users to take action. Here are the fundamentals that matter most.",
    category: "Design",
    readTime: "9 min read",
    date: "Feb 10, 2025",
    publishedDate: "2025-02-10",
    lastmod: "2026-05-17",
    image: blog06,
    sections: [
      {
        heading: "Reduce decisions wherever possible",
        body: "Good UX helps people move without thinking too hard. Limit competing actions, use familiar patterns, and make the most important next step visually obvious.",
      },
      {
        heading: "Feedback builds confidence",
        body: "Forms, checkout flows, dashboards, and onboarding steps should tell users what happened, what is happening now, and what to do next. Silence creates doubt.",
      },
      {
        heading: "Design from the messy real world",
        body: "Plan for weak connections, typos, short attention spans, tiny screens, and returning users. Products feel premium when they handle imperfect behavior gracefully.",
      },
    ],
  },
  {
    id: 7,
    slug: "seo-in-2025-priorities",
    title: "SEO in 2025: What's Changed and What You Should Prioritize Right Now",
    excerpt: "AI-generated content, Core Web Vitals updates, and the rise of zero-click searches have changed the SEO game. Here's how to adapt your strategy.",
    category: "Marketing",
    readTime: "11 min read",
    date: "Jan 30, 2025",
    publishedDate: "2025-01-30",
    lastmod: "2026-05-17",
    image: blog07,
    sections: [
      {
        heading: "Helpful pages still win",
        body: "Search engines have changed, but useful content is still the center. Build pages that answer real buyer questions, show experience, and make the business behind the content easy to trust.",
      },
      {
        heading: "Technical basics create crawl confidence",
        body: "Clean URLs, one H1 per page, descriptive titles, fast loading, internal links, sitemap coverage, and schema markup help search engines understand the site without friction.",
      },
      {
        heading: "Topical depth beats thin volume",
        body: "A few strong pages around your actual services are better than dozens of shallow posts. Create clusters around website development, SEO, digital marketing, app development, branding, AI automation, and Salesforce consulting.",
      },
    ],
  },
  {
    id: 8,
    slug: "typescript-react-developers-starter-guide",
    title: "TypeScript for React Developers: A Practical Starter Guide",
    excerpt: "Stop putting it off. TypeScript makes your React apps more maintainable, your team more productive, and your codebase less prone to runtime surprises.",
    category: "Web Dev",
    readTime: "8 min read",
    date: "Jan 22, 2025",
    publishedDate: "2025-01-22",
    lastmod: "2026-05-17",
    image: blog08,
    sections: [
      {
        heading: "Start with props and shared data",
        body: "The fastest win is typing component props, API responses, form values, and shared arrays. These are the places small mistakes often become runtime bugs.",
      },
      {
        heading: "Let inference do normal work",
        body: "You do not need to annotate every variable. Use explicit types where they clarify contracts, then let TypeScript infer simple local values.",
      },
      {
        heading: "Make invalid states harder to express",
        body: "Union types, narrowed values, and clear interfaces help React components model real UI states. That makes refactors safer and future features less fragile.",
      },
    ],
  },
];

export const blogCategories: BlogCategory[] = ["All", "Web Dev", "Marketing", "Design", "Mobile", "Business"];

export const getBlogPostBySlug = (slug?: string) => blogPosts.find((post) => post.slug === slug);
