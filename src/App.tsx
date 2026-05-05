import { Route, Switch } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import SEO from "@/components/SEO";
import Home     from "@/pages/Home";
import About    from "@/pages/About";
import Contact  from "@/pages/Contact";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import Blog     from "@/pages/Blog";
import Pricing  from "@/pages/Pricing";

export default function App() {
  return (
    <>
      <SEO />
      <Navbar />
      <Switch>
        <Route path="/"         component={Home}     />
        <Route path="/about"    component={About}    />
        <Route path="/contact"  component={Contact}  />
        <Route path="/services" component={Services} />
        <Route path="/projects" component={Projects} />
        <Route path="/blog"     component={Blog}     />
        <Route path="/pricing"  component={Pricing}  />
      </Switch>
      <Footer />
      <Toaster />
    </>
  );
}
