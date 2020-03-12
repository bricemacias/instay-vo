import React from 'react';
import { motion } from 'framer-motion';

export const OpacityScaleFull = props => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {props.children}
    </motion.div>
  );
};

export const OpacityScaleMedium = props => {
  return (
    <motion.div
      initial={{ opacity: 0.5, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      {props.children}
    </motion.div>
  );
};

export const OpacityScaleMain = props => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 0.3 }}
    >
      {props.children}
    </motion.div>
  );
};

export const OpacityDelayStepper = props => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 0.3 }}
    >
      {props.children}
    </motion.div>
  );
};
