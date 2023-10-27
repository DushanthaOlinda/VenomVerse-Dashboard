"use client";
import React, {useContext} from "react";
import MainHeader from "/components/MainHeader";
import Link from "next/link";
import {AiOutlineHome, AiOutlineLogout} from "react-icons/ai"
import {FaAngleRight} from "react-icons/fa"
import {SiHelpscout } from "react-icons/si"
import {FiPhoneCall} from "react-icons/fi"
import {MenuContext} from "/context/MenuContext";
import {MdManageAccounts} from "react-icons/md"
import {BiSolidReport} from "react-icons/bi"
import {FaHistory} from "react-icons/fa"

const MainLayout = ({children}) => {
    const {open} = useContext(MenuContext);
    return (
        <div className={"bg-gray-100 w-screen min h-screen p-4 "}>
            <MainHeader />
            <div className= " justify-start items-start pt-10 ">
                {/*<aside className= "bg-white rounded-lg w-60 p-4">*/}
                <aside className={`fixed mt-10 bg-green-800 text-green-100 rounded-lg overflow-hidden lg:w-60 lg:p-4 h-screen`}>
                    <ul className="py-3">
                        <li className="flex justify-start items-center hover:bg-green-300 hover:text-green-800 rounded-xl p-2">
                            <AiOutlineHome className="mr-2" />
                            <Link href={" /dashboard "} className="flex-1">Dashboard</Link>
                            <FaAngleRight />
                        </li>
                        <li className="flex justify-start items-center hover:bg-green-300 hover:text-green-800 rounded-xl p-2">
                            <MdManageAccounts className="mr-2" />
                            <Link href="/accounts" className="flex-1">Profiles</Link>
                            <FaAngleRight />
                        </li>
                        <li className="flex justify-start items-center hover:bg-green-300 hover:text-green-800 rounded-xl p-2">
                            <BiSolidReport className="mr-2" />
                            <Link href="/reports" className="flex-1">Reports</Link>
                            <faAngleRight />
                        </li>
                        <li className="flex justify-start items-center hover:bg-green-300 hover:text-green-800 rounded-xl p-2">
                            <FaHistory className="mr-2" />
                            <Link href="/quiz" className="flex-1">Quiz History</Link>
                            <FaAngleRight />
                        </li>
                        <li className="flex justify-start items-center hover:bg-green-300 hover:text-green-800 rounded-xl p-2">
                            <SiHelpscout className="mr-2" />
                            <Link href="/about-us" className="flex-1">About Us</Link>
                            <FaAngleRight />
                        </li>
                        <li className="flex justify-start items-center hover:bg-green-300 hover:text-green-800 rounded-xl p-2">
                            <FiPhoneCall className="mr-2" />
                            <Link href="/contact-us" className="flex-1">Contact Developers</Link>
                            <FaAngleRight />
                        </li>
                        <li className="flex justify-start items-center hover:bg-green-300 hover:text-green-800 rounded-xl p-2">
                            <AiOutlineLogout className="mr-2" />
                            <Link href="/" className="flex-1">Log out</Link>
                            <FaAngleRight />
                        </li>
                    </ul>
                </aside>
                <main className="flex-1">{children}</main>
            </div>
            <hr />
        </div>
    );
}

export default MainLayout;