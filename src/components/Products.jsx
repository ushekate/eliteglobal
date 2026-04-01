import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle } from 'lucide-react';

export const Products = () => {
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
    <div className="bg-white pt-30">  

      {/* Products Hero Banner */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center bg-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero.png"   
            alt="Premium Heavy Equipment" 
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-24">
          <div className="flex items-center gap-4">
            <div className="w-3 h-10 bg-yellow-500" />
            <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-none">
              PREMIUM<br />EQUIPMENT
            </h1>
          </div>
          <p className="mt-6 text-xl text-white/80 max-w-lg">
            High-quality heavy earthmoving machinery from world-leading brands
          </p>
        </div>
      </section>

      {/* Main Products Content */}
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-primary tracking-tighter">
              OUR CURRENT STOCK
            </h2>
            <p className="max-w-xl text-dark/60 font-medium">
              Explore our ready-to-deploy heavy earthmovers and machinery from trusted global brands.
            </p>
          </motion.div>

          {/* Brand Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {brands.map(brand => (
              <button 
                key={brand.name} 
                onClick={() => setActiveBrand(brand.name)}
                className={`px-8 py-3 rounded-full font-bold text-[11px] uppercase tracking-widest transition-all border 
                  ${activeBrand === brand.name 
                    ? 'bg-primary border-primary text-white shadow-xl' 
                    : 'bg-white border-border hover:border-accent text-dark/50'}`}
              >
                {brand.name} 
                <span className={`ml-2 ${activeBrand === brand.name ? 'text-accent' : 'text-dark/20'}`}>
                  {brand.count}
                </span>
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
                  {/* Image Container */}
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

                    <div className="absolute bottom-6 left-6">
                      <span className="text-2xl font-black uppercase tracking-tighter text-white drop-shadow-lg">
                        {product.brand}
                      </span>
                    </div>
                  </div>

                  {/* Sub-Info Area */}
                  <div className="p-8 text-center w-full">
                    <h3 className="text-lg font-black text-primary uppercase tracking-widest mb-6">
                      {product.models}
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {["Tested", "Ready"].map(feat => (
                        <div 
                          key={feat} 
                          className="flex items-center justify-center gap-2 p-3 bg-bg-alt border border-border rounded-xl text-[9px] uppercase font-black text-dark/30 shadow-sm group-hover:border-accent group-hover:text-primary transition-all"
                        >
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
              <h3 className="text-4xl font-black text-white uppercase leading-none tracking-tighter">
                Looking for <span className="text-accent">Custom</span> models?
              </h3>
              <p className="text-white/70 font-medium">
                We source any variety of fresh or used machinery globally to meet your project timelines.
              </p>
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
    </div>
  );
};


