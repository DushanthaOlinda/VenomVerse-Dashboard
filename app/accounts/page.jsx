"use client"
import React, {useEffect, useState} from "react";
import Accounts from "/components/accounts";
import {axiosClient} from "/app/services/axiosClient";
import SearchBar from "/components/search";

const Profiles = () =>{
    const [users, setUsers] = React.useState([]);
    const [selectedAccess, setSelectedAccess] = useState('All'); // Initialize with 'All'

    useEffect(() => {
        axiosClient.get("/UserDetail").then((res) => {
            console.log(res.data);
            setUsers(res.data);
        });
        // axiosClient.post("/UserDetail", JSON.stringify(
        //     {
        //         "id": 1,
        //         "username": "admin",
        //         "password": "admin",
        //         "email": ""
        //     }
        //     )
        // ).then((res) => {
        //     console.log(res.data);
        //     setUsers(res.data);
        // });
    }, []);

    // Define a filter function to filter users by access level
    const filteredUsers = () => {
        if (selectedAccess === 'All') {
            // Show all users if 'All' is selected
            return users;
        } else {
            // Filter users based on privileges
            return users.filter((user) => {
                if (selectedAccess === 'Catcher') {
                    return user.catcherPrivilege === true;
                } else if (selectedAccess === 'Zoologist') {
                    return user.zoologistPrivilege === true;
                } else if (selectedAccess === 'Com admin') {
                    return user.communityAdminPrivilege === true;
                }
                return false; // Return false for 'All' and normal users
            });
        }
    };



    return (
        <div className={'pl-64 pt-10'}>
            <div className="bg-white rounded-lg">
                <h1 className="text-3xl font-semibold ml-6 pt-4 mb-4">User Accounts</h1>
                <SearchBar />
                <div className="flex justify-end">
                    <label className="mr-2">Filter by User Type:</label>
                    <select
                        value={selectedAccess}
                        onChange={(e) => setSelectedAccess(e.target.value)}
                    >
                        <option value="All">All Users</option>
                        <option value="Catcher">Catcher</option>
                        <option value="Zoologist">Zoologist</option>
                        <option value="Com admin">Com admin</option>
                    </select>
                </div>
                <div className="overflow-y-auto flex w-full" style={{ maxHeight: '900px' }}>
                    <Accounts users={filteredUsers()} className="w-1/2" />
                </div>
            </div>
        </div>
    );
};

export default Profiles;