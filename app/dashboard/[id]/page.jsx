"use client";
import React, {useEffect} from "react";
import {axiosClient} from "/app/services/axiosClient";

export function UserDetail({params}) {

    const [users, setUsers] = React.useState([]);

    useEffect(() => {

        axiosClient.get("/UserDetail").then((res) => {
            console.log(res.data);
            setUsers(res.data);
        });
    }, []);

    const UserId = params.id;
    let firstName, lastName, email,currentMarks,nic,DOB,address,contactNo,accountStatus;
    users.map((user) => {
        if (user.userId === parseInt(UserId)) {
            firstName = user.firstName;
            lastName = user.lastName;
            email = user.userEmail;
            currentMarks = user.currentMarks;
            nic = user.nic;
            DOB = user.dob;
            address = user.address;
            contactNo = user.contactNo;
            accountStatus = user.accountStatus;
        }
    });

    return (
        <div className="ml-64 mt-10 bg-amber-100 text-black rounded-lg overflow-hidden max-w-screen ">
            <div className="bg-white p-4 shadow-md rounded-md">
                <div className="flex justify-start items-center rounded-xl p-2">
                    {/*<img*/}
                    {/*    src={user.avatar}*/}
                    {/*    alt={`${user.firstName} ${user.lastName}`}*/}
                    {/*    className="w-8 h-8 rounded-full mr-2"*/}
                    {/*/>*/}
                    <div className={"p-4 m-2 text-xl"}>
                        <h3 className="pl-96 text-4xl font-semibold text-green-800">
                            FullName: {firstName} {lastName}
                        </h3>
                        <p className="text-gray-600 p-4">Email: {email}</p>
                        <p className="text-gray-600 p-4">Current Marks: {currentMarks}</p>
                        <p className={"text-gray-600 p-4"}>NIC: {nic}</p>
                        <p className={"text-gray-600 p-4"}>Date of Birth: {DOB}</p>
                        <p className={"text-gray-600 p-4"}>Address: {address}</p>
                        <p className={"text-gray-600 p-4"}>Tel: {contactNo}</p>
                        {/*<p className={"text-gray-600"}>Account Status: {accountStatus}</p>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDetail;