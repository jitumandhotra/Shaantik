import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Clock, Tag, Bell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import blog01 from "@/assets/images/blog_01_website_mistakes.png";
import blog02 from "@/assets/images/blog_02_google_ads.png";
import blog03 from "@/assets/images/blog_03_react_vs_flutter.png";
import blog04 from "@/assets/images/blog_04_brand_audit.png";
import blog05 from "@/assets/images/blog_05_revenue_growth.png";
import blog06 from "@/assets/images/blog_06_ux_principles.png";
import blog07 from "@/assets/images/blog_07_seo_2025.png";
import blog08 from "@/assets/images/blog_08_typescript_react.png";

type BlogCategory = "All" | "Web Dev" | "Marketing" | "Design" | "Mobile" | "Business";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: Exclude<BlogCategory, "All">;
  readTime: string;
  date: string;
  image: string;
  featured?: boolean;
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: "10 Website Mistakes That Are Costing You Customers (And How to Fix Them)",
    excerpt: "From slow load times to broken mobile layouts, these common website errors are silently driving away your prospects. Here's a practical checklist to audit and fix each one.",
    category: "Web Dev",
    readTime: "8 min read",
    date: "Mar 20, 2025",
    image: blog01,
    featured: true,
  },
  {
    id: 2,
    title: "Why Most Google Ads Campaigns Fail in the First 90 Days",
    excerpt: "Budget misallocation, wrong bidding strategies, and poor landing pages are the real culprits. We break down the top 5 reasons — and the fixes that actually work.",
    category: "Marketing",
    readTime: "6 min read",
    date: "Mar 14, 2025",
    image: blog02,
  },
  {
    id: 3,
    title: "React Native vs Flutter in 2025: What Should You Choose for Your App?",
    excerpt: "Both are excellent — but the right choice depends on your team, timeline, and product goals. Here's an honest, side-by-side breakdown to help you decide.",
    category: "Mobile",
    readTime: "10 min read",
    date: "Mar 08, 2025",
    image: blog03,
  },
  {
    id: 4,
    title: "The Brand Audit: 7 Signs Your Visual Identity Is Hurting Your Business",
    excerpt: "Inconsistent logos, outdated color palettes, and poor typography are eroding trust with your audience. Find out how to spot the signs and what to do about it.",
    category: "Design",
    readTime: "7 min read",
    date: "Feb 27, 2025",
    image: blog04,
  },
  {
    id: 5,
    title: "How We Took a Client from $0 to $250K in Monthly Revenue in 6 Months",
    excerpt: "A full breakdown of the strategy, tools, and tactics we used to build a complete digital presence from scratch — including the mistakes we made along the way.",
    category: "Business",
    readTime: "12 min read",
    date: "Feb 18, 2025",
    image: blog05,
  },
  {
    id: 6,
    title: "The UX Principles Every Business Owner Should Know Before Building a Product",
    excerpt: "Great UX isn't just about aesthetics — it's about reducing friction, building trust, and guiding users to take action. Here are the fundamentals that matter most.",
    category: "Design",
    readTime: "9 min read",
    date: "Feb 10, 2025",
    image: blog06,
  },
  {
    id: 7,
    title: "SEO in 2025: What's Changed and What You Should Prioritize Right Now",
    excerpt: "AI-generated content, Core Web Vitals updates, and the rise of zero-click searches have changed the SEO game. Here's how to adapt your strategy.",
    category: "Marketing",
    readTime: "11 min read",
    date: "Jan 30, 2025",
    image: blog07,
  },
  {
    id: 8,
    title: "TypeScript for React Developers: A Practical Starter Guide",
    excerpt: "Stop putting it off. TypeScript makes your React apps more maintainable, your team more productive, and your codebase less prone to runtime surprises.",
    category: "Web Dev",
    readTime: "8 min read",
    date: "Jan 22, 2025",
    image: blog08,
  },
];

const categories: BlogCategory[] = ["All", "Web Dev", "Marketing", "Design", "Mobile", "Business"];

