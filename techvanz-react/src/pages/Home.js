import React from 'react';

const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800">Transform your business</h1>
        <p className="text-lg md:text-xl text-gray-700">Revolutionize with TAB project</p>
        <p className="text-gray-600 max-w-3xl mx-auto">
          TechVanz introduces the TAB Project, a cutting-edge cloud-based Point-of-Sale and Store Management system. Designed to revolutionize operations for stores, restaurants, and service providers, our platform offers multi-tenant management, real-time order tracking, and digital customer engagement through QR codes. With deep admin and staff access control, our modular and scalable system features smart tools like inventory control, payment integration, and report generation. Experience seamless digital transformation with mobile/web access and unlock future opportunities in customer loyalty and advanced analytics.
        </p>
        <a href="/products" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition">View products</a>
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
          alt="cloud based POS system"
          className="mx-auto rounded-lg shadow-lg mt-8 max-w-full h-auto"
        />
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <article className="space-y-4 text-center">
          <a href="/products" className="block">
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80"
              alt="TAB project POS system"
              className="rounded-lg shadow-md mx-auto max-w-full h-auto"
            />
            <h3 className="text-xl font-semibold text-blue-800 mt-4">TAB project POS system</h3>
            <p className="text-gray-600">Revolutionize your operations with an advanced cloud-based POS system.</p>
          </a>
        </article>
        <article className="space-y-4 text-center">
          <a href="/products" className="block">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
              alt="Real-time order tracking"
              className="rounded-lg shadow-md mx-auto max-w-full h-auto"
            />
            <h3 className="text-xl font-semibold text-blue-800 mt-4">Real-time order tracking</h3>
            <p className="text-gray-600">Enhance customer satisfaction with real-time order updates.</p>
          </a>
        </article>
        <article className="space-y-4 text-center">
          <a href="/products" className="block">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="Digital customer engagement"
              className="rounded-lg shadow-md mx-auto max-w-full h-auto"
            />
            <h3 className="text-xl font-semibold text-blue-800 mt-4">Digital customer engagement</h3>
            <p className="text-gray-600">Connect deeply with customers using interactive QR codes.</p>
          </a>
        </article>
      </section>

      {/* Pricing Plans Section */}
      <section className="max-w-6xl mx-auto space-y-10">
        <h2 className="text-3xl font-bold text-center text-blue-800">Flexible pricing plans</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto">Tailored solutions for every business size</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="TAB project - cloud-based POS system"
              className="rounded-md mb-4 max-w-full h-auto"
            />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">TAB project - cloud-based POS system</h3>
            <p className="text-gray-600 mb-4">Transform your business operations with our cloud-based POS system.</p>
            <p className="font-semibold text-gray-800">Free</p>
            <a href="/products" className="text-blue-700 hover:underline">Read more</a>
          </div>
          <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
              alt="Real-time order tracking"
              className="rounded-md mb-4 max-w-full h-auto"
            />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Real-time order tracking</h3>
            <p className="text-gray-600 mb-4">Stay updated with our real-time order tracking feature.</p>
            <p className="font-semibold text-gray-800">$25/month</p>
            <a href="/products" className="text-blue-700 hover:underline">Read more</a>
          </div>
          <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="Digital customer engagement via QR codes"
              className="rounded-md mb-4 max-w-full h-auto"
            />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Digital customer engagement via QR codes</h3>
            <p className="text-gray-600 mb-4">Enhance customer interaction through QR code technology.</p>
            <p className="font-semibold text-gray-800">$50/month</p>
            <a href="/products" className="text-blue-700 hover:underline">Read more</a>
          </div>
        </div>
      </section>

      {/* Seamless Store Management Section */}
      <section className="max-w-6xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-blue-800 text-center">Seamless store management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div className="text-center space-y-4">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
              alt="Multi-tenant store management"
              className="rounded-lg shadow-md mx-auto max-w-full h-auto"
            />
            <h3 className="text-xl font-semibold text-blue-800">Multi-tenant store management</h3>
            <p className="text-gray-600">Effortlessly manage multiple store locations in one platform.</p>
            <a href="/products" className="text-blue-700 hover:underline">Learn more</a>
          </div>
          <div className="text-center space-y-4">
          <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
              alt="Real-time order tracking"
              className="rounded-lg shadow-md mx-auto max-w-full h-auto"
            />
            <h3 className="text-xl font-semibold text-blue-800">Real-time order tracking</h3>
            <p className="text-gray-600">Monitor orders instantly, enhancing customer satisfaction.</p>
            <a href="/products" className="text-blue-700 hover:underline">Learn more</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Get in touch</h2>
        <form className="space-y-6" noValidate>
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email address *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>
          <div>
            <label className="inline-flex items-center text-gray-700">
              <input type="checkbox" required className="form-checkbox h-5 w-5 text-blue-600" />
              <span className="ml-2">I allow this website to store my submission so they can respond to my inquiry. *</span>
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition"
          >
            Submit
          </button>
          <p className="text-red-600 mt-4 hidden" id="form-error">
            Sorry, we were not able to submit the form. Please review the errors and try again.
          </p>
        </form>
        <div className="mt-8 text-center text-gray-700">
          <p>
            <a href="mailto:surajsah0539@gmail.com" className="text-blue-700 hover:underline">
              surajsah0539@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://www.google.com/maps/place/+Noida+UP+IN"
              target="_blank"
              rel="noopener"
              className="hover:underline"
            >
              Noida, UP IN
            </a>
          </p>
          <p className="mt-4 font-semibold">Hours</p>
          <ul className="space-y-1">
            <li>Monday: 9:00am – 10:00pm</li>
            <li>Tuesday: 9:00am – 10:00pm</li>
            <li>Wednesday: 9:00am – 10:00pm</li>
            <li>Thursday: 9:00am – 10:00pm</li>
            <li>Friday: 9:00am – 10:00pm</li>
            <li>Saturday: 9:00am – 6:00pm</li>
            <li>Sunday: 9:00am – 12:00pm</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
