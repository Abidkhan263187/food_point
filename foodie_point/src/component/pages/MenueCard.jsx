import React, { useState } from "react";
import { BiRupee } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import AlternateMenuImg from "../images/food-alternate-img.jpg";
import { addRestaurantInfo, addToCart } from "../redux/action";
import ModalPopup from "./ModalPopup";
import Button from "react-bootstrap/Button";
import { Spinner } from "react-bootstrap";


const menuImgUrl =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/";

export const MenueCard = ({
  menu,
  currentRestaurantInfo,
  menuSearchInput,
}) => {
  const dispatch = useDispatch();
  const { restaurantInfo } = useSelector((store) => store);
  const [isOtherRestarurant, setIsOtherRestaurant] = useState(false);
 console.log(menu)
  return (
    <>
      {isOtherRestarurant && (
        <ModalPopup setIsOtherRestaurant={setIsOtherRestaurant} />
      )}

      { menu.length > 0 ? (
        menu
          .filter(({ card }) =>
            card?.info?.name.toLowerCase().includes(menuSearchInput.toLowerCase())
          )
          .map(({ card }) => {
            const { id, name, price, imageId, description } = card.info;

            return (
              <><div
                    key={id}
                    className="menu-card d-flex justify-content-between p-3 mb-6 "

                >

                    <div className="menu-details d-flex flex-column justify-content-between ">
                        <div>
                            <h5 className="h6 mb-1 text-start text-danger">{name && name}</h5>
                            <p className="menu-description text-muted text-start">
                                {description && description}
                            </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-start gap-2 ">
                            <div className="d-flex align-items-center">
                                <BiRupee className="menu-price-icon" style={{ color: "green" }} />
                                <p className="menu-price m-0 ">
                                   <strong>{ (price / 100 || 200).toFixed(0)}</strong> 
                                </p>
                            </div>
                            <Button
                                variant="success"
                                className="add-button"
                                onClick={() => {
                                    if (restaurantInfo.length === 0 ||
                                        (restaurantInfo.name === currentRestaurantInfo.name &&
                                            restaurantInfo.locality === currentRestaurantInfo.locality)) {
                                        dispatch(addToCart(card.info));
                                        dispatch(addRestaurantInfo(currentRestaurantInfo));
                                       
                                    } else {
                                        setIsOtherRestaurant(true);
                                    }
                                } }
                            >
                                Add
                            </Button>
                        </div>
                    </div>
                    <div className="menu-image">
                        <img
                            src={imageId ? menuImgUrl + imageId : AlternateMenuImg}
                            alt="name"
                            className="img-fluid rounded img-responsive" />
                    </div>
                </div><hr /></>
            );
          })
      ): menu.length !==0 ? (
        <Spinner animation="border" variant="danger" /> 
      ): <h3>No menu card</h3> }
    </>
  );
};


