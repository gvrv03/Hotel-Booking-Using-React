import React from "react";

function Navbar({ setcurPage }) {
  return (
    <header className="text-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <img
          src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_booking/27c8d1832de6a3123b6ee45b59ae2f81b0d9d0d0.png"
          alt=""
        />
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <button
            onClick={(e) => {
              setcurPage(1);
            }}
            className="mr-5 hover:text-gray-200 text-gray-300 font-semibold "
          >
            Home
          </button>
          <button
            onClick={(e) => {
              setcurPage(2);
            }}
            className="mr-5 hover:text-gray-200 text-gray-300 font-semibold "
          >
            My Hotels
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
