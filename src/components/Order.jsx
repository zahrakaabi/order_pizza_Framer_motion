/* -------------------------------------------------------------- */
/*                           DEPENDENCIES                         */
/* -------------------------------------------------------------- */
// Packages
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const containerVarients = {
  hidden: { //we can name it whatever its just make sense to name it hidden
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4, // the less the quicker
      damping: 8,
      when: 'beforeChildren', // apply it before children animation
      staggerChildren: 0.4 // in seconds
    }
  }
}

const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'tween',
      stiffness: 120
    }
  }
}

/* -------------------------------------------------------------- */
/*                          ORDER COMPONENT                       */
/* -------------------------------------------------------------- */
const Order = ({ pizza }) => {
  // States
  const [showTitle, setShowTitle] = useState(true);

  // Fn
  setTimeout(() => {
    setShowTitle(false);
  }, 4000) // use animatePresence to animate elements off the page

  /* ************************ RENDERING ************************* */
  return (
    <motion.div
      className="container order"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {showTitle && <motion.h2 exit={{ y: -1000 }}> Thank you for your order :) </motion.h2>}
      </AnimatePresence>
      <motion.p variants={childVariants}> You ordered a {pizza.base} pizza with: </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;