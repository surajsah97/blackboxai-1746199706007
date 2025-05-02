import React from 'react';

const Products = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-10 px-4 md:px-0">
      <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">Products</h1>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <article className="space-y-4 text-center">
          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80"
            alt="TAB project POS system"
            className="rounded-lg shadow-md mx-auto max-w-full h-auto"
          />
          <h3 className="text-xl font-semibold text-blue-800 mt-4">TAB project POS system</h3>
          <p className="text-gray-600">Revolutionize your operations with an advanced cloud-based POS system.</p>
        </article>
        <article className="space-y-4 text-center">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
            alt="Real-time order tracking"
            className="rounded-lg shadow-md mx-auto max-w-full h-auto"
          />
          <h3 className="text-xl font-semibold text-blue-800 mt-4">Real-time order tracking</h3>
          <p className="text-gray-600">Enhance customer satisfaction with real-time order updates.</p>
        </article>
        <article className="space-y-4 text-center">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
            alt="Digital customer engagement"
            className="rounded-lg shadow-md mx-auto max-w-full h-auto"
          />
          <h3 className="text-xl font-semibold text-blue-800 mt-4">Digital customer engagement</h3>
          <p className="text-gray-600">Connect deeply with customers using interactive QR codes.</p>
        </article>
      </section>

      <section className="max-w-6xl mx-auto space-y-8 mt-20">
        <h2 className="text-3xl font-bold text-blue-800 text-center">Flexible pricing plans</h2>
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

      <section className="max-w-6xl mx-auto space-y-8 mt-20">
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
    </div>
  );
};

export default Products;
