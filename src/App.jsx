/* -------------------------------------------------------------- */
/*                           DEPENDENCIES                         */
/* -------------------------------------------------------------- */
// Packages
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';

// UI Local Components
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import Modal from './components/Modal';

/* -------------------------------------------------------------- */
/*                           APP COMPONENT                        */
/* -------------------------------------------------------------- */
function App() {
  // States
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState(false);

  // Variables
  let location = useLocation();

  // Fn
  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }
  
  const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  /* ************************ RENDERING ************************* */
  return (
    <>
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence mode="wait" onExitComplete={() => setShowModal(false)}>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/base" element={<Base addBase={addBase} pizza={pizza} />} />
          <Route path="/toppings" element={<Toppings addTopping={addTopping} pizza={pizza} />} />
          <Route path="/order" element={<Order pizza={pizza} setShowModal={setShowModal} />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;