import React from 'react';

export const Contact = () => {
    return (
        <div className="bg-white pt-30">

            {/* Contact Hero Banner */}
            <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center bg-[#1a1a1a] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/hero.png" 
                        alt="Contact Elite Global Earthmover" 
                        className="w-full h-full object-cover opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-24">
                    <div className="flex items-center gap-4">
                        <div className="w-3 h-10 bg-yellow-500" />
                        <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-none">
                            GET IN<br />TOUCH
                        </h1>
                    </div>
                    <p className="mt-6 text-xl text-white/80 max-w-lg">
                        Ready to discuss your heavy equipment needs? Our team is here to help.
                    </p>
                </div>
            </section>

            {/* Main Contact Section */}
            <section id="contact" className="py-20 lg:py-28 bg-white">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Contact <span className="text-accent">Us</span>
                        </h2>
                        <p className="text-gray-500 mt-4 max-w-md mx-auto">
                            Reach out for business inquiries, equipment sourcing, or any support you need.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16">

                        {/* LEFT - CONTACT FORM */}
                        <div>
                            <form className="space-y-6">
                                {/* Name */}
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-4 rounded-2xl border border-gray-300 
                                    bg-gradient-to-b from-gray-100 to-gray-200 
                                    shadow-inner focus:outline-none focus:ring-2 focus:ring-accent transition"
                                />

                                {/* Subject */}
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full p-4 rounded-2xl border border-gray-300 
                                    bg-gradient-to-b from-gray-100 to-gray-200 
                                    shadow-inner focus:outline-none focus:ring-2 focus:ring-accent transition"
                                />

                                {/* Email + Phone */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full p-4 rounded-2xl border border-gray-300 
                                        bg-gradient-to-b from-gray-100 to-gray-200 
                                        shadow-inner focus:outline-none focus:ring-2 focus:ring-accent transition"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        className="w-full p-4 rounded-2xl border border-gray-300 
                                        bg-gradient-to-b from-gray-100 to-gray-200 
                                        shadow-inner focus:outline-none focus:ring-2 focus:ring-accent transition"
                                    />
                                </div>

                                {/* Message */}
                                <textarea
                                    rows="7"
                                    placeholder="Your Message / Requirements"
                                    className="w-full p-4 rounded-2xl border border-gray-300 
                                    bg-gradient-to-b from-gray-100 to-gray-200 
                                    shadow-inner focus:outline-none focus:ring-2 focus:ring-accent transition"
                                ></textarea>

                                {/* Captcha + Button */}
                                <div className="flex flex-col md:flex-row items-center justify-end gap-6 pt-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-700 font-medium text-sm">1 + 6 =</span>
                                        <input
                                            type="text"
                                            className="w-16 h-12 text-center rounded-xl border border-gray-300 
                                            bg-gradient-to-b from-gray-100 to-gray-200 shadow-inner focus:outline-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-gradient-to-r from-accent to-accent/80 hover:to-accent
                                        text-white font-semibold px-10 py-4 rounded-2xl 
                                        shadow-lg hover:scale-105 active:scale-95 transition duration-300"
                                    >
                                        SEND MESSAGE
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* RIGHT - LOCATION + INFO */}
                        <div className="space-y-8">

                                                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Our Location & Contact Info</h3>
              <p className="text-gray-600 text-sm">
                Office No S - 07 -64, 2nd Floor Haware Centurion Mall, Near Seawood Railway Station, Sector 19A, Nerul, Navi Mumbai, Maharashtra, India - 400 706.
              </p>
              <p className="text-gray-600 text-sm">📞 +91 98765 43210</p>
              <p className="text-gray-600 text-sm">✉️ info@eliteglobalearthmover.com</p>
            </div>

                            {/* Google Map */}
                            <div className="rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                                <iframe
                                    title="Our Location - Near JNPT Port"
                                    // src="https://maps.google.com/maps?q=CBD%20Belapur%20Navi%20Mumbai%20400614&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6826.562559697435!2d73.0148784399623!3d19.028594621270873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOffice%20No%20S%20-%2007%20-64%2C%202nd%20Floor%20Haware%20Centurion%20Mall%2C%20Near%20Seawood%20Railway%20Station%2C%20Sector%2019A%2C%20Nerul%2C%20Navi%20Mumbai%2C%20Maharashtra%2C%20India%20-%20400%20706.!5e1!3m2!1sen!2sin!4v1775134072546!5m2!1sen!2sin"
                                    className="w-full h-86 border-0"
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>

                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6826.562559697435!2d73.0148784399623!3d19.028594621270873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOffice%20No%20S%20-%2007%20-64%2C%202nd%20Floor%20Haware%20Centurion%20Mall%2C%20Near%20Seawood%20Railway%20Station%2C%20Sector%2019A%2C%20Nerul%2C%20Navi%20Mumbai%2C%20Maharashtra%2C%20India%20-%20400%20706.!5e1!3m2!1sen!2sin!4v1775134072546!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};


