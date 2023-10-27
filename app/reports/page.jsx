"use client"
import React, {useEffect} from "react";
import { Table } from 'react-bootstrap';
import {axiosClient} from "/app/services/axiosClient";

const Reports = () =>{
    const [users, setUsers] = React.useState([]);

    useEffect(() => {

        axiosClient.get("/UserDetail").then((res) => {
            console.log(res.data);
            setUsers(res.data);
        });
    }, []);
    return(
        <div className={"pl-64 pt-10"}>
            <div className="bg-white rounded-lg ">
                <h1 className="text-3xl font-semibold ml-6 pt-4 mb-4">Reports</h1>
                <div className="overflow-y-auto" style={{ maxHeight: "900px" }}>
                    <div>
                        <h1 className="text-2xl font-semibold ml-6 pt-4 mb-4">Users</h1>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((item) => (
                            <tr key={item.userId}>
                                <td>{item.userId}</td>
                                <td>{item.userName}</td>
                                <td>{item.userEmail}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reports;