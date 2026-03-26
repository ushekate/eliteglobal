import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Calendar, Wrench, Globe, ShieldCheck, Truck } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      title: "Equipment Trading",
      desc: "Wholesale and retail trading of heavy earthmovers and related machinery internationally. We deal with top brands like Volvo, Hyundai, and Tata Hitachi.",
      icon: <ShoppingCart size={32} />
    },
    {
      title: "Supply on Hire",
      desc: "Our rental services provide heavy machinery on a monthly or daily hire basis, supported by our experienced hiring and management team.",
      icon: <Calendar size={32} />
    },
    {
      title: "Original Spare Parts",
      desc: "Comprehensive supply of all machine related spare parts. We ensure availability and original quality for every part we supply globally.",
      icon: <Wrench size={32} />
    }
  ];

  return (
    <section id="services" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px]">What We Do</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-4 uppercase text-primary">OUR <span className="text-accent">SERVICES</span></h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-lg"
          >
             <p className="text-dark/60 text-lg font-medium leading-relaxed italic border-l-4 border-primary/20 pl-8">
               Qualified engineers and trained technical staff provide service support to the highest standards. We have our own fleet to ensure safe and timely transportation throughout India.
             </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-12 bg-bg-alt border border-border hover:bg-white hover:border-accent hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 rounded-[2.5rem] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-0 bg-accent group-hover:h-full transition-all duration-500" />
              
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 text-primary">
                {item.icon}
              </div>

              <h3 className="text-2xl font-black text-primary mb-6 uppercase tracking-tight">{item.title}</h3>
              <p className="text-dark/50 leading-relaxed mb-10 text-sm font-medium">{item.desc}</p>

              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-accent group-hover:gap-5 transition-all">
                Learn More
                <span className="w-8 h-[2px] bg-accent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra Logistics Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-4 gap-4"
        >
           {[
             { label: "Logistics Division", icon: <Truck size={14} /> },
             { label: "Customs Clearance", icon: <ShieldCheck size={14} /> },
             { label: "Lashing & Chocking", icon: <Wrench size={14} /> },
             { label: "Global Partnerships", icon: <Globe size={14} /> }
           ].map((item, i) => (
             <motion.div 
               key={item.label} 
               whileHover={{ scale: 1.05 }}
               className="flex items-center justify-center gap-2 p-4 bg-white border border-border rounded-xl text-[10px] font-bold uppercase tracking-widest text-primary/60 cursor-default"
             >
                {item.icon}
                {item.label}
             </motion.div>
           ))}
        </motion.div>
      </div>
    </section>
  );
};
