/* -------------------------------------------------------------- */
/*                           DEPENDENCIES                         */
/* -------------------------------------------------------------- */
// Packages
import { useEffect } from 'react';
import { motion } from 'framer-motion';

// Framer motion variables
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
const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);

  /* ************************ RENDERING ************************* */
  return (
    <motion.div
      className="container order"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
    >
      <h2> Thank you for your order :) </h2>
      <motion.p variants={childVariants}> You ordered a {pizza.base} pizza with: </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;