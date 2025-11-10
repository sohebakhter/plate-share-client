const Banner = () => {
  return (
    <section className="w-full min-h-[80vh] flex items-center bg-gray-100 px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Your Extra Meal Can Be Someone's Hope
          </h1>
          <p className="text-lg text-gray-700">
            Join PlateShare to reduce food waste and feed the hungry. Share your
            leftover meals with dignity and kindness.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/donate"
              className="px-6 py-3 text-lg font-semibold rounded-xl bg-primary border border-transparent hover:bg-primary/90 text-white shadow-lg transition-all"
            >
              Donate Now
            </a>
            <a
              href="/foods"
              className="px-6 py-3 text-lg font-semibold rounded-xl border border-gray-500 hover:bg-gray-200 text-gray-800 shadow-md transition-all"
            >
              View Food List
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=80"
            alt="Food Donation Banner"
            className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};
export default Banner;
