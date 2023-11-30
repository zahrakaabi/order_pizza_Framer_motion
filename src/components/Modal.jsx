/* -------------------------------------------------------------- */
/*                           DEPENDENCIES                         */
/* -------------------------------------------------------------- */
// Packages
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Framer motion variables
const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

const modalVariants = {
  hidden: {
    opacity: 0,
    y: '-100hw'
  },
  visible: {
    opacity: 1,
    y: '200px',
    ttransition: { delay: 0.5 }
  }
}

/* -------------------------------------------------------------- */
/*                          MODAL COMPONENT                       */
/* -------------------------------------------------------------- */
const Modal = ({ showModal }) => {
    /* *********************** RENDERING ************************ */
    return (
        <AnimatePresence mode="wait">
            {showModal && (
                <motion.div
                    className="backdrop"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div
                        className="modal"
                        variants={modalVariants}
                    >
                        <p> Want to make another pizza? </p>
                        <Link to="/"> <button type="button"> Order now </button> </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
export default Modal;