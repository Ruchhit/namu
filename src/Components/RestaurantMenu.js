import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  return (
    <>
      {resInfo ? (
        <div className="menu">
        <h1>MENU</h1>
          {resInfo && resInfo.map((items) => {
              return (
                <div key={items.card.info.name}>
                  <ul>
                    <li>{items.card.info.name} - {"RS."}{items.card.info.price /100}</li>
                  </ul>
                </div>
              );
            })}
        </div>
      ) : (
        <h1>LOADING....</h1>
      )}
    </>
  );
};
export default RestaurantMenu;