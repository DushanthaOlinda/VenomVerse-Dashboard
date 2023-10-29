"use client";
import React, { useEffect, useState } from "react";
import { axiosClient } from "/app/services/axiosClient";
import Link from "next/link";

export function userDetail({ params }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axiosClient.get("/UserDetail").then((res) => {
            console.log(res.data);
            const userData = res.data.find(
                (user) => user.userId === parseInt(params.id)
            );
            setUser(userData);
        });
    }, [params.id]);

    if (!user) {
        return <div>Loading...</div>;
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

    const makeCatcher = () =>   {
        console.log("make catcher")
        axiosClient.put(`/UserDetail/${userId}`, JSON.stringify(
            {
                "userId": userId,
                "userName": userName,
                "firstName": firstName,
                "lastName": lastName,
                "userEmail": userEmail,
                "currentMarks": currentMarks,
                "nic": nic,
                "dob": dob,
                "address": address,
                "contactNo": contactNo,
                "workingStatus": workingStatus,
                "district": district,
                "accountStatus": accountStatus,
                "expertPrivilege": expertPrivilege,
                "zoologistPrivilege": zoologistPrivilege,
                "catcherPrivilege": true,
                "communityAdminPrivilege": communityAdminPrivilege,
            }
        )).then(r => console.log(r));
    };

    const removeCatcher = () => {
        axiosClient.put(`/UserDetail/${userId}`, JSON.stringify(
            {
                "userId": userId,
                "userName": userName,
                "firstName": firstName,
                "lastName": lastName,
                "userEmail": userEmail,
                "currentMarks": currentMarks,
                "nic": nic,
                "dob": dob,
                "address": address,
                "contactNo": contactNo,
                "workingStatus": workingStatus,
                "district": district,
                "accountStatus": accountStatus,
                "expertPrivilege": expertPrivilege,
                "zoologistPrivilege": zoologistPrivilege,
                "catcherPrivilege": true,
                "communityAdminPrivilege": communityAdminPrivilege,
            }
        )).then(r => console.log(r));
    };

    const makeCommunityAdmin = () => {
        axiosClient.put(`/UserDetail/${userId}`, JSON.stringify(
            {
                "userId": userId,
                "userName": userName,
                "firstName": firstName,
                "lastName": lastName,
                "userEmail": userEmail,
                "currentMarks": currentMarks,
                "nic": nic,
                "dob": dob,
                "address": address,
                "contactNo": contactNo,
                "workingStatus": workingStatus,
                "district": district,
                "accountStatus": accountStatus,
                "expertPrivilege": expertPrivilege,
                "zoologistPrivilege": zoologistPrivilege,
                "catcherPrivilege": catcherPrivilege,
                "communityAdminPrivilege": true,
            }
        )).then(r => console.log(r));
    };

    const removeCommunityAdmin = () => {
        axiosClient.put(`/UserDetail/${userId}`, JSON.stringify(
            {
                "userId": userId,
                "userName": userName,
                "firstName": firstName,
                "lastName": lastName,
                "userEmail": userEmail,
                "currentMarks": currentMarks,
                "nic": nic,
                "dob": dob,
                "address": address,
                "contactNo": contactNo,
                "workingStatus": workingStatus,
                "district": district,
                "accountStatus": accountStatus,
                "expertPrivilege": expertPrivilege,
                "zoologistPrivilege": zoologistPrivilege,
                "catcherPrivilege": catcherPrivilege,
                "communityAdminPrivilege": false,
            }
        )).then(r => console.log(r));
    };

    return (
        <div className="ml-64 mt-10 bg-amber-100 text-black rounded-lg overflow-hidden max-w-screen ">
            <div className="bg-white p-4 shadow-md rounded-md">
                <div className="flex justify-start items-center rounded-xl p-2">
                    <div className={"p-4 m-2 text-xl"}>
                        <Link href={'/accounts'}>Back</Link>
                        <h3 className="pl-96 text-4xl font-semibold text-green-800">
                            FullName: {firstName} {lastName}
                        </h3>
                        <p className="text-gray-600 p-4">Email: {userEmail}</p>
                        <p className="text-gray-600 p-4">Current Marks: {currentMarks}</p>
                        <p className={"text-gray-600 p-4"}>NIC: {nic}</p>
                        <p className={"text-gray-600 p-4"}>Date of Birth: {dob}</p>
                        <p className={"text-gray-600 p-4"}>Address: {address}</p>
                        <p className={"text-gray-600 p-4"}>Tel: {contactNo}</p>
                        <p className={"text-gray-600 p-4"}>District: {district}</p>
                        <p className="text-gray-600 p-4">Account Status: {accountStatus === null || accountStatus === 0 || accountStatus === 1 ? "Active" : "Inactive"}</p>
                </div>
                    <div className={"p-2 m-2 text-xl"}>
                        <p className={"text-gray-600 p-4"}>User ID: {userId}</p>
                        <p className={"text-gray-600 p-4"}>User Name: {userName}</p>
                        <p className={"text-gray-600 p-4"}>Working Status: {workingStatus}</p>
                        <p className={"text-gray-600 p-4"}>Expert Privilege: {expertPrivilege ? "Yes" : "No"}</p>
                        <p className={"text-gray-600 p-4"}>Zoologist Privilege: {zoologistPrivilege ? "Yes" : "No"}</p>
                        <p className={"text-gray-600 p-4"}>Catcher Privilege: {catcherPrivilege ? "Yes" : "No"}</p>
                        <p className={"text-gray-600 p-4"}>Community Admin Privilege: {communityAdminPrivilege ? "Yes" : "No"}</p>
                    </div>
            </div>
                <div>
                    {accountStatus === null || accountStatus === 0 || accountStatus === 1 ?
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-2">
                        <p>Deactivate</p>
                    </button> :
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full m-2">
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
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-6 px-8 rounded-full m-6">
                        <p>Reset password</p>
                    </button>
                </div>
        </div>
        </div>
    );
}

export default userDetail;