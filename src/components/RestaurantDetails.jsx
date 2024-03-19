import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "./config";
import Shimmer from "./Shimmer";


const RestaurantDetails = () => {
  const params = useParams();
  const { id } = params;

  const [restaurantDetails, setRestaurantDetails] = useState(null);
  // const {id} = useParams;

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=418151&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json.data?.cards[0]?.card?.card?.info);
    setRestaurantDetails(json?.data?.cards[0]?.card?.card?.info);
  }


  return (!restaurantDetails) ? <Shimmer /> : (
    <>
      <div class="menu">
        <h2>Restauarant id: {id}</h2>
        <h3>Restaurant Name: Chandu</h3>
        <img src={IMG_URL + restaurantDetails.cloudinaryImageId} />
        <h3>{restaurantDetails?.areaName}</h3>
        <h3>{restaurantDetails?.city}</h3>
        <h3>{restaurantDetails?.avgRating} stars</h3>
        <h3>{restaurantDetails?.costForTwoMessage}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          <li>
            {Object.values(restaurantDetails?.menu?.items).map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </li>
        </ul>
      </div>
    </>
  );
};

export default RestaurantDetails;
