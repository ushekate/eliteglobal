import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen lg:h-[100vh] lg:min-h-[850px] flex items-center justify-center overflow-hidden bg-white pt-24 pb-12 lg:pt-0 lg:pb-0">
      {/* Background  */}
      <div className="absolute inset-x-0 inset-y-0 z-0">
        <img 
          src="/hero.png" 
          alt="Heavy Machinery" 
          className="w-full h-full object-cover opacity-90 object-center lg:object-right"
        />
        {/* Soft light gradients  */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 lg:via-white/80 to-transparent lg:bg-gradient-to-r" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-6 lg:gap-8"
        >
          <div className="flex flex-col gap-3 lg:gap-4">
            <div className="flex items-center gap-3">
               <span className="w-8 lg:w-10 h-[2px] bg-accent" />
               <span className="text-accent font-bold uppercase tracking-[.4em] text-[9px] lg:text-[10px]">Since 2021 | ISO 9001:2008</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-black leading-[1.1] lg:leading-[1.05] tracking-tight text-primary uppercase">
               Elite Global Earthmover<br />
               <span className="text-accent">EQUIPMENTS</span>
            </h1>
          </div>

          <p className="max-w-xl text-dark/70 text-base md:text-xl leading-relaxed font-medium">
             A dynamic exporter, importer, and supplier of a high-quality range of <span className="text-primary font-bold">used and fresh</span> heavy construction equipment globally.
          </p>

          <div className="flex flex-col gap-3 lg:gap-4">
             {["World wide Exporter", "ISO certified Company", "Ready Inventory"].map((item) => (
               <div key={item} className="flex items-center gap-2 lg:gap-3 text-[10px] lg:text-sm font-bold text-primary/80 uppercase tracking-widest">
                  <CheckCircle2 size={16} className="text-accent" />
                  {item}
               </div>
             ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 lg:gap-6 mt-2 lg:mt-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-8 lg:px-10 py-4 lg:py-5 bg-accent text-white font-bold uppercase tracking-widest rounded-xl hover:bg-primary transition-all shadow-xl flex items-center justify-center gap-3 lg:gap-4 text-xs lg:text-sm">
              Our Inventory
              <ArrowRight size={18} />
            </button>
            <button className="flex-1 md:flex-none px-8 lg:px-10 py-4 lg:py-5 border-2 border-primary/20 text-primary font-bold uppercase tracking-widest rounded-xl hover:border-primary transition-all flex items-center justify-center gap-3 lg:gap-4 text-xs lg:text-sm">
              About Us
            </button>
          </div>
        </motion.div>

       
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative lg:ml-auto lg:translate-x-16"
        >
           <div className="bg-white/50 backdrop-blur-2xl border border-white/60 p-8 lg:p-12 rounded-[30px] lg:rounded-[50px] shadow-2xl relative overflow-hidden group">
              <div className="flex flex-col gap-6 lg:gap-8">
                 <h3 className="text-2xl lg:text-4xl font-black text-primary leading-none uppercase">PREMIUM <br /><span className="text-accent">QUANTITY</span></h3>
                 <p className="text-dark/60 text-xs lg:text-base font-medium leading-relaxed max-w-[280px]">
                   Variety of USED Heavy Construction & mining equipments globally with 100% testing.
                 </p>
                 
                 <div className="flex flex-col gap-3 lg:gap-4">
                    <div className="flex -space-x-3">
                       {[1,2,3,4,5].map(i => (
                         <motion.div 
                           key={i} 
                           whileHover={{ scale: 1.15, zIndex: 50 }}
                           className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-accent border-2 lg:border-4 border-white overflow-hidden shadow-lg transition-all"
                         >
                            <img 
                              src={i % 2 === 0 ? "/volvo.png" : "/hyundai.png"} 
                              className="w-full h-full object-cover" 
                              alt="Machinery"
                            />
                         </motion.div>
                       ))}
                       <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-primary flex items-center justify-center text-white border-2 lg:border-4 border-white shadow-xl z-20">
                          <span className="text-[8px] lg:text-[10px] font-black">+1000</span>
                       </div>
                    </div>
                    <span className="text-[8px] lg:text-[10px] font-black text-accent uppercase tracking-widest">
                      Units Delivered Globally
                    </span>
                 </div>
              </div>
           </div>
        </motion.div>
      </div>

      <div 
        className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/30 cursor-pointer animate-bounce hidden md:flex"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <span className="text-[10px] uppercase font-bold tracking-widest">Scroll</span>
        <ChevronDown size={20} />
      </div>
    </section>
  );
};
