import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts, getBlogPostBySlug } from "@/data/blogPosts";
import NotFound from "@/pages/NotFound";

const SITE_URL = "https://shaantik.com";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <NotFound />;
  }

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug && item.category === post.category)
    .slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}/og.png`,
    datePublished: post.publishedDate,
    dateModified: post.lastmod,
    author: {
      "@type": "Organization",
      name: "Shaantik",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Shaantik",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.ico`,
      },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <article className="min-h-screen bg-[#110b17] text-white">
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>

      <section className="relative pt-36 pb-14 md:pt-48 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={post.image} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#110b17]/90 via-[#110b17]/82 to-[#110b17]" />
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-primary font-black uppercase tracking-widest text-sm transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-black uppercase tracking-wider"
            >
              <Tag className="w-3 h-3" />
              {post.category}
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-normal leading-[1.04] mb-6"
          >
            {post.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 font-bold leading-relaxed max-w-3xl mb-8"
          >
            {post.excerpt}
          </motion.p>

          <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm font-bold">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-8 items-start">
            <aside className="hidden lg:block">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <p className="text-primary font-black uppercase tracking-widest text-xs mb-4">In this article</p>
                <nav className="space-y-3">
                  {post.sections.map((section) => (
                    <a
                      key={section.heading}
                      href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                      className="block text-sm font-bold leading-snug text-white/55 hover:text-white transition-colors"
                    >
                      {section.heading}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#171020] shadow-xl shadow-black/20">
            <img
              src={post.image}
              alt={post.title}
              className="w-full aspect-[16/8] object-cover border-b border-white/10"
            />

              <div className="p-6 md:p-10 lg:p-12">
                <div className="space-y-12">
                  {post.sections.map((section, index) => (
                    <section
                      key={section.heading}
                      id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}
                      className="scroll-mt-32"
                    >
                      {index > 0 && <div className="mb-10 h-px bg-white/10" />}
                      <div className="flex gap-5">
                        <span className="hidden sm:block text-primary/50 font-black text-xl leading-none pt-2">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-normal leading-[1.12] text-white mb-4">
                    {section.heading}
                  </h2>
                          <p className="text-base md:text-lg leading-8 text-white/70 font-medium">
                    {section.body}
                  </p>
                        </div>
                      </div>
                </section>
              ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="py-20 border-t border-white/5 bg-black/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-normal mb-10">
              Related <span className="text-primary">Articles</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="group rounded-[2rem] border border-white/10 bg-white/5 overflow-hidden hover:border-primary/40 hover:bg-white/10 transition-all"
                >
                  <img src={item.image} alt={item.title} className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="p-6">
                    <p className="text-primary font-black uppercase tracking-widest text-xs mb-3">{item.category}</p>
                    <h3 className="text-xl font-black uppercase tracking-tight mb-4">{item.title}</h3>
                    <span className="inline-flex items-center gap-2 text-white/60 group-hover:text-primary font-black uppercase tracking-widest text-sm transition-colors">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 text-xl font-bold mb-6">
            Want help turning these ideas into measurable growth?
          </p>
          <Button asChild size="lg" className="rounded-full h-16 px-10 text-lg font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white">
            <Link href="/contact">
              Work With Shaantik <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </article>
  );
}
