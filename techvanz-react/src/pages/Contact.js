import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md space-y-6">
      <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">Get in touch</h1>
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
    </div>
  );
};

export default Contact;
