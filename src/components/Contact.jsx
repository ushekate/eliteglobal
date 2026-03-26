export const Contact = () => {
  return (
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
  );
};


