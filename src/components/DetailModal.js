import React, { useState } from "react";
import { toast } from "react-hot-toast";

const DetailModal = ({
  name,
  location,
  description,
  rating,
  pricePerNight,
  numberOfRooms,
  images,
  thumbnail,
  stateShow,
  setstateShow,
}) => {
  const [loading, setLoading] = useState(false);
  const [stayDate, setstayDate] = useState("");
  const [leaveDate, setleaveDate] = useState("");
  const [noOfRooms, setnoOfRooms] = useState("");

  const handleBookedHotel = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!stayDate || !leaveDate || !noOfRooms) {
      setLoading(false);
      return toast.error("Fill all the fields");
    }
    // Retrieve hotels array from localStorage or initialize an empty array if it doesn't exist
    let hotels = JSON.parse(localStorage.getItem("hotels")) || [];

    // Check if the hotel already exists in the hotels array
    const hotelExists = hotels.some(
      (hotel) =>
        hotel.name === name &&
        hotel.location === location &&
        hotel.description === description &&
        hotel.rating === rating &&
        hotel.pricePerNight === pricePerNight &&
        hotel.numberOfRooms === numberOfRooms &&
        JSON.stringify(hotel.images) === JSON.stringify(images) &&
        hotel.thumbnail === thumbnail
    );

    if (!hotelExists) {
      hotels.push({
        name,
        location,
        description,
        rating,
        pricePerNight,
        numberOfRooms,
        images,
        thumbnail,
        StayInfo: {
          stayDate,
          leaveDate,
          noOfRooms,
        },
      });
      localStorage.setItem("hotels", JSON.stringify(hotels));
      toast.success("Hotel booked Successfully");
    } else {
      toast.error("Hotel already booked");
    }
    setLoading(false);
  };

  return (
    <div
      className={` ${
        stateShow ? "" : "hidden"
      } w-full fixed top-0  h-screen left-0  grid place-items-center`}
    >
      <div
        onClick={() => {
          setstateShow(false);
        }}
        className="opacity-30 bg-black w-full h-full absolute "
      />
      <div className="bg-gray-900 p-10  w-full md:w-[50%]  absolute bottom-0 md:bottom-auto   rounded-md ">
        <h3 className=" font-bold text-2xl">{name}</h3>{" "}
        <p className="  text-gray-300 mt-5  text-2xl">{description}</p>{" "}
        <div className="mt-2">
          <p>Per Night : {pricePerNight}</p>{" "}
          <p>No. of rooms : {numberOfRooms}</p>{" "}
        </div>
        <div className="flex gap-5 md:flex-row flex-col mt-5">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-gray-500 font-semibold">
              {" "}
              Stay Date & Time
            </label>
            <input
              className="object-none bg-transparent p-2 border w-full  rounded-md  border-gray-800 text-white"
              type="datetime-local"
              onChange={(e) => {
                setstayDate(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-gray-500 font-semibold">
              {" "}
              Leave Date & Time
            </label>
            <input
              className="object-none bg-transparent p-2 border w-full  rounded-md  border-gray-800 text-white"
              type="datetime-local"
              onChange={(e) => {
                setleaveDate(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-gray-500 font-semibold"> No. of Rooms</label>
            <input
              className="object-none bg-transparent p-2 border w-full  rounded-md  border-gray-800 text-white"
              type="number"
              placeholder="Ex: 5"
              onChange={(e) => {
                setnoOfRooms(e.target.value);
              }}
            />
          </div>
        </div>
        <button
          onClick={handleBookedHotel}
          type="submit"
          className="hover:bg-gray-800 w-full mt-5 bg-gray-950 p-3 rounded-md font-semibold"
          disabled={loading}
        >
          {loading ? "Loading..." : "Book Now"}
        </button>
      </div>
    </div>
  );
};

export default DetailModal;
