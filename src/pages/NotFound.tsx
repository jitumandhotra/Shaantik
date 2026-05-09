import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Home, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#110b17] pt-0">
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 py-48 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(251,113,133,0.18),transparent_32%),radial-gradient(circle_at_75%_35%,rgba(253,186,116,0.16),transparent_30%),linear-gradient(180deg,#110b17_0%,#1b1023_52%,#110b17_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#110b17] to-transparent" />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-white/15 bg-white/10 shadow-2xl shadow-primary/20"
          >
            <SearchX className="h-12 w-12 text-primary" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-primary"
          >
            404 - Page Not Found
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-5xl font-black uppercase leading-[0.95] tracking-normal text-white md:text-7xl lg:text-8xl"
          >
            This Page Is
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Off The Map
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mx-auto mb-10 max-w-2xl text-lg font-bold leading-relaxed text-white/70 md:text-xl"
          >
            The page you opened does not exist or may have moved. Head back home or start a conversation with the Shaantik team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="min-h-14 bg-primary px-7 text-base font-black uppercase tracking-widest text-white hover:bg-primary/90"
            >
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Back Home
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-h-14 border-white/20 bg-white/10 px-7 text-base font-black uppercase tracking-widest text-white hover:bg-white/20"
            >
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
