import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            About PlateShare
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to reduce food waste and help communities by
            connecting generous donors with those in need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Our Mission
            </h3>
            <p className="text-gray-600 text-center">
              To create a sustainable future by minimizing food waste and
              ensuring no one goes hungry in our communities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Community Impact
            </h3>
            <p className="text-gray-600 text-center">
              Building stronger communities through food sharing, fostering
              connections between donors and recipients.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Sustainability
            </h3>
            <p className="text-gray-600 text-center">
              Promoting environmental sustainability by reducing food waste and
              its impact on our planet.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Story
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                PlateShare was born from a simple observation: while millions
                struggle with food insecurity, tons of perfectly good food are
                discarded every day. We believe that everyone deserves access to
                nutritious food, and no edible food should go to waste.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our platform connects generous individuals, restaurants, and
                organizations with people who need food assistance. Through
                technology and community spirit, we're creating a more equitable
                and sustainable food system.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Join us in our mission to share, care, and make a difference—one
                plate at a time.
              </p>
            </div>
            <div className="relative">
              <img
                src="/wow.svg"
                alt="Our Story"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you want to donate food or find assistance, PlateShare is
            here to help. Join our community today and be part of the solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary btn-lg">Start Donating</button>
            <button className="btn btn-outline btn-lg">Find Food</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
