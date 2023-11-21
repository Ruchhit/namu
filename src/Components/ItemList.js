import { CDN_LINK } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const handleAddItem = (items)=>{
        dispatch(addItems(items));
    }
    return (
        <div>
          {items.map((item) => (
            <div
              key={item.card.info.id}
              className="p-2 m-2 border-gray-200 border-b-black text-left flex justify-between"
            >
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
                <p className="text-xs">{item.card.info && item.card.info.description}</p>
              </div>
              <div className="relative">
                <img
                  className="rounded-lg w-140 h-auto shadow-xl shadow-black"
                  src={CDN_LINK + (item.card.info && item.card.info.imageId)}
                  alt={item.card.info && item.card.info.name}
                />
                <button
                  className="absolute bottom-0 mt-2 mx-16 p-2 rounded-lg bg-black text-white "
                  onClick={() => handleAddItem(item)}
                >
                  ADD+
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    };
    
    export default ItemList;
  