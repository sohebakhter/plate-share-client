import React from "react";
import { NavLink } from "react-router";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="py-16 bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Join the Movement
        </motion.h2>
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Be part of the change. Donate food, request help, or volunteer today.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavLink
              to="/add-food"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition block"
            >
              Donate Food
            </NavLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavLink
              to="/foods"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-green-600 transition block"
            >
              Find Food
            </NavLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
