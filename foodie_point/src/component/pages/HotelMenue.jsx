import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export const HotelMenue = (id) => {
  const [data, setData] = useState({
    menu: [],
    restaurantInfo: [],
    menuError: "",
  });

  const { lati, long } = useSelector((store) => store);

  //   fetching menu of restaurant with the obtained latitude, longitude and params id (restaurant id)
  useEffect(() => {
    const fetchRestaurantMenu = async () => {
      try {
        let restaurantmenu_api = `https://corsproxy.io/?${process.env.REACT_APP_MENUE}?page-type=REGULAR_MENU&complete-menu=true&lat=${lati}&lng=${long}&restaurantId=${id}&submitAction=ENTER`;

        const response = await axios.get(restaurantmenu_api);
        const menuData = response.data.data?.cards?.find(
          (card) => card.groupedCard
        );

        const newMenu = menuData?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        const newRestaurantInfo =response.data.data?.cards[0]?.card?.card?.info;

        setData((prevData) => ({
          menu: newMenu || prevData.menu,
          restaurantInfo: newRestaurantInfo || prevData.restaurantInfo,
        }));
      } catch (error) {
        setData((prevData) => ({
          menuError: error.message || prevData.menuError,
        }));
      }
    };

    fetchRestaurantMenu();
  }, [lati, long]);

  return data;
};


