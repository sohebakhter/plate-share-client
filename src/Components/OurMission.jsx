import React from "react";

const OurMission = () => {
  return (
    <div className="p-5">
      {/* Our Mission Section */}
      <section className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Our Mission 🌍
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mb-12">
          At PlateShare, our mission is to reduce food waste and fight hunger.
          We believe no one should sleep hungry while perfectly good meals are
          thrown away. Together, we can build a caring community where sharing
          food means sharing happiness.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-8 rounded-2xl shadow-md border">
            <h3 className="text-4xl font-bold text-green-600">5,000+</h3>
            <p className="mt-2 text-gray-700">Meals Shared</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border">
            <h3 className="text-4xl font-bold text-green-600">1,200+</h3>
            <p className="mt-2 text-gray-700">Donors Joined</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border">
            <h3 className="text-4xl font-bold text-green-600">800+</h3>
            <p className="mt-2 text-gray-700">Families Served</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMission;
