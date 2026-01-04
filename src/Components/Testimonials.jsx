import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Donor",
      message:
        "PlateShare made it so easy to donate food. I feel great knowing I'm helping those in need.",
      image: "https://i.ibb.co.com/ch0Mj7bb/image.png",
    },
    {
      name: "Jane Smith",
      role: "Recipient",
      message:
        "Thanks to PlateShare, my family had a meal when we needed it most. Grateful for this platform.",
      image: "https://i.ibb.co.com/ch0Mj7bb/image.png",
    },
    {
      name: "Mike Johnson",
      role: "Volunteer",
      message:
        "Being part of PlateShare has been rewarding. Seeing the smiles on people's faces is priceless.",
      image: "https://i.ibb.co.com/ch0Mj7bb/image.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-green-600"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What People Say
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">"{testimonial.message}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
