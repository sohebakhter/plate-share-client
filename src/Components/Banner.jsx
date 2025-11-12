import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div
      className="h-[600px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/public/SimpleShiny.svg')" }}
    >
      <section className="w-full min-h-[80vh] flex items-center px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Text Content */}
          <div className="space-y-6">
            <motion.h1
              initial={{
                y: 200,
              }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 0,
              }}
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Your Extra Meal Can Be Someone's Hope
            </motion.h1>
            <motion.p
              initial={{
                y: 200,
              }}
              animate={{ y: 0 }}
              transition={{
                duration: 1.5,
                delay: 0,
              }}
              className="text-lg text-white"
            >
              Join PlateShare to reduce food waste and feed the hungry. Share
              your leftover meals with dignity and kindness.
            </motion.p>

            <motion.div
              initial={{
                y: 200,
              }}
              animate={{ y: 0 }}
              transition={{
                duration: 1.8,
                delay: 0,
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/"
                className="px-6 py-3 text-lg font-semibold rounded-xl bg-green-600 border border-transparent hover:bg-green-700 text-white shadow-lg transition-all"
              >
                Donate Now
              </a>
              <a
                href="/foods"
                className="px-6 py-3 text-lg font-semibold rounded-xl border border-gray-500 hover:bg-green-600 text-white shadow-md transition-all"
              >
                View Food List
              </a>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{
              y: 200,
            }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              delay: 0,
            }}
            className="flex justify-center"
          >
            <img
              src="https://i.ibb.co.com/LdZ0pXPH/image.png"
              alt="Food Donation Banner"
              className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default Banner;
