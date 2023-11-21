import { UseSelector, useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { CDN_LINK } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
       <div className="text-center m-4 ml-72 p-2 bg-slate-300 w-6/12 justify-center">
       <h1 className="text-xl font-bold">CART</h1>
        <button onClick={handleClearCart} className="font-medium bg-black text-white rounded-lg p-2 mt-4">Clear Cart</button>
        {cartItems.length === 0 && <h1> Cart is Empty!!!</h1>}
       </div>
       
       {/* <ItemList items = {cartItems}/> */}

    {/* same as ItemList */}
        <div className="bg-slate-300 w-6/12 ml-72">
          {cartItems.map((item) => (
            <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-black text-left flex justify-between">
              <div className="w-9/12">
                <div className="py-2 font-bold">
                  <span>{item.card.info && item.card.info.name}</span>
                  <span>
                    - Rs.
                    {item.card.info
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </span>
                </div>
                <p className="text-xs">
                  {item.card.info && item.card.info.description}
                </p>
              </div>
              <div className="relative">
                <img
                  className="rounded-lg w-140 h-auto shadow-xl shadow-black"
                  src={CDN_LINK + (item.card.info && item.card.info.imageId)}
                  alt={item.card.info && item.card.info.name}
                />
              </div>
            </div>
          ))}
        </div>
    </div>
     
  );
};
export default Cart;
