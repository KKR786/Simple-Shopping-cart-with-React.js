import React from 'react';
import productsInfo from '../products';
import Items from './items';

function Market(props) {
  const {onAdd} = props;
  const [food, setfood] = React.useState(false);
  const [elec,setelec] = React.useState(false);
  return (
    <main id="main">
      <div className='productBtn'>
        <button id='headBtn' onClick={()=> {setfood(true);setelec(true);}}>All Products</button>&nbsp;&nbsp;
        <button id='headBtn' onClick={()=> {setfood(true);setelec(false);}}>Food</button>&nbsp;&nbsp;
        <button id='headBtn' onClick={()=> {setelec(true);setfood(false);}}>Electronics</button>
      </div>
      {food && 
        <div>
          <div>
            <h2 id='title'>Food</h2>
          </div>
          <hr/>
          <div id="flex">
            {productsInfo.food.map((item) => (
              <Items key={item.id} item={item} onAdd={onAdd}></Items>
            ))}
          </div>
        </div>
      }

      {elec && 
        <div>
          <div>
            <h2 id='title'>Electronics</h2>
          </div>
          <hr/>
          <div id="flex">
            {productsInfo.electronics.map((item) => (
              <Items key={item.id} item={item} onAdd={onAdd}></Items>
            ))}
          </div>
        </div>
      }
    </main>
  )
}

export default Market;