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
  Factory,
  Globe,
  Handshake,
  Clock
} from 'lucide-react';

import logo from '../assets/logo.jpeg';   // ← Make sure to import your logo

export const About = () => {
  return (
    <div className="bg-white pt-20">

      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center bg-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero.png" 
            alt="Heavy Machinery" 
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-3 h-10 bg-[#F9A825]" />
            <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-none">
              ABOUT OUR<br />COMPANY
            </h1>
          </div>
          <p className="text-2xl text-white/90 max-w-2xl">
            Your Trusted Global Partner in Heavy Construction & Earthmoving Equipment
          </p>
        </div>
      </section>

      {/* About Company Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-24 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left - Company Description */}
          <div className="lg:col-span-7 space-y-8 text-lg leading-relaxed text-gray-700">
            <h2 className="text-4xl lg:text-5xl font-black text-primary leading-tight">
              ELITE GLOBAL EARTHMOVER
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Elite Global Earthmover is a trusted name in the heavy construction and earthmoving 
                equipment industry, delivering high quality machinery solutions across domestic and 
                international markets.
              </p>
              <p>
                With a strong focus on performance, durability, and reliability, we specialize in 
                sourcing, supplying, and exporting a wide range of construction equipment that meets 
                global standards.
              </p>
              <p>
                Our company is built on the foundation of technical expertise, transparent business 
                practices, and a commitment to long-term client relationships. We aim to support 
                infrastructure growth by providing dependable equipment solutions that enhance 
                productivity and efficiency on every project.
              </p>
            </div>
          </div>

          {/* Right - Logo Box */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-gradient-to-br from-[#F9A825] to-orange-600 p-2 rounded-3xl shadow-2xl">
              <div className="bg-white rounded-3xl p-12 lg:p-16 text-center">
                <img 
                  src={logo} 
                  alt="Elite Global Earthmover Logo" 
                  className="mx-auto w-64 lg:w-72 mb-12 object-contain"
                />
                
                <div className="space-y-6 text-left">
                  {[
                    "ISO 9001:2008 Certified",
                    "Global Export Network",
                    "Quality Tested Equipment",
                    "Dedicated After Sales Support"
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-[#F9A825] mt-1 flex-shrink-0" />
                      <p className="font-medium text-primary">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="text-center mb-16">
            <span className="text-[#F9A825] font-bold uppercase tracking-widest">Our Services</span>
            <h2 className="text-4xl lg:text-5xl font-black text-primary mt-4">What We Do</h2>
          </div>

          <div className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 space-y-8">
            <p>
              At Elite Global Earthmover, we provide end-to-end solutions for heavy construction 
              and earthmoving equipment. Our core services include equipment sourcing, international 
              trading, and customized solutions based on project requirements.
            </p>
            <p>
              We work closely with trusted manufacturers and global suppliers to ensure that our 
              clients receive the best equipment suited for their operational needs. We also specialize 
              in import and export services, enabling smooth cross-border transactions with complete 
              documentation support and logistics management.
            </p>
            <p>
              From small contractors to large infrastructure companies, we cater to a wide range of 
              clients with precision and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-24 py-20 lg:py-28">
        <div className="text-center mb-16">
          <span className="text-[#F9A825] font-bold uppercase tracking-widest">Why Us</span>
          <h2 className="text-4xl lg:text-5xl font-black text-primary mt-4">Why Choose Us</h2>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Choosing Elite Global Earthmover means choosing reliability, quality, and long-term value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-white p-10 rounded-3xl shadow-sm border">
            <div className="flex items-center gap-4 mb-6">
              <ShieldCheck className="w-10 h-10 text-[#F9A825]" />
              <h3 className="text-2xl font-bold text-primary">Quality</h3>
            </div>
            <p className="text-gray-700">
              We prioritize quality at every stage, from sourcing to delivery. Each piece of equipment 
              is carefully evaluated to ensure it meets industry standards.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm border">
            <div className="flex items-center gap-4 mb-6">
              <Handshake className="w-10 h-10 text-[#F9A825]" />
              <h3 className="text-2xl font-bold text-primary">Commitment</h3>
            </div>
            <p className="text-gray-700">
              We are committed to delivering on time and maintaining strong relationships with our clients. 
              Our goal is to support your business growth with dependable solutions.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm border">
            <div className="flex items-center gap-4 mb-6">
              <Truck className="w-10 h-10 text-[#F9A825]" />
              <h3 className="text-2xl font-bold text-primary">Logistics</h3>
            </div>
            <p className="text-gray-700">
              Our logistics network is designed to handle both domestic and international shipments efficiently. 
              We ensure safe handling and timely delivery.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm border">
            <div className="flex items-center gap-4 mb-6">
              <UserCheck className="w-10 h-10 text-[#F9A825]" />
              <h3 className="text-2xl font-bold text-primary">Team</h3>
            </div>
            <p className="text-gray-700">
              Our experienced team brings deep industry knowledge and technical expertise. We work closely 
              with clients to understand their needs and provide the right guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Product Range Section */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-primary">Product & Equipment Range</h2>
          </div>
          
          <div className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 space-y-8">
            <p>
              Elite Global Earthmover offers a comprehensive range of heavy construction and earthmoving 
              equipment designed to meet diverse project requirements. Our portfolio includes excavators, 
              loaders, backhoe machines, motor graders, bulldozers, and other specialized equipment used 
              in construction, mining, and infrastructure development.
            </p>
            <p>
              We ensure that all equipment is sourced from reliable manufacturers and is tested for 
              performance, durability, and efficiency. Whether you need equipment for short-term projects 
              or long-term operations, we provide solutions that deliver consistent results.
            </p>
          </div>
        </div>
      </section>

      {/* After Sales Support */}
      <section className="max-w-7xl mx-auto px-6 lg:px-24 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black text-primary mb-8">After Sales & Support</h2>
            <div className="space-y-8 text-lg text-gray-700">
              <p>
                Our relationship with clients does not end at delivery. We provide strong after-sales 
                support to ensure smooth operation and maximum uptime of your equipment.
              </p>
              <p>
                From technical assistance to spare parts support and service coordination, our team 
                is always ready to assist you. We focus on building long-term partnerships by ensuring 
                that our clients receive continuous support and value from their investment.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#F9A825]/10 to-orange-50 p-12 rounded-3xl">
            <div className="text-center">
              <Clock className="w-20 h-20 mx-auto text-[#F9A825] mb-8" />
              <p className="italic text-xl text-gray-700">
                "Customer satisfaction remains at the core of everything we do, and we strive to exceed 
                expectations at every stage."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-6">Your Trusted Global Equipment Partner</h2>
          <p className="text-xl mb-10">
            If you are looking for a reliable partner for heavy construction equipment, 
            Elite Global Earthmover is ready to deliver.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-primary font-bold text-lg px-12 py-5 rounded-2xl hover:bg-yellow-300 hover:text-primary transition-all"
          >
            Contact Us Today
          </a>
        </div>
      </section>

    </div>
  );
};














// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   CheckCircle2, 
//   ShieldCheck, 
//   Award, 
//   Wrench, 
//   Truck, 
//   UserCheck, 
//   Settings, 
//   Factory 
// } from 'lucide-react';

// export const About = () => {
//   const features = [
//     {
//       icon: <ShieldCheck className="w-8 h-8" />,
//       title: "Reliable Supplier",
//       desc: "A world-class supplier of high quality range of used, fresh and new heavy construction & mining equipment."
//     },
//     {
//       icon: <Award className="w-8 h-8" />,
//       title: "Contractor Status",
//       desc: "Authorized contractor for machine hiring and professional technical management."
//     },
//     {
//       icon: <Wrench className="w-8 h-8" />,
//       title: "Nearby Workshop",
//       desc: "Well-equipped workshop nearby JNPT port for repair, maintenance, and unit care before export."
//     },
//     {
//       icon: <Truck className="w-8 h-8" />,
//       title: "Logistic Force",
//       desc: "Own Freight Forwarding & Custom clearance with a worldwide agency network to reduce costs and ensure safety."
//     },
//     {
//       icon: <UserCheck className="w-8 h-8" />,
//       title: "Support Force",
//       desc: "A team of qualified engineers and professional technical staff available to maintain after sales service."
//     },
//     {
//       icon: <Settings className="w-8 h-8" />,
//       title: "Spare Division",
//       desc: "Wholesale and retail supply of original spare parts ensures durability and long machine life."
//     },
//   ];

//   return (
//     <div className="bg-white pt-30"> 

//       <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center bg-[#1a1a1a] overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img 
//             src="/hero.png" 
//             alt="Heavy Machinery" 
//             className="w-full h-full object-cover opacity-75"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-24">
//           <div className="flex items-center gap-4">
//             <div className="w-3 h-10 bg-accent" />
//             <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-none">
//               ABOUT OUR<br />COMPANY
//             </h1>
//           </div>
//         </div>
//       </section>

//       {/* Main Content Section */}
//       <section className="max-w-7xl mx-auto px-6 lg:px-24 py-16 lg:py-24">
//         <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          
//           {/* Left - Company Description */}
//           <div className="lg:col-span-7 space-y-8 text-lg leading-relaxed text-gray-700">
//             <p className="text-2xl font-bold text-primary">
//               ELITE GLOBAL EARTHMOVER EQUIPMENTS is a dynamic exporter, importer, and supplier offering a variety 
//               of used and new heavy construction and mining equipment worldwide.
//             </p>

//             <p>
//               We are known as a reliable supplier engaged in providing branded quality heavy equipment, 
//               including wheel loaders, excavators, pavers, road rollers, motor graders, backhoe loaders, 
//               dozers, and dump trucks.
//             </p>

//             <p>
//               We have successfully established a remarkable presence in the mining and construction 
//               industry in a very short period. We believe that the greatest assets of our company are 
//               our commitment, quality, and time management in every task undertaken for our clients, 
//               resulting in immense customer satisfaction.
//             </p>

//             {/* Legacy Section */}
//             <div className="pt-10 border-t border-gray-200">
//               <h3 className="text-3xl font-bold text-primary mb-6">Company Legacy</h3>
//               <p className="text-xl">
//                 We are proud ISO 9001:2008 certified company. We strictly adhere to stringent quality 
//                 policies and practices to satisfy our customers globally.
//               </p>
//               <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="flex gap-4">
//                   <ShieldCheck className="w-7 h-7 text-yellow-500 mt-1" />
//                   <span className="font-medium">Quality and safety tested before every departure</span>
//                 </div>
//                 <div className="flex gap-4">
//                   <Factory className="w-7 h-7 text-yellow-500 mt-1" />
//                   <span className="font-medium">10+ Global Agencies</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Logo Box  */}
//           <div className="lg:col-span-5 lg:sticky lg:top-28">
//             <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-2 rounded-3xl shadow-2xl">
//               <div className="bg-white rounded-3xl p-12 lg:p-16 text-center">
//                 <img 
//                   src="/hero.png" 
//                   alt="Elite Global Earthmover Equipments" 
//                   className="mx-auto w-64 lg:w-72 mb-12"
//                 />
                
//                 <div className="space-y-7 text-left">
//                   {[
//                     "Branded Quality Equipment",
//                     "Global Export Network",
//                     "After Sales Support",
//                     "On-time Delivery Guaranteed"
//                   ].map((text, i) => (
//                     <div key={i} className="flex items-start gap-4">
//                       <CheckCircle2 className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
//                       <p className="font-medium text-primary">{text}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Grid */}
//       <section className="bg-gray-50 py-20 lg:py-28">
//         <div className="max-w-7xl mx-auto px-6 lg:px-24">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold text-primary tracking-tight">
//               WHY CHOOSE ELITE GLOBAL EARTHMOVER EQUIPMENTS?
//             </h2>
//             <p className="mt-4 text-gray-600 max-w-xl mx-auto">
//               We deliver more than machines — we deliver trust, quality and complete support.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.05 }}
//                 viewport={{ once: true }}
//                 className="bg-white p-10 rounded-3xl shadow hover:shadow-xl transition-all duration-300 group"
//               >
//                 <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 text-yellow-600 group-hover:scale-110 transition-transform">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold text-primary mb-4">{feature.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

