import React from 'react';
import productsInfo from '../products';
import Items from './items';

export default function Search(props) {
    const {searchItem, onAdd} = props;
    const [food, setfood] = React.useState(false);
    const [elec,setelec] = React.useState(false);
    
    React.useEffect(()=>{
        if(searchItem.toLowerCase() === "food") {
            setfood(true);
            setelec(false);
        }
        else if(searchItem.toLowerCase() === 'electronics') {
            setelec(true);
            setfood(false);
        }else {
            
            setfood(false);
            setelec(false);
        }
    },[searchItem]);
    return (       
        <main id='find'>
            {!food && !elec && <h2 style={{'text-align':'center'}}>No Items Found.</h2>}
            {food &&
                <div>
                    <div>
                        <h2 id='title'>Search results for '{searchItem}'</h2>
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
                    <h2 id='title'>Search results for '{searchItem}'</h2>
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