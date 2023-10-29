"use client"
import React, {useEffect} from "react";
import Accounts from "/components/accounts";
import {axiosClient} from "/app/services/axiosClient";
import SearchBar from "/components/search";

const Profiles = () =>{
    const [users, setUsers] = React.useState([]);

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



        return(
            <div className={"pl-64 pt-10"}>
            <div className="bg-white rounded-lg ">
                <h1 className="text-3xl font-semibold ml-6 pt-4 mb-4">User Accounts</h1>
                <SearchBar />
                <div className="overflow-y-auto flex w-full" style={{ maxHeight: "900px"}}>
                    <Accounts users={users} className="w-1/2"/>
                </div>
            </div>
            </div>
        )
}

export default Profiles;