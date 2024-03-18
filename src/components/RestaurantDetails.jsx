import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantDetails = () => {
  const params = useParams();
  const { id } = params;
  // const {id} = useParams;

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=418151&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
  }

  return (
    <>
      <div>
        <h2>Restauarant id: {id}</h2>
        <h3>Restaurant Name: Chandu</h3>
      </div>
    </>
  );
};

export default RestaurantDetails;
