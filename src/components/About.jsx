import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Wrench, Truck, UserCheck, Settings, Factory, Shield } from 'lucide-react';

export const About = () => {
  const features = [
    { icon: <ShieldCheck size={32} className="text-accent" />, title: "Reliable Supplier", desc: "A world-class supplier of high quality range of used, fresh and new heavy construction & mining equipment." },
    { icon: <UserCheck size={32} className="text-accent" />, title: "Contractor Status", desc: "Authorized contractor for machine hiring and professional technical management." },
    { icon: <Factory size={32} className="text-accent" />, title: "Nearby Workshop", desc: "Well-equipped workshop nearby JNPT port for repair, maintenance, and unit care before export." },
    { icon: <Truck size={32} className="text-accent" />, title: "Logistic Force", desc: "Own Freight Forwarding & Custom clearance with a worldwide agency network to reduce costs and ensure safety." },
    { icon: <Shield size={32} className="text-accent" />, title: "Support Force", desc: "A team of qualified engineers and professional technical staff available to maintain after sales service." },
    { icon: <Settings size={32} className="text-accent" />, title: "Spare Division", desc: "Wholesale and retail supply of original spare parts ensures durability and long machine life." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <section id="about" className="section-padding bg-bg-alt relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 max-w-2xl"
        >
          <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px]">Company Legacy</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-4 uppercase text-primary mb-6">WHY <span className="text-accent">Elite Global Earthmover?</span></h2>
          <p className="text-dark/60 font-medium">We are proud ISO 9001:2008 certified company. We strictly adhere to stringent quality policies and practices to satisfy our customers globally.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-stretch ">
          {/* Main Copy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-10"
          >
            <div className="space-y-12">
              <h3 className="text-2xl md:text-3xl font-black text-primary leading-tight uppercase">
                Quality and safety <span className="text-accent">tested</span> before every departure.
              </h3>
              <p className="text-dark/70 leading-relaxed text-lg">
                A team of qualified engineers and trained technical staff is available to care for each unit before it is exported to other countries. All equipment is properly washed and tested before leaving our workshop.
              </p>
              <div className="text-dark/70 leading-relaxed text-lg italic border-l-4 border-accent pl-6 bg-accent/5 py-4">
                "If needed, or as per the specific requirements of our clients, sold units are repaired or refurbished before entering the CFS for export."
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-white rounded-2xl shadow-sm border border-border">
                <span className="text-3xl font-black text-primary">ISO</span>
                <p className="text-[10px] uppercase font-bold tracking-widest text-dark/40 mt-1">9001:2008 Certified</p>
              </div>
              <div className="p-8 bg-white rounded-2xl shadow-sm border border-border">
                <span className="text-3xl font-black text-primary">10+</span>
                <p className="text-[10px] uppercase font-bold tracking-widest text-dark/40 mt-1">Global Agencies</p>
              </div>
            </div>
          </motion.div>

          {/* Feature Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="px-8 py-4 bg-white border border-border hover:border-accent transition-all group rounded-2xl hover:shadow-xl duration-500"
              >
                <div className="mb-6 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold mb-3 uppercase text-primary tracking-wide">{item.title}</h4>
                <p className="text-dark/50 text-xs leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
