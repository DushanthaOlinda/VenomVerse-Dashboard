"use client";
import React, { useEffect, useState } from "react";
import { axiosClient } from "/app/services/axiosClient";
import Link from "next/link";

function UserDetailPage({ params }) {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(null);

    useEffect(() => {

        axiosClient.get("/UserDetail").then((res) => {
            // console.log(res.data);
            const userData = res.data.find(
                (user) => user.userId === parseInt(params.id)
            );
            setUser(userData);
        });
    }, [params.id]);

    useEffect(() => {
        axiosClient.get("/api/CommunityPost").then((res) => {
            // console.log(res.data);
            const postData = res.data.filter(
                (post) => post.userId === parseInt(params.id)
            );
            setPosts(postData);
            console.log(postData);
        });
    }, [params.id]);

    if (!user) {
        return <div className="ml-64 mt-10 bg-amber-100 text-black rounded-lg overflow-hidden max-w-screen ">Loading...</div>;
    }

    const {
        userId,
        userName,
        firstName,
        lastName,
        userEmail,
        currentMarks,
        nic,
        dob,
        address,
        contactNo,
        workingStatus,
        district,
        accountStatus,
        expertPrivilege,
        zoologistPrivilege,
        catcherPrivilege,
        communityAdminPrivilege,
    } = user;

    const activate = async () => {
        try {
            await axiosClient.put(`Admin/ChangeStatusUser/${userId}?activeStatus=true`);
            location.reload();
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const deactivate = async () => {
        try {
            await axiosClient.put(`Admin/ChangeStatusUser/${userId}?activeStatus=false`);
            location.reload();
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const makeCatcher = async () => {
        try {
            await axiosClient.put(`Admin/CatcherPrivillege/${userId}?activeStatus=true`);
            location.reload();
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const removeCatcher = async () => {
        try {
            await axiosClient.put(`Admin/CatcherPrivillege/${userId}?activeStatus=false`);
            location.reload();
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const makeCommunityAdmin = async () => {
        try {
            await axiosClient.put(`Admin/ComAdminPrivillege/${userId}?activeStatus=true`);
            location.reload();
        } catch (error) {
            console.error('An error occurred:', error);
        }
        // location.reload();
    };

    const removeCommunityAdmin = async () => {
        try {
            // Send the PUT request to update the user's privilege
            await axiosClient.put(`Admin/ComAdminPrivillege/${userId}?activeStatus=false`);

            // Reload the page after the API call has completed
            location.reload();
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const makeZoologist = async () => {
        try {
            await axiosClient.put(`Admin/ZoologistPrivillege/${userId}?activeStatus=true`);

            location.reload();
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const removeZoologist = async () => {
        try {
            await axiosClient.put(`Admin/ZoologistPrivillege/${userId}?activeStatus=false`);
            location.reload();
        } catch (error) {
            console.error('An error occurred:', error);
        }
        // location.reload();
    };

    return (
        <div className="ml-64 mt-10 bg-amber-100 text-black rounded-lg overflow-hidden max-w-screen ">
            <div className="bg-white p-4 shadow-md rounded-md">
                <div className="flex justify-start items-center rounded-xl p-2">
                    <div className={"p-4 m-2 text-xl"}>
                        <Link href={'/accounts'} className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full m-2">Back</Link>
                        <h1 className="pl-96 text-2xl font-semibold text-green-800">
                            FullName: {firstName} {lastName}
                        </h1>
                        <img
                            src={user.profileImage}
                            alt={`${user.firstName} ${user.lastName}`}
                            className="w-32 h-32 rounded-full mr-2"
                        />
                        <p className="text-gray-600 text-lg p-4">Email: {userEmail}</p>
                        <p className="text-gray-600 text-lg p-4">Current Marks: {currentMarks}</p>
                        <p className={"text-gray-600 text-lg p-4"}>NIC: {nic}</p>
                        <p className={"text-gray-600 text-lg p-4"}>Date of Birth: {dob}</p>
                        <p className={"text-gray-600 text-lg p-4"}>Address: {address}</p>
                        <p className={"text-gray-600 text-lg p-4"}>Tel: {contactNo}</p>
                        <p className={"text-gray-600 text-lg p-4"}>District: {district}</p>
                        <p className="text-gray-600 text-lg p-4">Account Status: {accountStatus === null || accountStatus === 0 || accountStatus === 1 ? "Active" : "Inactive"}</p>
                    </div>
                    <div className={"p-2 m-2 text-lg"}>
                        <p className={"text-gray-600 text-lg p-4"}>User ID: {userId}</p>
                        <p className={"text-gray-600 text-lg p-4"}>User Name: {userName}</p>
                        <p className={"text-gray-600 text-lg p-4"}>Working Status: {workingStatus}</p>
                        <p className={"text-gray-600 text-lg p-4"}>Expert Privilege: {expertPrivilege ? "Yes" : "No"}</p>
                        <p className={"text-gray-600 text-lg p-4"}>Zoologist Privilege: {zoologistPrivilege ? "Yes" : "No"}</p>
                        <p className={"text-gray-600 text-lg p-4"}>Catcher Privilege: {catcherPrivilege ? "Yes" : "No"}</p>
                        <p className={"text-gray-600 text-lg p-4"}>Community Admin Privilege: {communityAdminPrivilege ? "Yes" : "No"}</p>
                    </div>
            </div>
                <div>
                    {accountStatus === null || accountStatus === 0 || accountStatus === 1 ?
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-2" onClick={deactivate}>
                        <p>Deactivate</p>
                    </button> :
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full m-2" onClick={activate}>
                        <p>Activate</p>
                    </button>}
                    {catcherPrivilege ? (
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-2" onClick={removeCatcher}>
                                <p>Remove Catcher</p>
                            </button>
                        ) :
                        (
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full m-2" onClick={makeCatcher}>
                                <p>Make Catcher</p>
                            </button> )}
                    {communityAdminPrivilege ? (
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-2" onClick={removeCommunityAdmin}>
                                <p>Remove Community Admin</p>
                            </button>
                        ) :
                        (
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full m-2" onClick={makeCommunityAdmin}>
                                <p>Make Community Admin</p>
                            </button>
                        )}
                    {zoologistPrivilege ? (<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-2" onClick={removeZoologist}>
                        <p>Remove Zoologist</p>
                    </button>) :
                        (
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full m-2" onClick={makeZoologist}>
                                <p>Make Zoologist</p>
                            </button>
                        )}
                </div>
        </div>
        </div>
    );
}

export default UserDetailPage;