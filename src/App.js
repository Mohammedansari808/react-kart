import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Amazon from './components/Amazon';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([])
  const [warning, setWarning] = useState(false)
  const handleClick = (item) => {
    let Present = false;

    cart.forEach((Product) => {
      if (item.id === Product.id) {
        Present = true
      }
    })
    if (Present) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false)
      }, 2000)
      return
    }
    setCart([...cart, item])
  }
  return (



    <React.Fragment>
      {
        show ? <Amazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} />
      }


      <Navbar size={cart.length} setShow={setShow} />
      {warning && <div className="warning-alert">Already added to the kart</div>}

    </React.Fragment>

  );

}










export default App;
