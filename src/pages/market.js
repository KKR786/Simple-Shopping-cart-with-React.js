import React from 'react';
import productsInfo from '../products';
import Items from './items';
import Slideshow from './slideshow';

function Market(props) {
  const {onAdd} = props;
  const [ss,setSS] = React.useState(true);
  const [main, setmain] = React.useState("main");
  const [all, setall] = React.useState(false);
  const [food, setfood] = React.useState(false);
  const [elec,setelec] = React.useState(false);

  const closeBTN = () => {
    setall(false);
    setmain("main");
    if((food===false)&&(elec===false)) {
      setSS(true);
    }
  }

  return (
    <main id={main}>
      {ss &&
        <Slideshow></Slideshow>
      }
      
      <hr/>
      <div className='productBtn'>
        <button id='headBtn' onClick={()=> {setall(true);setmain("upmain");setSS(false);}}>☰ Products Catagory</button>&nbsp;&nbsp;
        {/*<button id='headBtn' onClick={()=> {setfood(true);setelec(false);}}>Food</button>&nbsp;&nbsp;
        <button id='headBtn' onClick={()=> {setelec(true);setfood(false);}}>Electronics</button>*/}
      </div>

      {all &&
        <div className="sidebar">
          <div  id = "closebtn" onClick={closeBTN}>×</div>
          <div  id = 'side' onClick={()=> {setfood(true);setelec(false);}}>Food</div>
          <div  id = 'side' onClick={()=> {setelec(true);setfood(false);}}>Electronics</div>
        </div>
      }

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