import React, { useState } from "react";
import { hotelsData } from "./hotelsData";
import HostelCard from "./components/HotelCard";
import { Toaster } from "react-hot-toast";
import MyHotels from "./pages/MyHotels";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  const [curPage, setcurPage] = useState(1);
  return (
    <>
      <Navbar setcurPage={setcurPage} />
      <Toaster position="top-center" reverseOrder={false} />
      {curPage === 1 ? <Home /> : <MyHotels />}
    </>
  );
};

export default App;
