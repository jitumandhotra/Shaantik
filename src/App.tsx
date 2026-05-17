import { Route, Switch } from "wouter";
import Navbar from "@/components/layout/Navbar";
import MobileNavigation from "@/components/layout/MobileNavigation";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import SEO from "@/components/SEO";
import ScrollToTop from "@/components/ScrollToTop";
import Home     from "@/pages/Home";
import About    from "@/pages/About";
import Contact  from "@/pages/Contact";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Projects from "@/pages/Projects";
import Blog     from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Pricing  from "@/pages/Pricing";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <>
      <SEO />
      <ScrollToTop />
      <Navbar />
      <MobileNavigation />
      <Switch>
        <Route path="/"         component={Home}     />
        <Route path="/about"    component={About}    />
        <Route path="/contact"  component={Contact}  />
        <Route path="/services/:slug" component={ServiceDetail} />
        <Route path="/services" component={Services} />
        <Route path="/projects" component={Projects} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/blog"     component={Blog}     />
        <Route path="/pricing"  component={Pricing}  />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <Toaster />
    </>
  );
}
