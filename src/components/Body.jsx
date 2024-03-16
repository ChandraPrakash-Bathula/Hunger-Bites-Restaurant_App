import { restaurantList } from "./config";
import Foodcard from "./FoodCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  const filterData = foodItems.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

const BodyComponent = () => {
  //searchText is a local state variable.
  const [allRestaurants,setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  /* useEffect() has a call back function as it is not called directly, instead it will only called once useEffect is called. and it has a dependency array [] in it.
  in the empty dependency we can have react state variable and this will only calls when they gets changed or called.
 
  syntax : useEffect(() => {any function in here},[any dependency array here]).

  => empty dependency will only called only after initial render but not everytime.
  => If it has an dependency array then it will render after initial render + whenever the function is called or changed.
  */

  /* So, it is a good practice to write API call in useEffect. It is also better to have a initial render, later an API call and a final display of the data. */
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); //optional chaining checks if it is present.
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); //optional chaining checks if it is present.
  }

  /* conditional rendering : 
  If restaurant data is empty then render shimmer UI else actual UI. */

  /* This can even be written as const searchInput = useState();
  const [searchTxt,setSearchTxt] = searchInput */
  
if (!allRestaurants) return <h2>No Data Found</h2>;
if( !filteredRestaurants) return <h3>No Data Found</h3>

  return allRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="searchbar">
        <input
          type="text"
          className="input-search"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="searchBtn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <h2>{searchText ? "You are searching for : " + searchText : ""}</h2>
      </div>
      <div className="card-list">
        {filteredRestaurants.map((restaurant) => {
          return <Foodcard {...restaurant.info} />;
        })}
      </div>
    </>
  );
};

export default BodyComponent;

/* 
e.target.value is nothing but whatever we type in the input box.
What is State? What is Hook? What is useState? 
Hooks are just functions written by the developers at meta and gives us specific functionality. 
This use state is used to create state variables. This functions returns an array and the first item in the array is the variable name.
In React we create variables like this const [variable name] = useState();
Ex : In JS const searchText = "KFC"; in JSX  const [searchText] = useState("Biryani"); */
