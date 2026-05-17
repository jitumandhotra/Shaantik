import { useEffect } from "react";
import { useLocation } from "wouter";
import { getBlogPostBySlug } from "@/data/blogPosts";
import { getServiceBySlug } from "@/data/servicePages";

const SITE_URL = "https://shaantik.com";
const DEFAULT_IMAGE = `${SITE_URL}/og.png`;

const pages: Record<string, { title: string; description: string; robots?: string }> = {
  "/": {
    title: "Shaantik | Website Development, SEO & Digital Marketing Agency",
    description:
      "Shaantik is a creative digital agency for high-performance websites, mobile apps, SEO strategy, digital marketing, branding, DevOps, AI automation, and Salesforce solutions.",
  },
  "/services": {
    title: "Digital Growth Services | Web, SEO, AI & Salesforce | Shaantik",
    description:
      "Explore Shaantik services including website development, mobile app development, SEO strategy, digital marketing, brand design, DevOps, AI automation, and Salesforce consulting.",
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
    title: "Website, SEO, App and Digital Marketing Pricing | Shaantik",
    description:
      "Review Shaantik pricing packages for websites, SEO strategy, apps, branding, digital marketing, DevOps, AI automation, and Salesforce consulting.",
  },
  "/contact": {
    title: "Contact Shaantik | Start a Digital Project",
    description:
      "Contact Shaantik for website development, mobile apps, SEO strategy, branding, digital marketing, DevOps, AI automation, and Salesforce projects.",
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
    const serviceMatch = path.match(/^\/services\/([^/]+)$/);
    const blogPost = blogMatch ? getBlogPostBySlug(blogMatch[1]) : undefined;
    const service = serviceMatch ? getServiceBySlug(serviceMatch[1]) : undefined;
    const page = blogPost
      ? {
          title: `${blogPost.title} | Shaantik Blog`,
          description: blogPost.excerpt,
        }
      : service
      ? {
          title: `${service.title} Services | Shaantik`,
          description: service.description,
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
