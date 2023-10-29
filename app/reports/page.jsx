"use client";
import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { axiosClient } from "/app/services/axiosClient";

const Reports = () => {
    const [users, setUsers] = React.useState([]);

    useEffect(() => {
        axiosClient.get("/UserDetail").then((res) => {
            console.log(res.data);
            setUsers(res.data);
        });
    }, []);

    const handlePrint = () => {
        const printContents = document.getElementById("printTable").innerHTML;
        const originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    };

    return (
        <div className="pl-64 pt-10">
            <div>
                <h1 className="text-3xl font-semibold ml-6 pt-4 mb-4">Reports</h1>
                <div id="printTable">
                    <h1 className="text-2xl font-semibold ml-6 pt-4 mb-4">Users</h1>
                    <Table className="w-full">
                        <thead>
                        <tr>
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((item) => (
                            <tr key={item.userId}>
                                <td className="px-4 py-2">{item.userId}</td>
                                <td className="px-4 py-2">{item.userName}</td>
                                <td className="px-4 py-2">{item.userEmail}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </div>
            <button
                className="mt-4 mx-6 px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={handlePrint}
            >
                Print
            </button>
        </div>
    );
};

export default Reports;