/* -------------------------------------------------------------- */
/*                           DEPENDENCIES                         */
/* -------------------------------------------------------------- */
// Packages
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVarients = {
  hidden: { //we can name it whatever its just make sense to name it hidden
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      stiffness: 120,
      duration: 1.2
    }
  }
}

/* -------------------------------------------------------------- */
/*                         TOPPINGS COMPONENT                     */
/* -------------------------------------------------------------- */
const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  /* ************************ RENDERING ************************* */
  return (
    <motion.div
      className="toppings container"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
    >  
      <h3>Step 2: Choose Toppings</h3>
      
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={{
                scale: 1.1,
                originX: 0, //scale originally is more in the left so to fix it use X
                color: '#f8e112',
                transition: { duration: 1 }
              }}
            >
              <motion.span className={spanClass}> { topping } </motion.span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 1 },
            textShadow: '0px 0px 8px rgb(255,255,255)',
            boxShadow: '0px 0px 8px rgb(255,255,255)'
          }}
        >
          Order
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Toppings;