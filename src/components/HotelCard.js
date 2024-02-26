import React, { useState } from "react";
import DetailModal from "./DetailModal";

const HotelCard = ({
  name,
  location,
  description,
  rating,
  pricePerNight,
  numberOfRooms,
  images,
  thumbnail,
}) => {
  const [stateShow, setstateShow] = useState(false);
  const [currentData, setcurrentData] = useState({});
  return (
    <div className="  text-white bg-gray-900 rounded-sm">
      <img
        className="w-full rounded-sm "
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/200738810.jpg?k=6354378e511f6ce9da60591dd771f9f338494cc57d002f0fd61ce63003b614dc&o=&hp=1"
        alt=""
        srcset=""
      />
      <div className="p-5">
        <div className="font-semibold mb-2 justify-between flex gap-2   text-sm text-gray-400">
          <div className="flex gap-2">
            <i class="uil uil-map-pin-alt"></i>
            <p>{location}</p>{" "}
          </div>
          <div className="flex gap-2">
            <i className=" uil uil-star " />
            <p>{rating}</p>
          </div>
        </div>
        <p className="font-bold  text-gray-200  ">{name}</p>
        <p className="font-semibold text-sm mt-2 ">₹{pricePerNight}/ Night</p>

        <button
          onClick={() => {
            setstateShow(true);
          }}
          className="p-2 w-full bg-gray-700 mt-5 rounded-md"
        >
          View Details
        </button>

        <DetailModal
          name={name}
          location={location}
          description={description}
          rating={rating}
          pricePerNight={pricePerNight}
          numberOfRooms={numberOfRooms}
          images={images}
          thumbnail={thumbnail}
          stateShow={stateShow}
          currentData={currentData}
          setstateShow={setstateShow}
        />
      </div>
    </div>
  );
};

export default HotelCard;
