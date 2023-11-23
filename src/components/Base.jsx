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

const nextVariants = {
  hidden: {
    x: '-100vw'
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 120
    }
  }
}

/* -------------------------------------------------------------- */
/*                          BASE COMPONENT                        */
/* -------------------------------------------------------------- */
const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  /* ************************ RENDERING ************************* */
  return (
    <motion.div
      className="base container"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li 
              key={base}
              onClick={() => addBase(base)}
              whileHover={{
                scale: 1.1,
                originX: 0, //scale originally is more in the left so to fix it use X
                color: '#f8e112',
                transition: { duration: 1 }
              }}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          variants={nextVariants}
          /*initial="hidden"
          animate="visible"*/ //=> they are automatically inherited from the parent
        >
          <Link to="/toppings">
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
                textShadow: '0px 0px 8px rgb(255,255,255)',
                boxShadow: '0px 0px 8px rgb(255,255,255)'
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;