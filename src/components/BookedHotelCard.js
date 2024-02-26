import moment from "moment/moment";
import React, { useState } from "react";
import DetailModal from "./DetailModal";

const BookedHotelCard = ({
  name,
  location,
  rating,
  pricePerNight,
  removeHotel,
  StayInfo,
}) => {
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
        <p className="font-bold  text-gray-300  ">{name}</p>
        <div className="flex justify-between">
          <p className="font-semibold text-sm text-gray-400 mt-2 ">
            ₹{pricePerNight}/ Night
          </p>
          <p className="font-semibold text-sm text-gray-400 mt-2 ">
            Rooms : {StayInfo?.noOfRooms}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-semibold text-sm text-gray-400 mt-2 ">
            {moment(StayInfo?.stayDate).format("MMM Do YY")}
          </p>
          <p className="font-semibold text-sm text-gray-400 mt-2 ">---to---</p>
          <p className="font-semibold text-sm text-gray-400 mt-2 ">
            {moment(StayInfo?.leaveDate).format("MMM Do YY")}
          </p>
        </div>
        <p className="font-semibold text-sm mt-2 ">
          Total Cost : ₹{pricePerNight * StayInfo?.noOfRooms}/ Night
        </p>
        <button
          onClick={removeHotel}
          className="p-2 w-full bg-gray-700 mt-5 rounded-md"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default BookedHotelCard;
