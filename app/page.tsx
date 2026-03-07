"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-[#990000] text-white p-6 md:p-8 rounded-lg shadow-lg"
        >
          <div className="text-4xl md:text-6xl font-bold mb-1">
            {item.value.toString().padStart(2, "0")}
          </div>
          <div className="text-sm uppercase tracking-widest opacity-80">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-purple-100 selection:text-purple-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold tracking-tighter text-purple-900 leading-none">
            WDMA
          </div>
        </div>
        <Link
          href="#"
          className="bg-purple-900 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-800 transition-all shadow-lg shadow-purple-900/10"
        >
          Book Now
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="/bonny_island_resort.png"
            alt="Bonny Island Getaway"
            fill
            className="object-cover scale-105 animate-slow-zoom"
            priority
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl">
          <span className="inline-block py-1 px-4 rounded-full bg-gold-500/20 text-gold-200 border border-gold-500/30 text-sm font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm">
            Wisdom Driven Marriage Academy
          </span>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight uppercase">
            Love <span className="text-gold-400">Reboot</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Join{" "}
            <span className="font-semibold text-white">
              Dr. Wisdom and Favour Osiri
            </span>{" "}
            for an unforgettable 3-night, 4-day Couples Getaway, where
            intentional conversations and luxury meet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold-500 text-purple-950 px-10 py-4 rounded-full text-lg font-bold hover:bg-gold-400 transition-all transform hover:scale-105 shadow-2xl">
              Registration Coming Soon
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all">
              Learn More
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1 text-white">
            ↓
          </div>
        </div>
      </section>

      {/* About the Getaway Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-black tracking-tight">
            About the{" "}
            <span className="text-[#002244] border-b-4 border-[#990000] pb-1">
              Getaway
            </span>
          </h2>
          <p className="text-lg text-zinc-600 mb-12 leading-relaxed max-w-4xl mx-auto">
            It&apos;s an escape to an unforgettable 3-night, 4-day Love Reboot
            Couples Getaway, where intentional conversations, joyful moments,
            and transformative learning meet comfort and luxury. Designed
            exclusively for married couples, this experience offers the perfect
            space to pause, reconnect, and strengthen your bond in a refreshing
            and focused environment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                label: "Bonny Island",
                sub: "Enjoy the beautiful landscape of Bonny",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
              },
              {
                label: "27th - 30th May 2026",
                sub: "From the 27th to the 30th of May 2026",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                ),
              },
              {
                label: "3 Nights, 4 Days",
                sub: "Enjoy 3 nights of luxury and premium enjoyment",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 border border-zinc-100 rounded-3xl bg-white shadow-sm flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-[#990000] rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-red-900/20">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">
                  {item.label}
                </h3>
                <p className="text-zinc-500 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>

          <Countdown />
        </div>
      </section>

      {/* Everything You Need Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-[#002244] tracking-tight">
            Everything You Need for an{" "}
            <span className="relative inline-block">
              Amazing Experience
              <span className="absolute bottom-1 left-0 w-full h-1.5 bg-[#990000] rounded-full"></span>
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "5-Star Resort",
                desc: "3 nights in a luxurious resort with world class amenities",
                img: "/bonny_island_resort.png",
              },
              {
                title: "Fine Dining",
                desc: "Daily Breakfast plus choice of lunch or dinner",
                img: "/luxury_dining_thailand.png",
              },
              {
                title: "Vow Renewals",
                desc: "Romantic Ceremony for Married Couples",
                img: "/vow_renewal_thailand.png",
              },
              {
                title: "Adventurous Excursions",
                desc: "Boat cruises, Nature Walks, Historic Tours & more",
                img: "/adventure_thailand_atv.png",
              },
              {
                title: "Hangouts",
                desc: "Hangouts with Dr. Wisdom and Favour Osiri",
                img: "/reconnection_cruise.png",
              },
              {
                title: "Airport Transfers",
                desc: "Complimentary pickup and drop-off services",
                img: "/phuket_beach_luxury.png",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative h-80 rounded-2xl overflow-hidden group shadow-lg"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white text-center">
                  <h3 className="text-3xl font-bold mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-90 font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staggered Adventure Gallery */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#002244] tracking-tight">
            Exciting{" "}
            <span className="relative inline-block border-2 border-[#990000] rounded-[50%] px-6 py-2 leading-none">
              Adventures
            </span>{" "}
            Await
          </h2>

          <div className="flex flex-wrap md:flex-nowrap gap-4 justify-between items-end">
            {[
              {
                title: "Cruise Sails",
                img: "/reconnection_cruise.png",
                height: "h-64 md:h-80",
              },
              {
                title: "Nature Trails",
                img: "/bonny_island_resort.png",
                height: "h-80 md:h-96",
              },
              {
                title: "Wild Life",
                img: "/adventure_thailand_atv.png",
                height: "h-96 md:h-[30rem]",
              },
              {
                title: "Historic Tours",
                img: "/vow_renewal_thailand.png",
                height: "h-80 md:h-96",
              },
              {
                title: "Local Market",
                img: "/phuket_beach_luxury.png",
                height: "h-64 md:h-80",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex-1 min-w-[200px] relative rounded-t-3xl overflow-hidden group ${item.height} shadow-xl`}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-x-0 bottom-6 px-4 text-white text-center pointer-events-none">
                  <h4 className="text-2xl font-bold tracking-tight">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-48 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src="/reconnection_cruise.png"
            alt="Love Reboot"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-20 max-w-5xl mx-auto text-white">
          <h2 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter">
            Ready to Transform your{" "}
            <span className="text-gold-400">Relationship?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 font-light opacity-90 max-w-2xl mx-auto">
            Limited spots available. Reserve your spot now for an unforgettable
            experience.
          </p>
          <button className="bg-[#990000] text-white px-16 py-6 rounded-full text-2xl font-black hover:bg-red-700 transition-all transform hover:scale-110 shadow-2xl shadow-red-900/40 uppercase tracking-tight mb-12">
            Reserve your Spot
          </button>

          <div className="mt-12 text-sm md:text-base">
            <p className="mb-4">
              Questions? Send us an email at{" "}
              <span className="text-red-400 font-bold border-b-2 border-red-400 pb-1 cursor-pointer">
                info@wdma.org
              </span>
            </p>
            <p className="opacity-60 italic mb-2">
              You can also pay in two installments.
            </p>
            <p className="opacity-60 text-xs mt-8 uppercase tracking-[0.5em]">
              ©2026 LOVE REBOOT • BONNY ISLAND • ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes slow-zoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.15);
          }
        }
        .animate-slow-zoom {
          animation: slow-zoom 30s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}
