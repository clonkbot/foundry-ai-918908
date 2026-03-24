import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function App() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  const features = [
    {
      title: "Vibe Coding",
      description: "Describe your vision in plain English. Our AI translates your founder energy into production-ready code.",
    },
    {
      title: "Technical Confidence",
      description: "Present to investors with the certainty of someone who definitely knows what a REST API is.",
    },
    {
      title: "Ownership Illusion",
      description: "Every commit has your name on it. Every deploy feels like your triumph. Because it is.",
    },
  ];

  const testimonials = [
    {
      quote: "I told my co-founder I 'built this over the weekend.' Technically true.",
      author: "Sarah K.",
      role: "CEO, Stealth Startup",
    },
    {
      quote: "My investors think I'm a technical genius. I'm just really good at prompting.",
      author: "Marcus R.",
      role: "Founder, Series A",
    },
    {
      quote: "Finally, a tool that understands that 'I coded this' is more of a feeling than a fact.",
      author: "Jordan T.",
      role: "Visionary",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1a1a1a] overflow-x-hidden relative">
      {/* Grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : -20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-40 px-4 md:px-8 py-4 md:py-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="font-serif text-xl md:text-2xl font-bold tracking-tight">
            Foundry<span className="text-[#C9A227]">.</span>ai
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
            <a href="#product" className="hover:text-[#C9A227] transition-colors duration-300">Product</a>
            <a href="#testimonials" className="hover:text-[#C9A227] transition-colors duration-300">Stories</a>
            <a href="#pricing" className="hover:text-[#C9A227] transition-colors duration-300">Pricing</a>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#1a1a1a] text-[#FAF8F5] px-4 md:px-6 py-2 md:py-3 text-sm tracking-wide hover:bg-[#333] transition-colors duration-300"
          >
            Start Building
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="min-h-screen flex flex-col justify-center px-4 md:px-8 pt-24 md:pt-0"
      >
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            custom={0}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            variants={fadeUp}
            className="mb-6 md:mb-8"
          >
            <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 border border-[#1a1a1a]/20 text-xs md:text-sm tracking-[0.2em] uppercase">
              For Visionary Founders
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            variants={fadeUp}
            className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] tracking-tight max-w-6xl"
          >
            You had the
            <span className="block text-[#C9A227]">vision.</span>
            <span className="block">We made it real.</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            variants={fadeUp}
            className="mt-8 md:mt-12 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed text-[#1a1a1a]/70 font-light"
          >
            The AI-powered platform that transforms your entrepreneurial genius into
            production-ready software. No coding required. Full credit deserved.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            variants={fadeUp}
            className="mt-10 md:mt-16 flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: '#333' }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#1a1a1a] text-[#FAF8F5] px-6 md:px-10 py-4 md:py-5 text-sm md:text-base tracking-wide transition-colors duration-300"
            >
              Claim Your Credit
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border border-[#1a1a1a]/30 px-6 md:px-10 py-4 md:py-5 text-sm md:text-base tracking-wide hover:border-[#1a1a1a] transition-colors duration-300"
            >
              Watch Demo
            </motion.button>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            variants={fadeUp}
            className="mt-16 md:mt-24 flex flex-wrap items-center gap-4 md:gap-8 text-xs md:text-sm text-[#1a1a1a]/50"
          >
            <span className="tracking-wider uppercase">Trusted by founders at</span>
            <div className="flex flex-wrap gap-4 md:gap-8 font-serif text-base md:text-lg text-[#1a1a1a]/70">
              <span>Stanford GSB</span>
              <span>Y Combinator</span>
              <span>Stealth</span>
              <span>Pre-Revenue</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section id="product" className="py-20 md:py-32 px-4 md:px-8 bg-[#1a1a1a] text-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 md:mb-24"
          >
            <span className="text-xs md:text-sm tracking-[0.3em] text-[#C9A227] uppercase">The Process</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 md:mt-6 max-w-4xl leading-tight">
              From idea to "I built this" in three steps
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <div className="text-[#C9A227] font-serif text-4xl md:text-5xl mb-4 md:mb-6 group-hover:translate-x-2 transition-transform duration-500">
                  0{i + 1}
                </div>
                <h3 className="font-serif text-xl md:text-2xl mb-3 md:mb-4">{feature.title}</h3>
                <p className="text-[#FAF8F5]/60 leading-relaxed text-sm md:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 border-y border-[#1a1a1a]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "2,847", label: "Founders Empowered" },
              { value: "$340M", label: "Funding Secured" },
              { value: "99.7%", label: "Confidence Level" },
              { value: "0", label: "Lines of Code Written" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#C9A227]">{stat.value}</div>
                <div className="mt-2 text-xs md:text-sm tracking-wider text-[#1a1a1a]/50 uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-24"
          >
            <span className="text-xs md:text-sm tracking-[0.3em] text-[#C9A227] uppercase">Success Stories</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 md:mt-6">
              Real founders. Real confidence.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="bg-[#1a1a1a] text-[#FAF8F5] p-6 md:p-10 group hover:bg-[#252525] transition-colors duration-500"
              >
                <div className="text-[#C9A227] text-4xl md:text-5xl font-serif mb-4 md:mb-6">"</div>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8">{testimonial.quote}</p>
                <div className="border-t border-[#FAF8F5]/10 pt-4 md:pt-6">
                  <div className="font-serif text-lg md:text-xl">{testimonial.author}</div>
                  <div className="text-[#FAF8F5]/50 text-xs md:text-sm mt-1">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="pricing" className="py-20 md:py-32 px-4 md:px-8 bg-[#C9A227] text-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight mb-6 md:mb-8">
              Ready to become technical?
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-10 md:mb-12 text-[#1a1a1a]/70 max-w-2xl mx-auto">
              Join thousands of founders who've discovered that building software
              is really about having the right mindset. And the right AI.
            </p>
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: '#333' }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#1a1a1a] text-[#FAF8F5] px-8 md:px-12 py-4 md:py-6 text-base md:text-lg tracking-wide"
            >
              Start Your Journey — $49/month
            </motion.button>
            <p className="mt-4 md:mt-6 text-xs md:text-sm text-[#1a1a1a]/50">
              Cancel anytime. Credit stays forever.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-20 px-4 md:px-8 bg-[#1a1a1a] text-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 md:mb-16">
            <div className="font-serif text-2xl md:text-3xl">
              Foundry<span className="text-[#C9A227]">.</span>ai
            </div>
            <div className="flex flex-wrap gap-6 md:gap-8 text-sm text-[#FAF8F5]/60">
              <a href="#" className="hover:text-[#C9A227] transition-colors">Product</a>
              <a href="#" className="hover:text-[#C9A227] transition-colors">Pricing</a>
              <a href="#" className="hover:text-[#C9A227] transition-colors">Blog</a>
              <a href="#" className="hover:text-[#C9A227] transition-colors">Careers</a>
              <a href="#" className="hover:text-[#C9A227] transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-[#FAF8F5]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#FAF8F5]/40">
            <span>© 2024 Foundry.ai. All rights reserved.</span>
            <span>Believing is building.™</span>
          </div>

          {/* Attribution Footer */}
          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-[#FAF8F5]/5 text-center">
            <span className="text-[10px] md:text-xs text-[#FAF8F5]/25 tracking-wider">
              Requested by @web-user · Built by @clonkbot
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
