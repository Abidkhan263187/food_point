import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/action";

const ModalPopup = ({ setIsOtherRestaurant }) => {
  const dispatch = useDispatch();

  const clearCartItems = () => {
    dispatch(clearCart());
    setIsOtherRestaurant(false);
  };

  const handleOnClose = (e) => {
    if (e.target.id === "modalBlurPortion") setIsOtherRestaurant(false);
  };

  return (
    <div
      id="modalBlurPortion"
      onClick={(e) => handleOnClose(e)}
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{ backdropFilter: "blur(8px)" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-sm">
        <div className="modal-content p-3 rounded shadow">
          <div className="modal-header">
            <h5 className="modal-title text-align-center">Reset Cart?</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setIsOtherRestaurant(false)}
            ></button>
          </div>
          <div className="modal-body">
            <p className="mb-4">
              Your cart contains items from other restaurants. Would you like
              to reset your cart for adding items from this restaurant?
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary mx-2"
              data-bs-dismiss="modal"
              onClick={() => setIsOtherRestaurant(false)}
            >
              No
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={clearCartItems}
            >
              Yes, Start Fresh
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPopup;