const categoryColors: Partial<Record<BlogCategory, string>> = {
  "Web Dev":   "text-primary border-primary/30 bg-primary/10",
  "Marketing": "text-secondary border-secondary/30 bg-secondary/10",
  "Design":    "text-accent border-accent/30 bg-accent/10",
  "Mobile":    "text-blue-400 border-blue-500/30 bg-blue-500/10",
  "Business":  "text-purple-400 border-purple-500/30 bg-purple-500/10",
};

export default function Blog() {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");
  const [email, setEmail] = useState("");

  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);
  const filteredRest = activeCategory === "All"
    ? rest
    : rest.filter((p) => p.category === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast({ variant: "destructive", title: "Invalid email", description: "Please enter a valid email address." });
      return;
    }
    toast({ title: "You're in!", description: "Fresh articles landing in your inbox every week." });
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-[#110b17] pt-0">

      {/* ── HERO ── */}
      <section className="relative pt-48 pb-24 md:pt-60 md:pb-32 overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent font-black uppercase tracking-[0.3em] mb-4 text-sm"
          >
            Home <span className="mx-2 text-white/50">»</span> Blog
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6"
          >
            Insights & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              Ideas
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-bold text-white/70 max-w-3xl mx-auto"
          >
            Practical guides, case studies, and digital strategy insights from the Shaantik team.
            No fluff. Just content that helps you grow.
          </motion.p>
        </div>
      </section>

      {/* ── FEATURED POST ── */}
      {featured && (
        <section className="pb-12 relative z-10">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden hover:border-primary/30 hover:shadow-[0_0_50px_rgba(var(--primary),0.15)] transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-1/2 relative aspect-video lg:aspect-auto overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#110b17]/80 lg:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#110b17]/80 to-transparent lg:hidden" />
                  <span className="absolute top-6 left-6 px-4 py-2 rounded-full bg-primary text-white text-xs font-black uppercase tracking-wider">
                    Featured
                  </span>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 p-10 md:p-14 flex flex-col justify-center">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-black uppercase tracking-wider mb-6 w-fit ${categoryColors[featured.category]}`}>
                    <Tag className="w-3 h-3" />
                    {featured.category}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-[1.1] mb-6">
                    {featured.title}
                  </h2>
                  <p className="text-white/60 font-medium leading-relaxed mb-8">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-white/40 text-sm font-bold mb-8">
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {featured.readTime}</span>
                    <span>•</span>
                    <span>{featured.date}</span>
                  </div>
                  <Button className="rounded-full h-14 px-8 text-lg font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(var(--primary),0.3)] hover:scale-105 transition-all w-fit">
                    Read Article <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── FILTER + GRID ── */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-black uppercase tracking-widest text-sm transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-[0_0_20px_rgba(var(--primary),0.4)] scale-105"
                    : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRest.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(var(--primary),0.1)] transition-all duration-500 flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#110b17] to-transparent" />
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full border text-xs font-black uppercase tracking-wider ${categoryColors[post.category]}`}>
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-white/40 text-xs font-bold mb-4">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-xl font-black text-white uppercase tracking-tight leading-tight mb-4 flex-grow">
                    {post.title}
                  </h3>
                  <p className="text-white/60 text-sm font-medium leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <button className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm hover:gap-4 transition-all group-hover:text-primary/80">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-24 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8">
              <Bell className="w-4 h-4 text-primary" />
              <span className="text-primary font-black uppercase tracking-widest text-sm">Stay in the Loop</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">
              Get Weekly <span className="text-primary">Insights</span>
            </h2>
            <p className="text-white/60 text-lg font-bold mb-10">
              Practical digital marketing and development tips, delivered to your inbox every week.
              No spam. Unsubscribe anytime.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="h-16 rounded-2xl bg-white/10 border-white/20 text-white placeholder:text-white/40 text-lg flex-grow focus-visible:ring-primary"
              />
              <Button
                type="submit"
                className="h-16 px-8 rounded-2xl font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white text-lg shadow-[0_0_20px_rgba(var(--primary),0.4)] hover:scale-105 transition-all shrink-0"
              >
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-20 bg-black/40 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 text-xl font-bold mb-6">
            Ready to put these ideas into action for your business?
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full h-16 px-10 text-xl font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(var(--primary),0.4)] hover:scale-105 transition-all"
          >
            <Link href="/contact">Work With Us <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
