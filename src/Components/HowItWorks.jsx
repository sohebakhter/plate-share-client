import React from "react";


const HowItWorks = () => {
  return (
    <div className="p-5">
      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          How PlateShare Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-8 rounded-2xl bg-white shadow-lg border hover:shadow-xl transition-all">
            <div className="text-5xl mb-4">📤</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Post Food
            </h3>
            <p className="text-gray-600">
              People with extra food post the available meals with details and
              pickup info.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-lg border hover:shadow-xl transition-all">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Find Food
            </h3>
            <p className="text-gray-600">
              Needy individuals browse available free meals and request what
              they need.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-lg border hover:shadow-xl transition-all">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Collect Food
            </h3>
            <p className="text-gray-600">
              Approved users collect food from the donor and enjoy a fresh meal.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
