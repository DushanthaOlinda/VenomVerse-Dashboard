"use client";
import React, {useContext} from "react";
import MainHeader from "/components/MainHeader";
import Link from "next/link";
import {AiOutlineHome, AiOutlineLogout} from "react-icons/ai"
import {FaAngleRight} from "react-icons/fa"
import {SiHelpscout } from "react-icons/si"
import {MenuContext} from "/context/MenuContext";
import {MdManageAccounts} from "react-icons/md"
import {BiSolidReport} from "react-icons/bi"
import {FaHistory} from "react-icons/fa"
import {GiArtificialHive} from "react-icons/gi";

const MainLayout = ({children}) => {
    const dashboard = () => {
        window.location.href = "/dashboard";
    };
    const accounts = () => {
        window.location.href = "/accounts";
    };
    const reports = () => {
        window.location.href = "/reports";
    };
    const quiz = () => {
        window.location.href = "/quiz";
    };
    const model = () => {
        window.location.href = "/model";
    };
    const aboutUs = () => {
        window.location.href = "/about-us";
    };
    const logout = () => {
        window.location.href = "/";
    };

    const {open} = useContext(MenuContext);
    return (
        <div className={" w-full min h-full p-4 "}>
            <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
                <MainHeader />
            </nav>
            <div className= " justify-start items-start pt-10 ">
                {/*<aside className= "bg-white rounded-lg w-60 p-4">*/}
                <aside className={`fixed mt-10 bg-green-800 text-green-100 rounded-lg overflow-hidden lg:w-60 lg:p-4 h-screen`}>
                    <ul className="py-3">
                        <li className="flex justify-start items-center hover:bg-green-300 hover:text-green-800 rounded-xl p-2" onClick={dashboard}>
                            <AiOutlineHome className="mr-2" />
                            <Link href={" /dashboard "} className="flex-1">Dashboard</Link>
                            <FaAngleRight />
                        </li>
                        <li className="flex justify-start items-center hover:bg-green-300 hover:text-green-800 rounded-xl p-2" onClick={accounts}>
                            <MdManageAccounts className="mr-2" />
                            <Link href="/accounts" className="flex-1">Profiles</Link>
                            <FaAngleRight />
                        </li>
                        <li className="flex justify-start items-center hover:bg-green-300 hover:text-green-800 rounded-xl p-2" onClick={reports}>
                            <BiSolidReport className="mr-2" />
                            <Link href="/reports" className="flex-1">Reports</Link>
                            <FaAngleRight />
                        </li>
                        <li className="flex justify-start items-center hover:bg-green-300 hover:text-green-800 rounded-xl p-2" onClick={quiz}>
                            <FaHistory className="mr-2" />
                            <Link href="/quiz" className="flex-1">Quiz History</Link>
                            <FaAngleRight />
                        </li>
                        <li className="flex justify-start items-center hover:bg-green-300 hover:text-green-800 rounded-xl p-2" onClick={model}>
                            <GiArtificialHive className="mr-2" />
                            <Link href="/model" className="flex-1">Model Info</Link>
                            <FaAngleRight />
                        </li>
                        <li className="flex justify-start items-center hover:bg-green-300 hover:text-green-800 rounded-xl p-2" onClick={aboutUs}>
                            <SiHelpscout className="mr-2" />
                            <Link href="/about-us" className="flex-1">About Us</Link>
                            <FaAngleRight />
                        </li>
                        <li className="flex justify-start items-center hover:bg-green-300 hover:text-green-800 rounded-xl p-2" onClick={logout}>
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