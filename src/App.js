import {useState} from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Cart from './pages/cart';
import Market from './pages/market';
import productsInfo from './products';

function App() {
  const {products} = productsInfo;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (item) => {
    const exist = cartItems.find((c) => c.id === item.id);
    if (exist) {
      setCartItems(
        cartItems.map((c) =>
          c.id === item.id ? { ...exist, qty: exist.qty + 1 } : c
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };
  const onRemove = (item) => {
    const exist = cartItems.find((c) => c.id === item.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((c) => c.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((c) =>
          c.id === item.id ? { ...exist, qty: exist.qty - 1 } : c
        )
      );
    }
  };
  return (
    <div className="App">
      <Router>
        <header className="head block">
            <div>
              <Link to = "/"><h1>Market Place</h1></Link>
            </div>
            <div>
              <Link to="/cart"><h2>Cart{' '}
                {cartItems.length ? (<button className="badge">{cartItems.length}</button>) : ('')}</h2>
              </Link>
            </div>
        </header>
        <hr/>
        <Routes>
            <Route exact path="/" element = {<Market products={products} onAdd={onAdd}/>}/>
            <Route exact path="/cart" element = {<Cart 
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}/>}    
            />
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
