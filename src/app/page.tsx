"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Truck,
  BarChart3,
  Clock,
  ShieldCheck,
  PhoneCall
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Logistic Dispatch Center"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-transparent to-transparent opacity-80" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Maximize Your Miles with <span className="text-primary">AXE Dispatch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
              Premium dispatch services designed for owner-operators and small fleets. We find the high-paying loads, handle the paperwork, and keep you moving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105"
              >
                Get Started Now <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all"
              >
                Our Services
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8 border-l-4 border-primary pl-6 py-2">
              <div>
                <p className="text-3xl font-bold text-white">98%</p>
                <p className="text-gray-400 text-sm italic">Broker Credit Approval</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-gray-400 text-sm italic">Driver Support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-accent/30 dark:bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-accent-foreground text-4xl md:text-5xl font-bold mb-4">Comprehensive Solutions</h2>
            <p className="text-gray-500 text-lg">We manage the logistics while you focus on the road. Our goal is to streamline your business for maximum profitability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-secondary/40 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:-translate-y-2 transition-all group"
              >
                <div className="mb-6 p-4 rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle2 size={16} className="text-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1519003722824-192d9978736b?auto=format&fit=crop&q=80&w=800"
                  alt="Truck on road"
                  width={800}
                  height={600}
                  className="w-full aspect-video object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0" />
              <div className="absolute top-10 left-10 bg-primary text-white p-6 rounded-2xl shadow-xl z-20">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm">Years of Market Experience</p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Advantage</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Professional Carriers Choose <span className="text-primary">AXE</span></h2>

              <div className="space-y-8">
                {advantages.map((adv, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary">
                      {adv.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{adv.title}</h4>
                      <p className="text-gray-500">{adv.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-wrap gap-8 items-center border-t border-gray-100 dark:border-gray-800 pt-12">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white dark:border-secondary bg-gray-200" />
                  ))}
                </div>
                <p className="text-gray-500 font-medium italic">Join 200+ active carriers finding success with us.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials or Stats - Simple Call to Action */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">Ready to Scale Your Fleet?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Join a network of professional carriers who are earning more every week with our specialized dispatch experts.
          </p>
          <div className="flex flex-center justify-center gap-6">
            <Link
              href="tel:+13079982087"
              className="bg-secondary text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center gap-3 hover:bg-black transition-all shadow-2xl"
            >
              <PhoneCall size={24} />
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: <BarChart3 size={32} />,
    title: "High-Pay Load Matching",
    description: "Our dispatchers use advanced data tools to find the highest-paying loads in the market, ensuring your revenue per mile is optimized.",
    points: ["National Loadboard Access", "Carrier Direct-to-Broker", "Negotiation Specialists"]
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Broker Credit Checks",
    description: "Dont risk your business. We perform rigorous credit checks on all brokers before you even think about picking up a load. Safety first.",
    points: ["Instant Credit Scores", "Payment History Review", "Financial Stability Reports"]
  },
  {
    icon: <Clock size={32} />,
    title: "24/7 Operations Support",
    description: "The road never sleeps, and neither do we. Whether it's a breakdown at 3 AM or a difficult receiver, we're here to solve it.",
    points: ["Always Available", "Emergency Assistance", "Driver Advocacy"]
  },
  {
    icon: <Truck size={32} />,
    title: "Route Optimization",
    description: "Save on fuel and time. We plan the most efficient routes taking into account traffic, construction, and weather conditions.",
    points: ["Weather Integration", "Fuel Stop Planning", "Turn-by-turn Efficiency"]
  },
  {
    icon: <CheckCircle2 size={32} />,
    title: "Paperwork & Billing",
    description: "Forget the administrative headache. We handle all invoices, bills of lading, and insurance certificates for you.",
    points: ["Fast Billing Cycle", "Insurance Verification", "Compliance Management"]
  }
];

const advantages = [
  {
    icon: <CheckCircle2 />,
    title: "Transparent Pricing",
    description: "No hidden fees. We work on a flat percentage or fixed fee basis, so you know exactly what you're paying for."
  },
  {
    icon: <CheckCircle2 />,
    title: "No Long-Term Contracts",
    description: "Our service speaks for itself. We don't lock you into long-term commitments. Use us when you need us."
  },
  {
    icon: <CheckCircle2 />,
    title: "Personalized Support",
    description: "You're not just a truck number. We assign dedicated dispatchers who understand your preferences and equipment."
  }
];
