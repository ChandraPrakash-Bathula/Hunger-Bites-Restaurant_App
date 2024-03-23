import { restaurantList } from "./config";
import Foodcard from "./FoodCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const BodyComponent = () => {
  //searchText is a local state variable.
  const [allRestaurants, setAllRestaurants] = useState([]);
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
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); //optional chaining checks if it is present.
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); //optional chaining checks if it is present.
  }

  /* conditional rendering : 
  If restaurant data is empty then render shimmer UI else actual UI. */

  /* This can even be written as const searchInput = useState();
  const [searchTxt,setSearchTxt] = searchInput */

  const online = useOnline();

  if (!online) {
    return <h1>🔴 No Internet Bro.</h1>;
  }

  if (!allRestaurants) return <h2>No Data Found</h2>;
  if (!filteredRestaurants) return <h3>No Data Found</h3>;

  return allRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-2 my-2 flex justify-end">
        <div className="">
          <input
            type="text"
            className="p-2 rounded-md bg-white border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 "
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="p-2 m-2 bg-sky-600 text-white rounded-md hover:bg-sky-900"
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
        <h2>{searchText ? "You are searching for : " + searchText : ""}</h2>
      </div>
      <div className="flex flex-wrap pl-6 ">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <Foodcard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;

/* e.target.value is nothing but whatever we type in the input box.
What is State? What is Hook? What is useState? 
Hooks are just functions written by the developers at meta and gives us specific functionality. 
This use state is used to create state variables. This functions returns an array and the first item in the array is the variable name.
In React we create variables like this const [variable name] = useState();
Ex : In JS const searchText = "KFC"; in JSX  const [searchText] = useState("Biryani"); */
