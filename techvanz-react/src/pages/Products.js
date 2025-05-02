import React from 'react';

const Products = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12 px-4 md:px-0 font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>
      <h1 className="text-4xl font-extrabold text-blue-900 mb-8 text-center tracking-wide">Products</h1>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <article className="space-y-5 text-center transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg p-4 border border-gray-200">
          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80"
            alt="TAB project POS system dashboard"
            className="rounded-lg shadow-md mx-auto max-w-full h-auto"
            loading="lazy"
          />
          <h3 className="text-xl font-semibold text-blue-900 mt-4 flex items-center justify-center gap-2">
            <i className="fas fa-cash-register text-blue-700"></i> TAB project POS system
          </h3>
          <p className="text-gray-700">Revolutionize your operations with an advanced cloud-based POS system.</p>
          <button className="mt-3 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition">Learn More</button>
        </article>
        <article className="space-y-5 text-center transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg p-4 border border-gray-200">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
            alt="Real-time order tracking interface"
            className="rounded-lg shadow-md mx-auto max-w-full h-auto"
            loading="lazy"
          />
          <h3 className="text-xl font-semibold text-blue-900 mt-4 flex items-center justify-center gap-2">
            <i className="fas fa-truck-moving text-blue-700"></i> Real-time order tracking
          </h3>
          <p className="text-gray-700">Enhance customer satisfaction with real-time order updates.</p>
          <button className="mt-3 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition">Learn More</button>
        </article>
        <article className="space-y-5 text-center transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg p-4 border border-gray-200">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
            alt="Digital customer engagement with QR codes"
            className="rounded-lg shadow-md mx-auto max-w-full h-auto"
            loading="lazy"
          />
          <h3 className="text-xl font-semibold text-blue-900 mt-4 flex items-center justify-center gap-2">
            <i className="fas fa-qrcode text-blue-700"></i> Digital customer engagement
          </h3>
          <p className="text-gray-700">Connect deeply with customers using interactive QR codes.</p>
          <button className="mt-3 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition">Learn More</button>
        </article>
      </section>

      <section className="max-w-6xl mx-auto space-y-10 mt-24">
        <h2 className="text-3xl font-extrabold text-blue-900 text-center tracking-wide">Flexible pricing plans</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto">Tailored solutions for every business size</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div className="border rounded-lg p-8 shadow hover:shadow-xl transition-transform transform hover:scale-105 border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="TAB project - cloud-based POS system"
              className="rounded-md mb-6 max-w-full h-auto"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <i className="fas fa-cloud text-blue-700"></i> TAB project - cloud-based POS system
            </h3>
            <p className="text-gray-700 mb-6">Transform your business operations with our cloud-based POS system.</p>
            <p className="font-semibold text-gray-900 text-lg">Free</p>
            <button className="mt-3 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition">Subscribe</button>
          </div>
          <div className="border rounded-lg p-8 shadow hover:shadow-xl transition-transform transform hover:scale-105 border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
              alt="Real-time order tracking"
              className="rounded-md mb-6 max-w-full h-auto"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <i className="fas fa-clock text-blue-700"></i> Real-time order tracking
            </h3>
            <p className="text-gray-700 mb-6">Stay updated with our real-time order tracking feature.</p>
            <p className="font-semibold text-gray-900 text-lg">$25/month</p>
            <button className="mt-3 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition">Subscribe</button>
          </div>
          <div className="border rounded-lg p-8 shadow hover:shadow-xl transition-transform transform hover:scale-105 border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="Digital customer engagement via QR codes"
              className="rounded-md mb-6 max-w-full h-auto"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <i className="fas fa-mobile-alt text-blue-700"></i> Digital customer engagement via QR codes
            </h3>
            <p className="text-gray-700 mb-6">Enhance customer interaction through QR code technology.</p>
            <p className="font-semibold text-gray-900 text-lg">$50/month</p>
            <button className="mt-3 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition">Subscribe</button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto space-y-10 mt-24">
        <h2 className="text-3xl font-extrabold text-blue-900 text-center tracking-wide">Seamless store management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          <div className="text-center space-y-6 border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
              alt="Multi-tenant store management dashboard"
              className="rounded-lg shadow-md mx-auto max-w-full h-auto"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold text-blue-900 flex items-center justify-center gap-2">
              <i className="fas fa-store text-blue-700"></i> Multi-tenant store management
            </h3>
            <p className="text-gray-700">Effortlessly manage multiple store locations in one platform.</p>
            <button className="text-blue-700 hover:underline font-medium">Learn more</button>
          </div>
          <div className="text-center space-y-6 border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
              alt="Real-time order tracking dashboard"
              className="rounded-lg shadow-md mx-auto max-w-full h-auto"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold text-blue-900 flex items-center justify-center gap-2">
              <i className="fas fa-truck text-blue-700"></i> Real-time order tracking
            </h3>
            <p className="text-gray-700">Monitor orders instantly, enhancing customer satisfaction.</p>
            <button className="text-blue-700 hover:underline font-medium">Learn more</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
