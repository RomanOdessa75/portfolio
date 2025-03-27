import { motion } from 'framer-motion';

const ServiceContent = () => {
  const columns = [
    {
      title: "Design Process",
      image: "/images/design-process.jpg"
    },
    {
      title: "Development",
      image: "/images/development.jpg"
    },
    {
      title: "Delivery",
      image: "/images/delivery.jpg"
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-8 p-8">
      {columns.map((column, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h3 className="text-2xl font-bold mb-4">{column.title}</h3>
          <motion.div
            className="h-[2px] bg-black mb-6"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          />
          <motion.div
            className="aspect-square bg-gray-200 overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          >
            <img
              src={column.image}
              alt={column.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceContent; 