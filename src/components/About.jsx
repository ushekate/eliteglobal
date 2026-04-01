
import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  Wrench, 
  Truck, 
  UserCheck, 
  Settings, 
  Factory 
} from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Reliable Supplier",
      desc: "A world-class supplier of high quality range of used, fresh and new heavy construction & mining equipment."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Contractor Status",
      desc: "Authorized contractor for machine hiring and professional technical management."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Nearby Workshop",
      desc: "Well-equipped workshop nearby JNPT port for repair, maintenance, and unit care before export."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Logistic Force",
      desc: "Own Freight Forwarding & Custom clearance with a worldwide agency network to reduce costs and ensure safety."
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Support Force",
      desc: "A team of qualified engineers and professional technical staff available to maintain after sales service."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Spare Division",
      desc: "Wholesale and retail supply of original spare parts ensures durability and long machine life."
    },
  ];

  return (
    <div className="bg-white pt-30"> 

      <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center bg-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero.png" 
            alt="Heavy Machinery" 
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-24">
          <div className="flex items-center gap-4">
            <div className="w-3 h-10 bg-accent" />
            <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-none">
              ABOUT OUR<br />COMPANY
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-24 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          
          {/* Left - Company Description */}
          <div className="lg:col-span-7 space-y-8 text-lg leading-relaxed text-gray-700">
            <p className="text-2xl font-bold text-primary">
              ELITE GLOBAL EARTHMOVER EQUIPMENTS is a dynamic exporter, importer, and supplier offering a variety 
              of used and new heavy construction and mining equipment worldwide.
            </p>

            <p>
              We are known as a reliable supplier engaged in providing branded quality heavy equipment, 
              including wheel loaders, excavators, pavers, road rollers, motor graders, backhoe loaders, 
              dozers, and dump trucks.
            </p>

            <p>
              We have successfully established a remarkable presence in the mining and construction 
              industry in a very short period. We believe that the greatest assets of our company are 
              our commitment, quality, and time management in every task undertaken for our clients, 
              resulting in immense customer satisfaction.
            </p>

            {/* Legacy Section */}
            <div className="pt-10 border-t border-gray-200">
              <h3 className="text-3xl font-bold text-primary mb-6">Company Legacy</h3>
              <p className="text-xl">
                We are proud ISO 9001:2008 certified company. We strictly adhere to stringent quality 
                policies and practices to satisfy our customers globally.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <ShieldCheck className="w-7 h-7 text-yellow-500 mt-1" />
                  <span className="font-medium">Quality and safety tested before every departure</span>
                </div>
                <div className="flex gap-4">
                  <Factory className="w-7 h-7 text-yellow-500 mt-1" />
                  <span className="font-medium">10+ Global Agencies</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Logo Box  */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-2 rounded-3xl shadow-2xl">
              <div className="bg-white rounded-3xl p-12 lg:p-16 text-center">
                <img 
                  src="/hero.png" 
                  alt="Elite Global Earthmover Equipments" 
                  className="mx-auto w-64 lg:w-72 mb-12"
                />
                
                <div className="space-y-7 text-left">
                  {[
                    "Branded Quality Equipment",
                    "Global Export Network",
                    "After Sales Support",
                    "On-time Delivery Guaranteed"
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                      <p className="font-medium text-primary">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary tracking-tight">
              WHY CHOOSE ELITE GLOBAL EARTHMOVER EQUIPMENTS?
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              We deliver more than machines — we deliver trust, quality and complete support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl shadow hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 text-yellow-600 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

