import { useEffect } from "react";
import { useLocation } from "wouter";
import { getBlogPostBySlug } from "@/data/blogPosts";

const SITE_URL = "https://shaantik.com";
const DEFAULT_IMAGE = `${SITE_URL}/og.png`;

const pages: Record<string, { title: string; description: string; robots?: string }> = {
  "/": {
    title: "Shaantik | Website Development, SEO & Digital Marketing Agency",
    description:
      "Shaantik is a creative digital agency for high-performance websites, mobile apps, branding, SEO, digital marketing, AI automation, data science, and Salesforce solutions.",
  },
  "/services": {
    title: "Website Development, App Development & Digital Marketing Services | Shaantik",
    description:
      "Explore Shaantik services including website development, mobile app development, SEO, digital marketing, brand design, AI automation, data science, and Salesforce consulting.",
  },
  "/projects": {
    title: "Shaantik Projects and Case Studies | Websites, Apps & Marketing",
    description:
      "See Shaantik case studies and digital projects across websites, mobile apps, branding, marketing, SaaS platforms, and product design.",
  },
  "/about": {
    title: "About Shaantik | Creative Digital Agency",
    description:
      "Learn about Shaantik, a strategy-led creative digital agency helping brands grow with design, development, marketing, automation, and measurable execution.",
  },
  "/blog": {
    title: "Digital Strategy Blog | SEO, Web Development & Marketing | Shaantik",
    description:
      "Read Shaantik insights on website development, SEO, digital marketing, brand strategy, UX, React, TypeScript, and business growth.",
  },
  "/pricing": {
    title: "Website Design and Digital Marketing Pricing | Shaantik",
    description:
      "Review Shaantik pricing packages for websites, apps, branding, digital marketing, SEO, and growth-focused digital services.",
  },
  "/contact": {
    title: "Contact Shaantik | Start a Digital Project",
    description:
      "Contact Shaantik for website development, mobile apps, branding, SEO, digital marketing, AI automation, data science, and Salesforce projects.",
  },
};

const notFoundPage = {
  title: "404 Page Not Found | Shaantik",
  description: "The page you requested could not be found on Shaantik.",
  robots: "noindex, follow",
};

const setMeta = (selector: string, attribute: "content" | "href", value: string) => {
  const element = document.head.querySelector(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
};

export default function SEO() {
  const [location] = useLocation();

  useEffect(() => {
    const path = location.split("?")[0] || "/";
    const blogMatch = path.match(/^\/blog\/([^/]+)$/);
    const blogPost = blogMatch ? getBlogPostBySlug(blogMatch[1]) : undefined;
    const page = blogPost
      ? {
          title: `${blogPost.title} | Shaantik Blog`,
          description: blogPost.excerpt,
        }
      : pages[path] ?? notFoundPage;
    const canonical = `${SITE_URL}${path === "/" ? "/" : path}`;

    document.title = page.title;
    setMeta('meta[name="description"]', "content", page.description);
    setMeta('meta[property="og:title"]', "content", page.title);
    setMeta('meta[property="og:description"]', "content", page.description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[property="og:image"]', "content", DEFAULT_IMAGE);
    setMeta('meta[property="og:image:secure_url"]', "content", DEFAULT_IMAGE);
    setMeta('meta[name="twitter:title"]', "content", page.title);
    setMeta('meta[name="twitter:description"]', "content", page.description);
    setMeta('meta[name="twitter:image"]', "content", DEFAULT_IMAGE);
    setMeta('meta[name="robots"]', "content", page.robots ?? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setMeta('meta[name="googlebot"]', "content", page.robots ?? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setMeta('link[rel="canonical"]', "href", canonical);
  }, [location]);

  return null;
}
