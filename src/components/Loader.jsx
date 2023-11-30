/* -------------------------------------------------------------- */
/*                           DEPENDENCIES                         */
/* -------------------------------------------------------------- */
// Packages
import { motion } from 'framer-motion';

// Framer motion variables
const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                repeat: Infinity,
                duration: 0.5,
            },
            y: {
                repeat: Infinity,
                duration: 0.25,
                ease: 'easeInOut'
            }
        }
    }
}

/* -------------------------------------------------------------- */
/*                         LOADER COMPONENT                       */
/* -------------------------------------------------------------- */
const Loader = () => {
    /* *********************** RENDERING ************************ */
    return (
      <>
        <motion.div
            className='loader'
            variants={loaderVariants}
            animate='animationOne'
        ></motion.div>
      </>
    )
  }
  
export default Loader;