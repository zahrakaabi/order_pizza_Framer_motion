/* -------------------------------------------------------------- */
/*                           DEPENDENCIES                         */
/* -------------------------------------------------------------- */
// Packages
import { motion, useCycle } from 'framer-motion';

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
                ease: 'easeOut'
            }
        }
    },
    animationTwo: {
        x: 0,
        y: [0, -40],
        transition: {
            y: {
                repeat: Infinity,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    }
}

/* -------------------------------------------------------------- */
/*                         LOADER COMPONENT                       */
/* -------------------------------------------------------------- */
const Loader = () => {
    const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo');

    /* *********************** RENDERING ************************ */
    return (
      <>
        <motion.div
            className='loader'
            variants={loaderVariants}
            animate={animation}
        ></motion.div>
        <div onClick={() => cycleAnimation()}> Cycle Animation for Loader</div>
      </>
    )
  }
  
export default Loader;