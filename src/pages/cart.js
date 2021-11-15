function Cart(props) {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const shippingPrice = 50;
    const totalPrice = itemsPrice + shippingPrice;
    
    return (
        <div id="main">
            <div>
                <h2 id='title'>Shopping Cart</h2>
            </div>
            <hr/>
            <div>
                {cartItems.length === 0 && <div id='empty'>Cart is Empty</div>}
                {cartItems.map((item) => (
                    <div key={item.id} className="col-2">
                        <div className="col-1"><h2>{item.name}</h2></div>
                        <div className="col-1">
                            <button onClick={() => onRemove(item)} className="remove">
                                -
                            </button>
                            {' '}<strong>{item.qty}</strong>{' '}  
                            <button onClick={() => onAdd(item)} className="add">
                                +
                            </button>
                        </div>

                        <div className="col-2">
                            <h2>{item.price.toFixed(2)}Tk</h2>
                        </div>
                    </div>
                ))}

                {cartItems.length !== 0 && (
                    <>
                        <hr></hr>
                        <div className="col-2">
                            <div>Items Price</div>
                            <div>{itemsPrice.toFixed(2)} Tk</div>
                        </div>

                        <div className="col-2">
                            <div>Shipping Cost</div>
                            <div>{shippingPrice.toFixed(2)} Tk</div>
                        </div>

                        <div className="col-2">
                            <strong>Total Price</strong>
                            <strong>{totalPrice.toFixed(2)} Tk</strong>
                        </div>
                        <hr />
                        <div>
                            <button id="checkout" onClick={() => alert('Pay '+totalPrice.toFixed(2)+' Taka.\n Thank You')}>CHECKOUT</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Cart;