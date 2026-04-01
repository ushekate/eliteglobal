import React from "react";
import { motion } from "framer-motion";


import ogparts from "../assets/Images/HomeMarkableIndia/ogparts.jpg";
import contarct from "../assets/Images/HomeMarkableIndia/contarct.jpg";
import movement from "../assets/Images/HomeMarkableIndia/movement.jpg";
import pickup480 from "../assets/Images/HomeMarkableIndia/pickup-480x480.jpg";
import qengin from "../assets/Images/HomeMarkableIndia/qengin.jpg";
import workshop  from "../assets/Images/HomeMarkableIndia/workshop.jpg";
import contact from "../assets/Images/HomeMarkableIndia/contact-basis.jpg";
import construction from "../assets/Images/HomeMarkableIndia/construction-11.jpg";

export const Gallery = () => {
  const images = [
    ogparts,
    movement,
    pickup480,
    qengin,
    workshop,
    contarct,
    contact,
    construction,
  ];

  return (
    <div className="bg-white pt-30">

      {/* HERO SECTION */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center bg-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.png"
            alt="Gallery"
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-24">
          <div className="flex items-center gap-4">
            <div className="w-3 h-10 bg-accent" />
            <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-none">
              OUR<br />GALLERY
            </h1>
          </div>
          <p className="mt-6 text-xl text-white/80 max-w-lg">
            Explore our equipment, workshop, and projects
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="max-w-7xl mx-auto px-6 lg:px-24 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary tracking-tight">Equipment & Workshop Gallery</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end justify-center pb-6">
                <span className="text-white text-sm font-medium tracking-widest">VIEW FULL SIZE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent/60 to-accent text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Want to see more?</h2>
          <p className="mb-8 text-lg opacity-90">
            Contact us for detailed photos, videos, or specific equipment information.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:info@eliteglobalearthmover.com"
              className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition"
            >
              Email Us
            </a>
            <a
              href="tel:+919321137273"
              className="border-2 border-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

