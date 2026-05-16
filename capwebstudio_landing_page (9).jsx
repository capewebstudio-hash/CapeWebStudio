import { Mail, Globe, MonitorSmartphone, Search, ArrowRight, MessageCircle } from "lucide-react";

const portfolioImages = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
];

export default function CapeWebStudio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center font-extrabold text-lg tracking-wide shadow-lg">
              CWS
            </div>
            <div>
              <h1 className="font-bold text-xl">CapeWebStudio</h1>
              <p className="text-xs text-gray-400">Professional Web Design</p>
            </div>
          </div>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#portfolio" className="hover:text-white transition">Portfolio</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>
      {/* Hero */}
      <section id="portfolio" className="px-8 py-20 max-w-7xl mx-auto">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
              Professional Web Design
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              CapeWebStudio
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-xl">
              Modern websites for local businesses in Cape Town. We help brands grow online with clean design, mobile-friendly websites, and fast support.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
                Get A Quote
              </button>
              <button className="border border-gray-700 px-6 py-3 rounded-2xl hover:bg-gray-900 transition">
                View Portfolio
              </button>
            </div>
          </div>

          </div>
      </section>

      {/* About */}
      <section className="px-8 py-20 bg-black border-t border-gray-900 border-b border-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
            About CapeWebStudio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Professional Website Design For Modern Businesses
          </h2>

          <p className="text-gray-400 text-lg leading-9 max-w-4xl mx-auto">
            At CapeWebStudio, our main focus is helping businesses create a powerful and professional online presence that instantly captures attention. We believe a website should do more than simply exist — it should make people want to visit, explore, and trust the business before they even walk through the door. Every design is carefully built to reflect the quality, professionalism, and identity of each brand while creating an experience that attracts customers and builds confidence. Our goal is to bring out the very best of every business through modern design, strategic layouts, and engaging user experiences that make an impact from the very first click or scroll. We are committed to delivering high-quality website solutions with strong attention to detail, performance, and design excellence to ensure every client receives nothing but the highest professional standard of work.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-8 py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Business Websites",
                desc: "Professional websites designed for local businesses.",
              },
              {
                title: "Mobile Optimization",
                desc: "Responsive designs that work perfectly on phones.",
              },
              {
                title: "SEO & Google Setup",
                desc: "Help customers find your business online faster.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-black p-8 rounded-3xl border border-gray-800 hover:border-white hover:-translate-y-2 transition duration-300"
              >
                <div className="mb-5 inline-flex p-4 rounded-2xl bg-gray-900">
                  {index === 0 && <Globe size={30} />}
                  {index === 1 && <MonitorSmartphone size={30} />}
                  {index === 2 && <Search size={30} />}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
          <h2 className="text-4xl font-bold">Industries We Work With</h2>
          <p className="text-gray-400">Professional website solutions for growing businesses</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Restaurant Website",
            "Barber Shop",
            "Fitness Studio",
            "Construction Company",
            "Coffee Cafe",
            "Real Estate Agency"
          ].map(
            (project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-800"
              >
                <img
                  src={portfolioImages[index]}
                  alt={project}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{project}</h3>
                  <p className="text-gray-400 mb-4">
                    Modern design with mobile responsiveness and contact integrations.
                  </p>
                  
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-8 py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Professional Service Packages</h2>
          <p className="text-gray-400 mb-12">
            Strategic website solutions tailored for modern businesses.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black p-10 rounded-3xl border border-gray-800">
              <h3 className="text-3xl font-bold mb-4">Essential Business Package</h3>
              <p className="text-5xl font-bold mb-6">R3,500</p>
              <ul className="space-y-4 text-gray-300 mb-8 text-left">
                <li>✔ 4 Professionally Designed Pages</li>
                <li>✔ Fully Responsive Mobile Design</li>
                <li>✔ Basic Search Engine Optimization</li>
                <li>✔ Integrated Contact Form</li>
                <li>✔ Fast & Secure Website Setup</li>
                <li>✔ Complimentary Support for 1 Month</li>
              </ul>
              <button className="w-full bg-white text-black py-3 rounded-2xl font-semibold hover:scale-105 transition">
                Choose Package
              </button>
            </div>

            <div className="bg-white text-black p-10 rounded-3xl shadow-2xl relative overflow-hidden border-4 border-yellow-400">
              <div className="absolute top-4 right-4 bg-black text-white text-xs px-4 py-2 rounded-full uppercase tracking-wider">
                Most Popular
              </div>

              <h3 className="text-3xl font-bold mb-4">Professional Growth Package</h3>
              <p className="text-5xl font-bold mb-6">R6,500</p>
              <ul className="space-y-4 mb-8 text-left">
                <li>✔ Advanced SEO Optimization</li>
                <li>✔ Online Booking Integration</li>
                <li>✔ Google Maps & Business Setup</li>
                <li>✔ Social Media Integration</li>
                <li>✔ Modern Business Interface Design</li>
                <li>✔ Ongoing Technical Support</li>
              </ul>
              <button className="w-full bg-black text-white py-3 rounded-2xl font-semibold hover:scale-105 transition">
                Choose Package
              </button>
            </div>

            <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-black p-10 rounded-3xl shadow-[0_0_40px_rgba(255,0,255,0.3)] border border-pink-400 relative overflow-hidden text-left">
              <div className="absolute top-4 right-4 bg-white text-black text-xs px-4 py-2 rounded-full uppercase tracking-wider font-bold">
                Exclusive
              </div>

              <h3 className="text-3xl font-bold mb-4 text-white">Premium Business Package</h3>
              <p className="text-5xl font-bold mb-6 text-white">R9,500</p>

              <ul className="space-y-4 mb-8 text-white/90">
                <li>✔ Fully Custom Professional Website</li>
                <li>✔ Advanced Mobile & Tablet Optimization</li>
                <li>✔ Google Search & SEO Configuration</li>
                <li>✔ Online Booking & Contact Integration</li>
                <li>✔ Premium Modern User Interface Design</li>
                <li>✔ Social Media Integration</li>
                <li>✔ Performance & Speed Optimization</li>
                <li>✔ Priority Client Support for 2 Months</li>
                <li>✔ Professional Business Branding Assistance</li>
              </ul>

              <button className="w-full bg-white text-black py-3 rounded-2xl font-bold hover:scale-105 transition">
                Choose Package
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-20 max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">
          Let’s Build Your Business Online
        </h2>
        <p className="text-gray-400 text-lg mb-4">
          Ready to grow your business with a professional website?
        </p>

        <p className="text-white text-lg font-medium mb-8">
          capewebstudio@gmail.com
        </p>

        <div className="flex justify-center gap-4 flex-wrap mb-12">

          <a
            href="https://wa.me/27733498274"
            className="bg-green-500 text-white px-8 py-4 rounded-2xl hover:scale-105 transition flex items-center gap-3 font-semibold"
          >
            <MessageCircle /> WhatsApp Us
          </a>

          <a
            href="mailto:capewebstudio@gmail.com"
            className="border border-gray-700 px-8 py-4 rounded-2xl hover:bg-gray-900 transition flex items-center gap-3"
          >
            <Mail /> Email Us
          </a>
        </div>

        <div className="bg-gray-950 border border-gray-800 rounded-3xl p-8 text-left shadow-2xl">
          <h3 className="text-3xl font-bold mb-6 text-center">Request A Free Quote</h3>

          <form className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-black border border-gray-800 rounded-2xl px-5 py-4 outline-none focus:border-white"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-black border border-gray-800 rounded-2xl px-5 py-4 outline-none focus:border-white"
            />

            <input
              type="text"
              placeholder="Business Name"
              className="bg-black border border-gray-800 rounded-2xl px-5 py-4 outline-none focus:border-white md:col-span-2"
            />

            <textarea
              placeholder="Tell us about your project"
              rows="5"
              className="bg-black border border-gray-800 rounded-2xl px-5 py-4 outline-none focus:border-white md:col-span-2"
            ></textarea>

            <button
              type="submit"
              className="bg-white text-black py-4 rounded-2xl font-bold hover:scale-105 transition md:col-span-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 px-8 py-8 text-center text-gray-500">
        © 2026 CapeWebStudio — Professional Web Design
      </footer>
    </div>
  );
}
