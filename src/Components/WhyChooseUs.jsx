import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Easy Donation Process",
      description: "Simple steps to donate food and help those in need.",
      icon: "🍲",
    },
    {
      title: "Transparent Tracking",
      description: "Track your donations and see the impact you make.",
      icon: "📊",
    },
    {
      title: "Community Focused",
      description: "Connect with local donors and recipients in your area.",
      icon: "🤝",
    },
    {
      title: "Secure & Reliable",
      description:
        "Your data and donations are handled with care and security.",
      icon: "🔒",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-green-600"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why Choose PlateShare?
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
            >
              <motion.div
                className="text-6xl mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {reason.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-700">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
