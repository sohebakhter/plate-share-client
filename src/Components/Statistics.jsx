import React from "react";
import { motion } from "framer-motion";

const Statistics = () => {
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
          Our Impact
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center" variants={itemVariants}>
            <h3 className="text-4xl font-bold text-green-600">1000+</h3>
            <p className="text-lg">Foods Donated</p>
          </motion.div>
          <motion.div className="text-center" variants={itemVariants}>
            <h3 className="text-4xl font-bold text-green-600">500+</h3>
            <p className="text-lg">People Helped</p>
          </motion.div>
          <motion.div className="text-center" variants={itemVariants}>
            <h3 className="text-4xl font-bold text-green-600">200+</h3>
            <p className="text-lg">Active Donors</p>
          </motion.div>
          <motion.div className="text-center" variants={itemVariants}>
            <h3 className="text-4xl font-bold text-green-600">50+</h3>
            <p className="text-lg">Communities Served</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
