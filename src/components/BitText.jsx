// components/BitText.js
import { motion } from 'framer-motion';

const BitText = ({ text, className }) => {
  const letters = text.split('');

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: index * 0.1,
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default BitText;
