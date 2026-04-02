
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { ShieldCheck, Award, Wrench, Truck, UserCheck, Settings, Factory, Shield } from 'lucide-react';
import { ShoppingCart, Calendar, Globe } from 'lucide-react';
import { ArrowUpRight, CheckCircle, Package } from 'lucide-react';

export const Hero = () => {

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



  const [activeBrand, setActiveBrand] = useState('ALL');
  
    const brands = [
      { name: 'ALL', count: 18 },
      { name: 'VOLVO', count: 6 },
      { name: 'HYUNDAI', count: 5 },
      { name: 'TATA HITACHI', count: 7 },
    ];
  
    const products = [
      { brand: 'VOLVO', models: 'EX 750, 480, 460, 210, 300, 140', image: '/volvo.png' },
      { brand: 'HYUNDAI', models: '340, 230, 220, 215, 210', image: '/hyundai.png' },
      { brand: 'TATA HITACHI', models: 'ZAXIS 470, 370, 220, 140, 70', image: '/hitachi.png' },
    ];
  
    const filteredProducts = activeBrand === 'ALL' 
      ? products 
      : products.filter(p => p.brand === activeBrand);
  



  return (
    <>
    {/* ==================== HERO SECTION ==================== */}
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
               <span className="text-accent font-bold uppercase tracking-[.4em] text-[9px] lg:text-[10px]">Trusted Equipment Brand</span>
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
             {["World wide Exporter", "Trusted Brand", "Ready Inventory"].map((item) => (
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


    {/* ==================== ABOUT SECTION ==================== */}
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



        {/* ==================== SERVICES SECTION ==================== */}
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




    {/* ==================== PRODUCT SECTION ==================== */}
    <section id="products" className="section-padding bg-bg-alt overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-20 space-y-6"
        >
          <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px]">Industrial Inventory</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-primary tracking-tighter">PREMIUM <span className="text-accent">EQUIPMENT</span></h2>
          <p className="max-w-xl text-dark/60 font-medium">Explore our current stock of heavy earthmovers and machinery from the world's leading brands.</p>
        </motion.div>

        {/* Brand Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {brands.map(brand => (
            <button 
              key={brand.name} 
              onClick={() => setActiveBrand(brand.name)}
              className={`px-8 py-3 rounded-full font-bold text-[11px] uppercase tracking-widest transition-all border ${activeBrand === brand.name ? 'bg-primary border-primary text-white shadow-xl' : 'bg-white border-border hover:border-accent text-dark/50'}`}
            >
              {brand.name} <span className={`ml-2 ${activeBrand === brand.name ? 'text-accent' : 'text-dark/20'}`}>{brand.count}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div 
                key={product.brand} 
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group white-card flex flex-col items-center"
              >
                {/* Image Container with SIMPLE scale on hover */}
                <div className="relative w-full h-[400px] overflow-hidden bg-white">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    src={product.image} 
                    alt={product.brand} 
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute top-6 left-6">
                     <div className="px-5 py-2 bg-white/90 backdrop-blur-md rounded-lg shadow-sm">
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary">Certified Unit</span>
                     </div>
                  </div>

                  <div className="absolute bottom-6 left-6 flex flex-col gap-1">
                     <span className="text-2xl font-black uppercase tracking-tighter text-white drop-shadow-lg">{product.brand}</span>
                  </div>
                </div>

                {/* Sub-Info Area */}
                <div className="p-8 text-center w-full">
                   <h3 className="text-lg font-black text-primary uppercase tracking-widest mb-6">
                      {product.models}
                   </h3>
                   
                   <div className="grid grid-cols-2 gap-4">
                      {["Tested", "Ready"].map(feat => (
                         <div key={feat} className="flex items-center justify-center gap-2 p-3 bg-bg-alt border border-border rounded-xl text-[9px] uppercase font-black text-dark/30 shadow-sm group-hover:border-accent group-hover:text-primary transition-all">
                            <CheckCircle size={10} className="text-accent" />
                            {feat}
                         </div>
                      ))}
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Banner */}
        <div className="mt-24 p-12 bg-primary rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
           <div className="relative z-10 flex flex-col gap-4">
              <h3 className="text-4xl font-black text-white uppercase leading-none tracking-tighter">Looking for <span className="text-accent">Custom</span> models?</h3>
              <p className="text-white/70 font-medium">We source any variety of fresh or used machinery globally to meet your project timelines.</p>
           </div>
           <button 
             className="relative z-10 px-12 py-5 bg-accent text-white font-black uppercase tracking-widest rounded-3xl transition-all flex items-center gap-4 hover:scale-105 shadow-xl"
           >
              Inquire Now
              <ArrowUpRight size={24} />
           </button>
        </div>
      </div>
    </section>

    {/* ==================== CONTACT SECTION ==================== */}
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold tracking-wide">
            GET IN <span className="text-accent">TOUCH</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-3 rounded"></div>
        </div>

        {/* Form */}
        <form className="space-y-6">
          
          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 rounded-lg border border-gray-300 
            bg-gradient-to-b from-gray-100 to-gray-200 
            shadow-inner focus:outline-none focus:ring-2 focus:ring-accent"
          />

          {/* Subject */}
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-4 rounded-lg border border-gray-300 
            bg-gradient-to-b from-gray-100 to-gray-200 
            shadow-inner focus:outline-none focus:ring-2 focus:ring-accent"
          />

          {/* Email + Phone */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-lg border border-gray-300 
              bg-gradient-to-b from-gray-100 to-gray-200 
              shadow-inner focus:outline-none focus:ring-2 focus:ring-accent"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-4 rounded-lg border border-gray-300 
              bg-gradient-to-b from-gray-100 to-gray-200 
              shadow-inner focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Message */}
          <textarea
            rows="6"
            placeholder="Message"
            className="w-full p-4 rounded-lg border border-gray-300 
            bg-gradient-to-b from-gray-100 to-gray-200 
            shadow-inner focus:outline-none focus:ring-2 focus:ring-accent"
          ></textarea>

          {/* Captcha + Button */}
          <div className="flex flex-col md:flex-row items-center justify-end gap-4">
            
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">1 + 6 =</span>
              <input
                type="text"
                className="w-14 h-12 text-center rounded-md border border-gray-300 
                bg-gradient-to-b from-gray-100 to-gray-200 shadow-inner"
              />
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-accent to-accent/40 
              text-white font-semibold px-8 py-3 rounded-full 
              shadow-lg hover:scale-105 transition duration-300"
            >
              SEND MESSAGE
            </button>
          </div>

        </form>
      </div>
    </section>
    


    </>

    
  );
};
