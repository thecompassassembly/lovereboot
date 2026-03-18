"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Heart,
  Camera,
  Coffee,
  Sparkles,
} from "lucide-react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-05-27T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto px-4 md:px-0">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="glass-dark border border-white/10 text-white p-6 md:p-8 rounded-2xl shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="text-4xl md:text-6xl font-black mb-1 overflow-hidden h-14 md:h-20 flex items-center justify-center">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={item.value}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {item.value.toString().padStart(2, "0")}
                </motion.span>
              </AnimatePresence>
            </div>
            <div className="text-xs md:text-sm uppercase tracking-[0.2em] font-medium text-accent-400">
              {item.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-surface-950 text-white font-sans selection:bg-brand-500/30 selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-500">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 glass px-4 py-2 rounded-full"
        >
          <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center overflow-hidden">
            <Image
              src="/logo.jpeg"
              height={32}
              width={32}
              alt="Logo"
              className="object-cover"
            />
          </div>
          <span className="text-lg font-bold tracking-tighter text-white uppercase italic">
            Love Reboot
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link
            href="https://forms.gle/kk6wvn2nE6N19zRPA"
            className="group relative px-6 py-2.5 bg-brand-600 rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-900/20"
          >
            <span className="relative z-10">Secure Your Slot</span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0"
          >
            <Image
              src="https://thegardencamp.notore.com/wp-content/uploads/2025/01/ext8-1-1.jpg"
              alt="Bonny Island Getaway"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-surface-950/20 via-transparent to-surface-950" />
        </div>

        <div className="relative z-20 text-center px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ letterSpacing: "0.2em", opacity: 0 }}
              animate={{ letterSpacing: "0.4em", opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="inline-block py-2 px-6 rounded-full glass-dark text-accent-400 border border-accent-500/20 text-xs md:text-sm font-bold uppercase mb-8 backdrop-blur-xl"
            >
              Wisdom Driven Marriage Academy, Presents
            </motion.span>

            <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
              Love{" "}
              <span className="text-brand-500 drop-shadow-[0_0_15px_rgba(153,0,0,0.5)]">
                Reboot
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-zinc-300 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
              Join{" "}
              <span className="text-accent-400 font-bold border-b-2 border-accent-500/30">
                Dr. Wisdom and Favour Osiri
              </span>{" "}
              for a transformative 3-night, 4-day Couples Getaway in the heart
              of Bonny Island.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto glass-dark border border-accent-500/30 text-accent-100 px-12 py-5 rounded-full text-xl font-black uppercase tracking-widest hover:bg-accent-500/10 transition-all shadow-2xl relative group overflow-hidden"
              >
                <Sparkles className="absolute -left-4 -top-4 w-12 h-12 text-accent-500/20 group-hover:rotate-12 transition-transform" />
                Registration Now
              </motion.button>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Link
                  href="https://forms.gle/kk6wvn2nE6N19zRPA"
                  className="group relative px-6 py-2.5 bg-yellow-600 rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-900/20"
                >
                  <span className="relative z-10"> Explore The Experience</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <Countdown />
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ height: ["20%", "60%", "20%"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 bg-white/40 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* About the Getaway Section */}
      <section id="about" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 blur-[120px] rounded-full" />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter uppercase">
              The <span className="text-accent-400">Experience</span>
            </h2>
          </motion.div>

          <p className="text-xl md:text-2xl text-zinc-400 mb-20 leading-relaxed max-w-4xl mx-auto font-light">
            An escape to an unforgettable 3-night, 4-day Love Reboot Couples
            Getaway, where intentional conversations, joyful moments, and
            transformative learning meet comfort and luxury. Designed
            exclusively for married couples.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                label: "Bonny Island",
                sub: "Enjoy the beautiful landscape and serene environment",
                icon: <MapPin className="w-8 h-8 text-white" />,
              },
              {
                label: "27th - 30th May 2026",
                sub: "Save the date for this life-changing encounter",
                icon: <Calendar className="w-8 h-8 text-white" />,
              },
              {
                label: "3 Nights, 4 Days",
                sub: "Complete immersion in luxury and bonding",
                icon: <Clock className="w-8 h-8 text-white" />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 glass-dark border border-white/5 rounded-[40px] flex flex-col items-center group hover:border-brand-500/30 transition-all duration-500"
              >
                <div className="w-20 h-20 bg-brand-600 rounded-2xl flex items-center justify-center mb-8 shadow-2xl shadow-brand-950/50 group-hover:rotate-6 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight uppercase">
                  {item.label}
                </h3>
                <p className="text-zinc-500 leading-relaxed">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Everything You Need Section */}
      <section className="py-32 px-6 bg-surface-900/50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter uppercase">
              The <span className="text-brand-500">Package</span>
            </h2>
            <div className="inline-block glass-dark border border-brand-500/20 px-8 py-4 rounded-2xl mb-8">
              <p className="text-brand-400 font-black text-3xl md:text-5xl tracking-tighter">
                INVESTMENT: ₦600,000
              </p>
              <p className="text-zinc-500 text-sm mt-2 uppercase tracking-widest font-bold">
                * Payments can be made in two installments
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mt-12 bg-surface-950/50 p-6 rounded-[32px] border border-white/5 font-bold">
              {[
                {
                  icon: <Users className="w-5 h-5 text-brand-400" />,
                  label: "3 Nights Stay",
                },
                {
                  icon: <Coffee className="w-5 h-5 text-brand-400" />,
                  label: "Full-course Meals",
                },
                {
                  icon: <Sparkles className="w-5 h-5 text-brand-400" />,
                  label: "Coaching",
                },
                {
                  icon: <MapPin className="w-5 h-5 text-brand-400" />,
                  label: "Excursions",
                },
                {
                  icon: <Heart className="w-5 h-5 text-brand-400" />,
                  label: "T-Shirts",
                },
                {
                  icon: <Sparkles className="w-5 h-5 text-brand-400" />,
                  label: "Gift Packs",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center gap-2 text-xs md:text-sm text-zinc-400"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Curated Adventure Experience",
                icon: <MapPin className="w-6 h-6" />,
                img: "https://i.pinimg.com/736x/8f/0b/3e/8f0b3e58be6f8efea69957c82d89277f.jpg",
              },
              {
                title: "The Connection Cruise",
                icon: <Users className="w-6 h-6" />,
                img: "/adventure_thailand_atv.png",
              },
              {
                title: "Fitness & Wellness Time",
                icon: <Heart className="w-6 h-6" />,
                img: "https://i.pinimg.com/736x/61/9e/a5/619ea589f2ac6a7940a8abc83ad2d0d0.jpg",
              },
              {
                title: "Interactive Couple Games",
                icon: <Sparkles className="w-6 h-6" />,
                img: "https://i.pinimg.com/736x/c5/72/91/c57291e615dfa7915f6be716c307283c.jpg",
              },
              {
                title: "Poolside Relaxation",
                icon: <Coffee className="w-6 h-6" />,
                img: "https://i.pinimg.com/736x/dc/1e/cf/dc1ecf2bc6949394db2939b1221fb735.jpg",
              },
              {
                title: "All White Beach Party",
                icon: <Users className="w-6 h-6" />,
                img: "https://i.pinimg.com/1200x/90/2f/7d/902f7d26aa6fef3c44039f78c1483c05.jpg",
              },
              {
                title: "African Gala Night",
                icon: <Users className="w-6 h-6" />,
                img: "https://i.pinimg.com/736x/98/e9/2d/98e92d83dc304f35b5cc51a29ffaac37.jpg",
              },
              {
                title: "Marriage Deep-Dive",
                icon: <Heart className="w-6 h-6" />,
                img: "https://i.pinimg.com/736x/c5/72/91/c57291e615dfa7915f6be716c307283c.jpg",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative h-96 rounded-[40px] overflow-hidden group shadow-2xl"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface-950 via-surface-950/20 to-transparent group-hover:via-brand-950/40 transition-all duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-accent-400 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black tracking-tighter uppercase leading-none group-hover:text-accent-400 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="text-accent-400 font-black text-xl mb-4 uppercase tracking-[0.3em]">
              Real Stories
            </p>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase">
              Don&lsquo;t just take our{" "}
              <span className="text-brand-500">word</span>
            </h2>
            <p className="text-zinc-500 font-bold mt-4 uppercase tracking-widest text-sm">
              Testimonies from previous Love Reboot sessions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                name: "Mr&Mrs Uju",
                text: "Love reboot has been an amazing experience for us as we look forward to time away from the hustle and bustle !!! One of Our most enjoyed sessions was the honest survey/questionnaire on intimacy as a couple and truly that helped us understand how deliberate we need to be about our intimacy away from the busy-ness of life!!",
                img: "/test1.jpeg",
              },
              {
                name: "James Washington",
                text: "The sessions with Dr. Wisdom were life-changing. We left feeling refreshed and equipped with new tools for our marriage journey.",
                img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-8 p-10 glass-dark border border-white/5 rounded-[40px] text-left group hover:border-brand-500/20 transition-all duration-500"
              >
                <div className="relative w-40 h-40 shrink-0">
                  <div className="absolute inset-0 bg-brand-500 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform" />
                  <Image
                    className="relative z-10 w-full h-full rounded-3xl object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    src={testimonial.img}
                    alt={testimonial.name}
                    width={160}
                    height={160}
                  />
                </div>
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Sparkles
                        key={i}
                        className="w-5 h-5 text-accent-500 fill-accent-500"
                      />
                    ))}
                  </div>
                  <p className="text-zinc-300 text-lg md:text-xl font-medium leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <p className="text-accent-400 font-black tracking-tight uppercase text-lg">
                    {testimonial.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero-like CTA Section */}
      <section
        id="book"
        className="relative py-48 px-6 text-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/reconnection_cruise.png"
            alt="Love Reboot"
            fill
            className="object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-linear-to-b from-surface-950 via-transparent to-surface-950" />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-9xl font-black mb-8 tracking-tighter uppercase leading-[0.85]">
              Transform your <br />
              <span className="text-brand-500 drop-shadow-[0_0_20px_rgba(153,0,0,0.6)]">
                Relationship
              </span>
            </h2>
            <p className="text-xl md:text-3xl mb-16 font-medium text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              Limited spots available for this exclusive experience. Reserve
              your place today.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link
                href="https://wa.me/2347033196465"
                target="_blank"
                className="w-full md:w-auto bg-green-500 text-white px-12 py-6 rounded-full text-2xl font-black hover:bg-green-500 transition-all transform hover:scale-105 shadow-2xl shadow-brand-900/40 uppercase tracking-tighter flex items-center justify-center gap-3"
              >
                WhatsApp Us
              </Link>
              <Link
                href="https://forms.gle/kk6wvn2nE6N19zRPA"
                target="_blank"
                className="w-full md:w-auto glass border border-white/20 text-white px-12 py-6 rounded-full text-2xl font-black hover:bg-white/10 transition-all transform hover:scale-105 uppercase tracking-tighter"
              >
                Register Now
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-24 p-10 glass-dark border border-white/5 rounded-[40px] text-zinc-400 max-w-3xl mx-auto"
            >
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-12 h-px bg-brand-500/30" />
                <Camera className="w-6 h-6 text-brand-500" />
                <div className="w-12 h-px bg-brand-500/30" />
              </div>
              <p className="text-lg md:text-xl font-bold text-white mb-6 uppercase tracking-tight">
                Payment Details
              </p>
              <p className="mb-2 text-zinc-300">
                Wisdom Driven Marriage Service
              </p>
              <p className="text-2xl font-black text-accent-400 mb-6 tracking-tighter">
                UBA • 1023892797
              </p>
              <p className="text-sm opacity-60 uppercase tracking-widest leading-loose">
                WhatsApp: 07033196465 <br />
                Email: thewisdomdrivenmarriageacademy@gmail.com
              </p>
              <div className="mt-10 pt-10 border-t border-white/5">
                <p className="opacity-40 text-xs font-bold uppercase tracking-[0.5em]">
                  ©2026 LOVE REBOOT • BONNY ISLAND • ALL RIGHTS RESERVED
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
