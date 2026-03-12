import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Ticket, QrCode, Users, Network, LayoutDashboard } from 'lucide-react';

const features = [
  {
    title: "Event Orchestration",
    desc: "Manage sessions, agendas, rooms, and capacities with precision.",
    icon: Calendar,
    color: "emerald"
  },
  {
    title: "Smart Ticketing",
    desc: "Automated ticketing system with unique QR codes for every participant.",
    icon: Ticket,
    color: "indigo"
  },
  {
    title: "Offline Check-in",
    desc: "Scan QR codes instantly, even without an internet connection.",
    icon: QrCode,
    color: "violet"
  },
  {
    title: "Stakeholder Hub",
    desc: "Dedicated management for speakers, exhibitors, and sponsors.",
    icon: Users,
    color: "indigo"
  },
  {
    title: "Smart Networking",
    desc: "Connect participants through AI-driven networking algorithms.",
    icon: Network,
    color: "violet"
  },
  {
    title: "Real-time Analytics",
    desc: "Monitor your event's pulse with a live back-office dashboard.",
    icon: LayoutDashboard,
    color: "emerald"
  }
];

export const Features = () => {
  const colorMap = {
    emerald: {
      bg: "bg-emerald/10",
      text: "text-emerald",
      border: "hover:border-emerald/30",
      gradient: "radial-gradient(ellipse 55% 45% at 50% 0%, rgba(5,148,103,0.06) 0%, transparent 70%)"
    },
    indigo: {
      bg: "bg-indigo/10",
      text: "text-indigo-light",
      border: "hover:border-indigo/30",
      gradient: "radial-gradient(ellipse 55% 45% at 50% 0%, rgba(99,102,241,0.06) 0%, transparent 70%)"
    },
    violet: {
      bg: "bg-violet/10",
      text: "text-violet-light",
      border: "hover:border-violet/30",
      gradient: "radial-gradient(ellipse 55% 45% at 50% 0%, rgba(139,92,246,0.06) 0%, transparent 70%)"
    }
  };

  return (
    <section id="features" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Powerful <span className="italic text-emerald">Capabilities</span>
        </h2>
        <p className="text-sm text-text-2 max-w-md">
          Everything you need to orchestrate world-class events, 
          from seamless ticketing to real-time analytics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => {
          const colors = colorMap[f.color as keyof typeof colorMap];
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative bg-s1 border border-border rounded-2xl overflow-hidden ${colors.border} transition-all`}
            >
              <div 
                className="p-10 min-h-[280px] flex flex-col relative"
                style={{ background: colors.gradient }}
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <f.icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-text mb-3">{f.title}</h3>
                <p className="text-sm text-text-2 leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
