"use client";
import React, {useEffect, useState} from "react";
import { axiosClient } from "/app/services/axiosClient";
import {groupBy} from "lodash";
import Image from "next/image";

const Reports = () => {

    const [activeTab, setActiveTab] = useState("catcherReport"); // Initial active tab
    const [users, setUsers] = useState([]);
    const [catcherDetails, setCatcherDetails] = useState([]);
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        axiosClient.get("/UserDetail").then((res) => {
            // console.log(res.data);
            setUsers(res.data);
        });
    }, []);

    useEffect(() => {
        axiosClient.get("/Catcher/GetAllApprovedCatchers").then((res) => {
            // console.log(res.data);
            setCatcherDetails(res.data);
        });
    }, []);
    useEffect(() => {
        axiosClient.get("/api/CommunityPost").then((res) => {
            // console.log(res.data);
            setUserPosts(res.data);
        });
    }, []);

    const handleTabSelect = (tab) => {
        setActiveTab(tab);
    };

    const handlePrint = () => {
        const printContents = document.getElementById("printTable").innerHTML;
        const originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        location.reload();
    };
        // Group catchers by district using lodash's groupBy function
        const catchersByDistrict = groupBy(catcherDetails, 'district');

        // Sort districts by the number of catchers in descending order
        const sortedDistricts = Object.entries(catchersByDistrict).sort(
            (a, b) => b[1].length - a[1].length
        );

    const usersPostsMap = {};

// Create a mapping of userId to an array of user posts
    userPosts.forEach((userPost) => {
        const userId = userPost.userId;
        if (!usersPostsMap[userId]) {
            usersPostsMap[userId] = [];
        }
        usersPostsMap[userId].push(userPost);
    });

// Map user objects to include their posts
    const usersWithPosts = users.map((user) => {
        const userId = user.userId;
        return {
            ...user,
            posts: usersPostsMap[userId] || [],
        };
    });
    const usersWithPostsOnly = usersWithPosts.filter((user) => user.posts.length > 0);

    // console.log(usersWithPostsOnly);


    return (
        <div className="pl-64 pt-10">
            <div className="w-auto">
                <ul className="space-y-2 columns-2">
                    <li
                        className={`${
                            activeTab === "catcherReport" ? "bg-emerald-500" : "bg-emerald-700"
                        } p-2 rounded-lg cursor-pointer text-white`}
                        onClick={() => handleTabSelect("catcherReport")}
                    >
                        Catchers
                    </li>
                    <li
                        className={`${
                            activeTab === "usersPosts" ? "bg-emerald-500" : "bg-emerald-700"
                        } p-2 rounded-lg cursor-pointer text-white`}
                        onClick={() => handleTabSelect("usersPosts")}
                    >
                        User Activity
                    </li>
                </ul>
            </div>
            <div className="w-full">
                {activeTab === "catcherReport" && (
                    <div id="printTable">
                        <h1 className="text-3xl font-semibold ml-6 pt-4 mb-4">Approved Catcher Report</h1>
                        {sortedDistricts.map(([district, catchers]) => (
                            <div key={district} className="mb-6">
                                <h2 className="text-xl font-bold">{district}</h2>
                                <ul>
                                    {catchers.map((catcher) => (
                                        <li
                                            key={catcher.reqId}
                                            className="mt-2 border border-gray-300 p-2 rounded-lg"
                                        >
                                            <h3 className="text-lg font-semibold">
                                                {catcher.userFirstName} {catcher.userLastName}
                                            </h3>
                                            <p className="text-sm">
                                                Contact Number : {catcher.contactNo} &ensp; Email :{" "}
                                                {catcher.userEmail} &ensp; NIC : {catcher.nic}
                                            </p>
                                            <p className={"text-sm"}>Address : {catcher.address}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
                {activeTab === "usersPosts" && (
                    <div id="printTable">
                        <h1 className="text-3xl font-semibold ml-6 pt-4 mb-4">Users Activity Report</h1>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {usersWithPosts.map((user) => (
                                <div
                                    key={user.userId}
                                    className="p-4 border rounded-lg shadow-md "
                                >
                                    <div className="text-center mb-2">
                                        <Image
                                            width={300}
                                            height={300}
                                            src={user.profileImage}
                                            alt={`${user.firstName} ${user.lastName}`}
                                            className="w-16 h-16 mx-auto rounded-full"
                                        />
                                    </div>
                                    <h2 className="text-lg font-semibold text-center">
                                        {user.firstName} {user.lastName}
                                    </h2>
                                {/* post count*/}
                                    <p className="text-center text-sm text-gray-500">
                                        {user.posts.length} Posts
                                    </p>
                                {/*  Comments count*/}
                                    <p className="text-center text-sm text-gray-500">
                                        {user.posts.reduce(
                                            (total, post) => total + post.comments.length,
                                            0
                                        )}{" "}
                                        Comments
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div>
            <button
                className="mt-4 mx-6 px-4 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-500"
                onClick={handlePrint}
            >
                Print
            </button>
            </div>
        </div>
    );
};

export default Reports;