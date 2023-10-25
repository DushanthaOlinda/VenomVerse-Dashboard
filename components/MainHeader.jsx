"use client";
import React, {useContext} from "react";
import {FaBars} from "react-icons/fa"
import {MenuContext} from "/context/MenuContext";

const MainHeader = () => {
    const {toggle} = useContext(MenuContext);
  return (
    <div  className={"fixed top-1 bottom-0 left-0 right-0 bg-green-800 flex justify-between items-center px-4 h-20 mb-4"}>
        <div className={"text-3xl text-green-100"} >VenomVerse Admin Panel</div>
        <div className={"flex justify-center items-center gap-3"}>
            <h1 className={"text-lg text-green-100"}>Search</h1>
        </div>
        <div className= " right-6 flex justify-center items-center gap-3">
          <div className={"text-green-100 text-lg"}>
              User Area
          </div>
      </div>
    </div>
  );
}

export default MainHeader;