"use client";
import React, {useContext} from "react";
import {FaBars} from "react-icons/fa"
import {MenuContext} from "/context/MenuContext";
import Image from "next/image";

const MainHeader = () => {
    const {toggle} = useContext(MenuContext);
  return (
    <div  className={"fixed top-1 bottom-0 left-0 right-0 bg-green-800 flex justify-between items-center px-4 h-20 mb-4"}>
        <Image width={300} height={300}
               src={'/images/LOGO.png'}
               alt={"Logo"}
               className="w-16 h-auto transition duration-300 hover:backdrop-filter-none hover:grayscale-0"
        />
        <h1 className={"text-3xl text-green-100"} >VenomVerse Admin Panel</h1>
    </div>
  );
}

export default MainHeader;