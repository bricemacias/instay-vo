import React from 'react';
import { motion } from 'framer-motion';

const Error = ({ error }) => (
  <motion.div
    initial={{ color: 'orangered', opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.1 }}
  >
    <p>{error.message.split(':')[1].trim()}</p>
  </motion.div>
);

export default Error;
