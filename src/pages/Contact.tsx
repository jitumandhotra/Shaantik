import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Phone, Mail, MapPin, Clock, CheckCircle2,
  ChevronDown, Loader2, AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

import hqImage from "@/assets/images/shaantik-expertise.svg";

const CONTACT_ENDPOINT =
  import.meta.env.VITE_NEXA_CORE_CONTACT_URL || "/api/contact-form";
const CONTACT_EMAIL = "shaantik01@gmail.com";
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`;

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName:  z.string().min(2, "Last name is required"),
  company:   z.string().optional(),
  email:     z.string().email("Invalid email address"),
  phone:     z.string().optional(),
  service:   z.string().min(1, "Please select a service"),
  budget:    z.string().min(1, "Please select a budget range"),
  industry:  z.string().min(1, "Please select an industry"),
  message:   z.string().min(20, "Message must be at least 20 characters"),
  consent:   z.boolean().refine((v) => v === true, { message: "You must agree to be contacted" }),
});

type FormValues = z.infer<typeof formSchema>;

const faqs = [
  {
    q: "What is your typical project timeline?",
    a: "Timelines vary by scope. A website typically takes 4–8 weeks. A mobile app takes 8–16 weeks. Marketing campaigns can launch in 2–3 weeks. We'll provide a precise estimate after our initial consultation.",
  },
  {
    q: "Do you work with startups and small businesses?",
    a: "Absolutely. We work with businesses at every stage — from pre-launch startups to established enterprises. Our packages are designed to scale with your budget and goals.",
  },
  {
    q: "How does your pricing work?",
    a: "We offer fixed-price project packages and retainer-based ongoing relationships. No hourly surprises — you'll always know the full scope and cost before we begin.",
  },
  {
    q: "Will I have a dedicated point of contact?",
    a: "Yes. Every client is assigned a dedicated project manager who handles all communication, scheduling, and delivery oversight from kickoff to launch.",
  },
  {
    q: "Can you work with our existing branding?",
    a: "Absolutely. We can build on your existing brand guidelines or help evolve them as part of your project. We'll always align our work to your established identity.",
  },
  {
    q: "What happens after the project launches?",
    a: "We offer post-launch support packages, retainer agreements for ongoing work, and growth marketing services to keep the momentum going after delivery.",
  },
];

const services = [
  { value: "web", label: "Website Development" },
  { value: "app", label: "Mobile App Development" },
  { value: "marketing", label: "Digital Marketing" },
  { value: "design", label: "Graphics & Branding" },
  { value: "full", label: "Full-Service Package" },
  { value: "other", label: "Other / Not Sure" },
];

const budgetRanges = [
  { value: "under5k", label: "Under $5,000" },
  { value: "5k-15k", label: "$5,000 - $15,000" },
  { value: "15k-30k", label: "$15,000 - $30,000" },
  { value: "30k-50k", label: "$30,000 - $50,000" },
  { value: "50k+", label: "$50,000+" },
];

const industries = [
  { value: "arts-entertainment", label: "Arts & Entertainment" },
  { value: "autos-vehicles", label: "Autos & Vehicles" },
  { value: "beauty-fitness", label: "Beauty & Fitness" },
  { value: "books-literature", label: "Books & Literature" },
  { value: "business-industrial", label: "Business & Industrial" },
  { value: "computers-electronics", label: "Computers & Electronics" },
  { value: "finance", label: "Finance" },
  { value: "food-drink", label: "Food & Drink" },
  { value: "games", label: "Games" },
  { value: "health", label: "Health" },
  { value: "home-garden", label: "Home & Garden" },
  { value: "internet-telecom", label: "Internet & Telecom" },
  { value: "jobs-education", label: "Jobs & Education" },
  { value: "law-government", label: "Law & Government" },
  { value: "news", label: "News" },
  { value: "online-communities", label: "Online Communities" },
  { value: "people-society", label: "People & Society" },
  { value: "pets-animals", label: "Pets & Animals" },
  { value: "real-estate", label: "Real Estate" },
  { value: "reference", label: "Reference" },
  { value: "science", label: "Science" },
  { value: "shopping", label: "Shopping" },
  { value: "sports", label: "Sports" },
  { value: "travel", label: "Travel" },
  { value: "other-business", label: "Other Business Activity" },
];

type SelectOption = {
  value: string;
  label: string;
};

type ThemedSelectProps = {
  label: string;
  value?: string;
  placeholder: string;
  options: SelectOption[];
  error?: string;
  onChange: (value: string) => void;
};

function ThemedSelect({ label, value, placeholder, options, error, onChange }: ThemedSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  return (
    <div ref={wrapperRef} className="space-y-2 relative">
      <label className="text-sm font-black text-white uppercase tracking-widest ml-2 block">{label}</label>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className={`w-full h-14 rounded-2xl bg-black/40 border ${
          error ? "border-red-500" : isOpen ? "border-primary" : "border-white/10"
        } text-left text-white px-4 pr-12 outline-none focus:ring-2 focus:ring-primary transition-all shadow-inner shadow-black/20 relative`}
        aria-expanded={isOpen}
      >
        <span className={selectedOption ? "text-white" : "text-white/65"}>
          {selectedOption?.label ?? placeholder}
        </span>
        <ChevronDown
          className={`absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-primary transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.16 }}
            className="absolute left-0 right-0 top-[calc(100%-2px)] z-50 max-h-72 overflow-y-auto rounded-2xl border border-primary/40 bg-[#140817]/95 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          >
            {options.map((option) => {
              const isSelected = option.value === value;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full rounded-xl px-4 py-3 text-left text-sm font-bold transition-colors ${
                    isSelected
                      ? "bg-primary text-white shadow-[0_0_18px_rgba(var(--primary),0.35)]"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {error && (
        <span className="text-red-400 text-xs font-bold ml-2 block">{error}</span>
      )}
    </div>
  );
}

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting]   = useState(false);
  const [submitStatus, setSubmitStatus]   = useState<"idle" | "success" | "error">("idle");
  const [openFaqIndex, setOpenFaqIndex]   = useState<number | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { service: "", budget: "", industry: "", consent: false },
  });
  const selectedService = form.watch("service");
  const selectedBudget = form.watch("budget");
  const selectedIndustry = form.watch("industry");

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.status === false) {
        throw new Error(result.message || "Unable to send your message right now.");
      }

      setSubmitStatus("success");
      form.reset();
      toast({ title: "Message sent!", description: "We'll be in touch within 24 hours." });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Please check your network and try again.";

      setSubmitStatus("error");
      toast({ title: "Message not sent", description: message, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#110b17] pt-0">

      {/* ── HERO ── */}
      <section className="relative pt-48 pb-24 md:pt-60 md:pb-32 overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img src={hqImage} alt="Background" className="w-full h-full object-cover opacity-10 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#110b17]/80 via-[#110b17]/60 to-[#110b17]" />
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6"
          >
            Let's <span className="text-primary">Talk</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-bold text-white/80 max-w-3xl mx-auto mb-10"
          >
            Have a project in mind? Want to grow your digital presence? Send us a message
            and our team will respond within 24 hours.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {["Fast 24-hr response", "Free consultation", "No commitment needed"].map((tag, i) => (
              <span
                key={i}
                className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold uppercase tracking-wider text-sm flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-secondary" /> {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT CARDS ── */}
      <section className="py-12 relative z-10 -mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Phone className="w-8 h-8 text-primary" />,
                bg: "bg-primary/20",
                title: "Phone",
                line1: "+1 (800) 123-4567",
                line2: "Mon–Fri 9am–6pm EST",
                action: { label: "Call Now", href: "tel:+917986306280", variant: "primary" },
              },
              {
                icon: <Mail className="w-8 h-8 text-secondary" />,
                bg: "bg-secondary/20",
                title: "Email",
                line1: CONTACT_EMAIL,
                line2: "Online support 24/7",
                action: { label: "Email Us", href: GMAIL_COMPOSE_URL, variant: "secondary", external: true },
              },
              {
                icon: <MapPin className="w-8 h-8 text-accent" />,
                bg: "bg-accent/20",
                title: "Office",
                line1: "Digital-First Agency",
                line2: "Remote & Nationwide",
                action: { label: "Get Directions", href: "#location", variant: "outline" },
              },
              {
                icon: <Clock className="w-8 h-8 text-blue-400" />,
                bg: "bg-blue-500/20",
                title: "Hours",
                hours: true,
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 flex flex-col items-center text-center group hover:bg-white/10 transition-colors"
              >
                <div className={`w-16 h-16 rounded-full ${card.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-widest mb-3">{card.title}</h3>

                {card.hours ? (
                  <ul className="space-y-2 text-white/80 font-bold text-sm w-full">
                    <li className="flex justify-between border-b border-white/10 pb-2">
                      <span>Mon–Fri</span><span>9am–6pm</span>
                    </li>
                    <li className="flex justify-between border-b border-white/10 pb-2">
                      <span>Saturday</span><span>10am–3pm</span>
                    </li>
                    <li className="flex justify-between text-white/40">
                      <span>Sunday</span><span>Closed</span>
                    </li>
                  </ul>
                ) : (
                  <>
                    <p className="text-white/80 font-bold mb-1">{card.line1}</p>
                    <p className="text-white/50 text-sm mb-6">{card.line2}</p>
                    {card.action && (
                      <Button
                        asChild
                        className={`mt-auto rounded-full font-black uppercase tracking-widest ${
                          card.action.variant === "primary"
                            ? "bg-primary hover:bg-primary/80 text-white"
                            : card.action.variant === "secondary"
                            ? "bg-secondary hover:bg-secondary/80 text-white"
                            : "border border-white/20 bg-transparent text-white hover:bg-white/10"
                        }`}
                      >
                        <a
                          href={card.action.href}
                          target={card.action.external ? "_blank" : undefined}
                          rel={card.action.external ? "noreferrer" : undefined}
                        >
                          {card.action.label}
                        </a>
                      </Button>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ── */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Main Form */}
            <div className="lg:w-2/3">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-visible">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

                <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 relative z-10">
                  Send a <span className="text-primary">Message</span>
                </h2>

                {submitStatus === "success" && (
                  <div className="mb-8 p-6 bg-green-500/20 border border-green-500/30 rounded-2xl flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-green-400 font-black uppercase tracking-widest mb-1">Message Received!</h4>
                      <p className="text-white/80 font-bold">Our team will reach out within 24 hours.</p>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-8 p-6 bg-red-500/20 border border-red-500/30 rounded-2xl flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-red-400 font-black uppercase tracking-widest mb-1">Something Went Wrong</h4>
                      <p className="text-white/80 font-bold">Please check your network and try again.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                  {/* Name Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-black text-white uppercase tracking-widest ml-2">First Name *</label>
                      <Input
                        {...form.register("firstName")}
                        className={`h-14 rounded-2xl bg-black/40 border-white/10 text-white focus-visible:ring-primary ${form.formState.errors.firstName ? "border-red-500" : ""}`}
                      />
                      {form.formState.errors.firstName && (
                        <span className="text-red-400 text-xs font-bold ml-2">{form.formState.errors.firstName.message}</span>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-black text-white uppercase tracking-widest ml-2">Last Name *</label>
                      <Input
                        {...form.register("lastName")}
                        className={`h-14 rounded-2xl bg-black/40 border-white/10 text-white focus-visible:ring-primary ${form.formState.errors.lastName ? "border-red-500" : ""}`}
                      />
                      {form.formState.errors.lastName && (
                        <span className="text-red-400 text-xs font-bold ml-2">{form.formState.errors.lastName.message}</span>
                      )}
                    </div>
                  </div>

                  {/* Company + Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-black text-white uppercase tracking-widest ml-2">Company Name</label>
                      <Input
                        {...form.register("company")}
                        className="h-14 rounded-2xl bg-black/40 border-white/10 text-white focus-visible:ring-primary"
                        placeholder="Optional"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-black text-white uppercase tracking-widest ml-2">Phone</label>
                      <Input
                        {...form.register("phone")}
                        className="h-14 rounded-2xl bg-black/40 border-white/10 text-white focus-visible:ring-primary"
                        placeholder="Optional"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-black text-white uppercase tracking-widest ml-2">Email Address *</label>
                    <Input
                      type="email"
                      {...form.register("email")}
                      className={`h-14 rounded-2xl bg-black/40 border-white/10 text-white focus-visible:ring-primary ${form.formState.errors.email ? "border-red-500" : ""}`}
                    />
                    {form.formState.errors.email && (
                      <span className="text-red-400 text-xs font-bold ml-2">{form.formState.errors.email.message}</span>
                    )}
                  </div>

                  {/* Service + Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ThemedSelect
                      label="Service Needed *"
                      value={selectedService}
                      placeholder="Select a service..."
                      options={services}
                      error={form.formState.errors.service?.message}
                      onChange={(value) => form.setValue("service", value, { shouldDirty: true, shouldValidate: true })}
                    />

                    <ThemedSelect
                      label="Budget Range *"
                      value={selectedBudget}
                      placeholder="Select a range..."
                      options={budgetRanges}
                      error={form.formState.errors.budget?.message}
                      onChange={(value) => form.setValue("budget", value, { shouldDirty: true, shouldValidate: true })}
                    />
                  </div>

                  {/* Industry */}
                  <ThemedSelect
                    label="Industry *"
                    value={selectedIndustry}
                    placeholder="Select your industry..."
                    options={industries}
                    error={form.formState.errors.industry?.message}
                    onChange={(value) => form.setValue("industry", value, { shouldDirty: true, shouldValidate: true })}
                  />

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-black text-white uppercase tracking-widest ml-2">Message *</label>
                    <textarea
                      {...form.register("message")}
                      placeholder="Tell us about your project, goals, and timeline..."
                      rows={5}
                      className={`w-full rounded-3xl bg-black/40 border text-white focus:outline-none focus:ring-2 focus:ring-primary p-6 resize-none text-base font-medium ${form.formState.errors.message ? "border-red-500" : "border-white/10"}`}
                    />
                    {form.formState.errors.message && (
                      <span className="text-red-400 text-xs font-bold ml-2">{form.formState.errors.message.message}</span>
                    )}
                  </div>

                  {/* Consent */}
                  <div className="space-y-2 pt-2">
                    <label className="flex items-start gap-4 cursor-pointer group">
                      <input
                        type="checkbox"
                        {...form.register("consent")}
                        className="mt-1 w-6 h-6 rounded bg-black border-white/20 text-primary focus:ring-primary focus:ring-offset-black shrink-0"
                      />
                      <span className="text-white/80 font-bold text-sm leading-relaxed group-hover:text-white transition-colors">
                        I agree to be contacted by the Shaantik team regarding my inquiry. *
                      </span>
                    </label>
                    {form.formState.errors.consent && (
                      <span className="text-red-400 text-xs font-bold ml-10 block">{form.formState.errors.consent.message}</span>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-16 rounded-full text-xl font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(var(--primary),0.4)] hover:scale-[1.02] transition-all mt-4"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="mr-2 h-6 w-6 animate-spin" /> Sending...</>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-40 bg-primary border border-white/10 rounded-[3rem] p-8 shadow-[0_0_40px_rgba(var(--primary),0.3)] text-white">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <AlertCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-widest mb-6">Before You Send</h3>

                <div className="space-y-6 mb-10">
                  {[
                    "The more detail you share, the faster we can match you with the right solution.",
                    "If you have a deadline or launch date, mention it — we'll work backwards from there.",
                    "Not sure which service you need? Select 'Not Sure' and we'll guide you.",
                  ].map((tip, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-white mt-2 shrink-0" />
                      <p className="font-bold text-white/90">{tip}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-black/20 rounded-2xl p-6 border border-white/10">
                  <h4 className="font-black uppercase tracking-widest mb-4">What to Include</h4>
                  <ul className="space-y-4">
                    {[
                      "Your goals & vision",
                      "Target audience details",
                      "Preferred timeline",
                      "Reference sites or brands you admire",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-bold text-white/80">
                        <CheckCircle2 className="w-5 h-5 text-white/50" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-black/40 border-y border-white/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
              Frequently Asked <span className="text-secondary">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full p-6 flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-expanded={openFaqIndex === index}
                >
                  <span className="text-lg font-black text-white uppercase tracking-wide pr-8">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-white/50" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-white/70 font-bold leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
