import React from 'react';

function Items(props) {
  const {item,onAdd} = props;
  return (
    <div className="pos">
      <img id = "pic" src = {item.image} alt = {item.name} />
      <h3>{item.name}</h3>
      <div id="price">{item.price} Tk</div>
      <div id="btn_pos">
        <button id="cartBtn" onClick = {() => onAdd(item)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Items;