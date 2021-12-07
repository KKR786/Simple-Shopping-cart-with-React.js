import {useState} from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Cart from './pages/cart';
import Market from './pages/market';
import productsInfo from './products';
import Search from './pages/search';

function App() {
  const {products} = productsInfo;
  const [cartItems, setCartItems] = useState([]);
  const [Find,setFind] = useState('');
  const [searchItem, setSearchItem] = useState('');

  const search = () => {
    console.log(Find);
    setSearchItem(Find);
  };

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
            <div style={{marginLeft: '10px'}}>
              <Link to = "/"><h1>Market Place</h1></Link>
            </div>
            <div id='search'>
              <input type = 'text' placeholder = 'Product Name' onChange={(e)=>{setFind(e.target.value)}}/>
              <Link to="/search"><button onClick={search}><i class="fa fa-search"></i></button></Link>
            </div>
            <div style={{marginRight: '10px'}}>
              <Link to="/cart"><h2>Cart{' '}
                {cartItems.length ? (<button className="badge">{cartItems.length}</button>) : ('')}</h2>
              </Link>
            </div>
        </header>
        <hr/>
        <Routes>
            <Route exact path="/" element = {<Market products={products} onAdd={onAdd}/>}/>
            <Route exact path="/search" element = {<Search onAdd={onAdd} searchItem={searchItem}/>}/>
            <Route exact path="/cart" element = {<Cart 
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}/>}    
            />
        </Routes> 
      </Router>

      <hr style={{'marginTop':'3rem'}}/>
      <footer id = 'footer'>
        <h1 style={{'textAlign':'center'}}>MarketPlace</h1>
        <p style={{'textAlign':'center','color':'wheat'}}>It's a e-commarce website, made with frontend technology.</p>
      </footer>
    </div>
  );
}

export default App;
