import React from 'react';

function Items(props) {
  const {item,onAdd} = props;
  const [zoom, setZoom] = React.useState(false);

  const zoomImage = () => {
    setZoom(!zoom);
  };

  return (
    <div className="pos">
      <div>
        <img
          id='pic'
          src={item.image}
          onClick={zoomImage}
          alt={item.name}
        />
        {zoom && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={zoomImage}
          >
            <img
              className="image"
              src={item.image}
              onClick={zoomImage}
              alt={item.name}
            />
          </dialog>
        )}
      </div>
      <h3>{item.name}</h3>
      <div id="price">{item.price} Tk</div>
      <div id="btn_pos">
        <button id="cartBtn" onClick = {() => onAdd(item)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Items;