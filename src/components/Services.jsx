
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Wrench, 
  Award, 
  ShieldCheck, 
  Users, 
  Globe, 
  Settings, 
  Factory 
} from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Trading of Heavy Used/New Construction Equipments",
      desc: "We are a dynamic exporter, importer, and supplier offering a wide variety of used and new heavy construction & mining equipment all over the world."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Supply of Machines on Hire Basis",
      desc: "Authorized contractor for machine hiring. Professional technical management and supply of machines on hire basis for construction and mining projects."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Repairs & Technical Assistance",
      desc: "Provide complete repair solutions and technical assistance on heavy construction equipments. Well-equipped workshop near JNPT port for maintenance and refurbishment."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Freight Forwarding",
      desc: "Own Freight Forwarding division with a worldwide agency network. We handle local as well as international shipments to reduce costs and ensure safety."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Custom Clearance",
      desc: "Professional custom clearance services all over the world. Hassle-free documentation and clearance for smooth export and import operations."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Spare Parts Supply",
      desc: "Wholesale and retail supply of original spare parts for all major heavy equipment brands to ensure durability and long machine life."
    },
  ];

  return (
    <div className="bg-white pt-30"> 

      {/* Services Hero Banner */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center bg-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero.png" 
            alt="Heavy Machinery Services" 
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-24">
          <div className="flex items-center gap-4">
            <div className="w-3 h-10 bg-yellow-500" />
            <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-none">
              SERVICES<br />OFFERED
            </h1>
          </div>
        </div>
      </section>

      {/* Main Services Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-24 py-16 lg:py-24">
        <div className="text-center mb-16">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Markable Equipments is your trusted partner for all heavy construction and mining equipment needs. 
            We provide end-to-end solutions from trading to after-sales support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 text-yellow-600 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Highlights Section */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary tracking-tight">
              COMPLETE SUPPORT FOR YOUR EQUIPMENT NEEDS
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              From sourcing to delivery and beyond — we ensure quality, safety, and complete customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow flex gap-6">
              <Factory className="w-10 h-10 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-xl mb-2">Workshop Near JNPT Port</h4>
                <p className="text-gray-600">
                  Fully equipped workshop for repair, maintenance, washing, and testing of machines before export.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow flex gap-6">
              <Users className="w-10 h-10 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-xl mb-2">Expert Technical Team</h4>
                <p className="text-gray-600">
                  Qualified engineers and professional staff for after-sales support, site inspections, and technical advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action / Contact Teaser */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to discuss your equipment requirements?</h2>
          <p className="text-xl mb-10 opacity-90">
            Contact us today for trading, hiring, repairs, logistics, or any heavy equipment solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="mailto:sales@markableindia.com" className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition">
              sales@eliteglobalearthmover.com
            </a>
            <a href="tel:+919321137273" className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition">
              +91 93211 37273
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};


