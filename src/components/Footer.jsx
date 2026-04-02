import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, ArrowRight, Send, ShieldCheck, Globe } from 'lucide-react';
import logo from '../assets/logo.jpeg';

export const Footer = () => {
   return (
      <footer id="contact" className="bg-white border-t-8 border-accent pt-24 pb-12">
         <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid lg:grid-cols-5 gap-12 mb-24">

               {/* Column 1: Brand & Socials */}
               <div className="lg:col-span-2 flex flex-col gap-8">
                  <div className="flex items-center gap-3">
                     <div className="w-24 h-20 bg-white rounded-xl flex items-center justify-center shadow-lg border border-gray-100">
                        <img
                           src={logo}
                           alt="Elite Global Earthmover Logo"
                           className="w-full h-full object-contain"
                        />
                     </div>
                     {/* <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center p-2 shadow-lg">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8 text-white">
                           <path d="M7 21v-4m0-14V3m0 0l-4 4m4-4l4 4M2 17h10M12 17l4-4m-4 4l4 4" />
                        </svg>
                     </div> */}
                     <div className="flex flex-col">
                        <span className="text-3xl font-black text-primary uppercase tracking-tight">Elite Global Earthmover</span>
                        <span className="text-[10px] font-bold text-accent tracking-[0.4em] -mt-1 uppercase">Equipments</span>
                     </div>
                  </div>
                  <p className="text-dark/50 leading-relaxed text-sm max-w-sm font-medium">
                     We are a proud certified company. A dynamic Exporter, Importer & Supplier of USED AND NEW Heavy Construction & mining equipments globally.
                  </p>
                  <div className="flex gap-4">
                     {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                        <a key={i} href="#" className="w-11 h-11 flex items-center justify-center bg-bg-alt border border-border rounded-xl hover:bg-primary hover:text-white transition-all text-primary/40 shadow-sm">
                           <Icon size={20} />
                        </a>
                     ))}
                  </div>
               </div>

               {/* Column 2: Quick Navigation */}
               <div className="flex flex-col gap-8">
                  <h4 className="text-primary font-black uppercase tracking-widest text-sm relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-1 after:bg-accent">Site Map</h4>
                  <div className="flex flex-col gap-4">
                     {[
                        { name: 'Home', href: '/' },
                        { name: 'About Us', href: '/about' },
                        { name: 'Products', href: '/products' },
                        { name: 'Services', href: '/services' },
                        { name: 'Gallery', href: '/gallery' },
                        { name: 'Contact', href: '/contact' }
                     ].map((link) => (
                        <a
                           key={link.name}
                           href={link.href}
                           className="text-sm font-bold text-dark/40 hover:text-primary flex items-center gap-2 group transition-all"
                        >
                           <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                           {link.name}
                        </a>
                     ))}
                  </div>
               </div>

               {/* Column 3: Reach Us (Main Office & Contact) */}
               <div className="flex flex-col gap-8">
                  <h4 className="text-primary font-black uppercase tracking-widest text-sm relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-1 after:bg-accent">Reach Us</h4>
                  <div className="flex flex-col gap-8">
                     <div className="flex gap-4">
                        <div className="p-3 bg-bg-alt rounded-lg h-fit text-accent border border-border">
                           <MapPin size={20} />
                        </div>
                        <div className="flex flex-col gap-1">
                           <span className="text-[10px] font-black text-dark/30 uppercase tracking-widest italic leading-none">Main Office</span>
                           <p className="text-xs text-dark/60 font-bold leading-relaxed">
                              Office No S - 07 -64, 2nd Floor Haware Centurion Mall, Near Seawood Railway Station, Sector 19A, Nerul, Navi Mumbai, Maharashtra, India - 400 706.
                           </p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="p-3 bg-bg-alt rounded-lg h-fit text-accent border border-border">
                           <Phone size={20} />
                        </div>
                        <div className="flex flex-col gap-1">
                           <span className="text-[10px] font-black text-dark/30 uppercase tracking-widest italic leading-none">Call Us</span>
                           <p className="text-xs text-dark/60 font-bold leading-loose font-mono">
                              +91 XXXXX XXXXX | XXXXX XXXXX <br />
                              +91 XXXXX XXXXX | XXXXX XXXXX
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Column 4: Admin Office + Mail List */}
               <div className="flex flex-col gap-8">
                  <h4 className="text-primary font-black uppercase tracking-widest text-sm relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-1 after:bg-accent">Locations</h4>
                  <div className="flex flex-col gap-6">
                     <div className="flex gap-4">
                        <div className="p-3 bg-bg-alt rounded-lg h-fit text-accent border border-border">
                           <MapPin size={20} />
                        </div>
                        <div className="flex flex-col gap-1">
                           <span className="text-[10px] font-black text-dark/30 uppercase tracking-widest italic leading-none">Admin Office</span>
                           <p className="text-xs text-dark/60 font-bold leading-relaxed">
                              Office No S - 07 -64, 2nd Floor Haware Centurion Mall, Near Seawood Railway Station, Sector 19A, Nerul, Navi Mumbai, Maharashtra, India - 400 706.
                           </p>
                        </div>
                     </div>
                     <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3 p-3 bg-accent/5 rounded-xl border border-accent/10">
                           <Mail size={16} className="text-accent" />
                           <span className="text-[10px] font-bold text-primary/60 truncate">info@eliteglobalearthmover.com</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-accent/5 rounded-xl border border-accent/10">
                           <Mail size={16} className="text-accent" />
                           <span className="text-[10px] font-bold text-primary/60 truncate">sales@eliteglobalearthmover.com</span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Column 5: Mini Form */}
               {/* <div className="flex flex-col gap-8">
                  <h4 className="text-primary font-black uppercase tracking-widest text-sm relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-1 after:bg-accent">Message</h4>
                  <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                     <input
                        type="text"
                        placeholder="Name"
                        className="w-full bg-bg-alt border border-border px-4 py-3 rounded-xl text-xs focus:border-accent focus:outline-none transition-all placeholder:text-dark/30"
                     />
                     <input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-bg-alt border border-border px-4 py-3 rounded-xl text-xs focus:border-accent focus:outline-none transition-all placeholder:text-dark/30"
                     />
                     <div className="flex items-center gap-3 mt-2">
                        <span className="text-[10px] font-black text-accent uppercase tracking-tighter">15+14=</span>
                        <input type="number" className="w-10 h-8 bg-white border border-border rounded-lg text-center text-xs font-bold" />
                        <button className="flex-1 py-3 bg-primary text-white font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-accent transition-all shadow-md">
                           Send
                        </button>
                     </div>
                  </form>
               </div> */}
            </div>

            {/* Bottom Bar */}
            <div className="pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-8">
               <div className="flex flex-col gap-2 text-center md:text-left">
                  <p className="text-[10px] font-black text-dark/30 uppercase tracking-[0.2em]">
                     Group of companies: <span className="text-primary">BATWALKARS REMARKABLE EQUIPMENTS</span>
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 opacity-50">
                     <span className="text-[9px] text-dark font-bold px-3 py-1 bg-bg-alt rounded-full border border-border uppercase">GST: 27AHZPB1415A1ZQ</span>
                     <span className="text-[9px] text-dark font-bold px-3 py-1 bg-bg-alt rounded-full border border-border uppercase">ESTD: JUNE 2021</span>
                  </div>
               </div>

               <div className="flex flex-col md:items-end gap-2 text-center md:text-right">
                  <p className="text-[10px] text-dark/20 font-bold uppercase tracking-widest">
                     © {new Date().getFullYear()} Elite Global Earthmover EQUIPMENTS. ALL RIGHTS RESERVED.
                  </p>
                  {/* <p className="text-[10px] text-dark/20 font-bold uppercase tracking-widest">
                     © 2026 Elite Global Earthmover EQUIPMENTS. ALL RIGHTS RESERVED.
                  </p> */}
               </div>
            </div>
         </div>
      </footer>
   );
};
