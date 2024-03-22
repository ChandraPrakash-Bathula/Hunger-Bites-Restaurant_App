import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "./config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantDetails = () => {
  const params = useParams(); // const {id} = useParams;
  const { id } = params;
  // const [restaurantDetails, setRestaurantDetails] = useState(null);

  const restaurantDetails = useRestaurant(id);

  if (restaurantDetails == null) return <Shimmer />;
  
  const { name, cuisines, costForTwoMessage } =
    restaurantDetails.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurantDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card;

  return (
    <>
      <div className="menu">
        <h1>Restaurant Name: {name}</h1>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwoMessage}</h4>
      </div>
      <div>
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item?.card?.info?.name} - {"Rs."}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurantDetails;
