"use client"
import React, {useEffect} from "react";
import { Table } from 'react-bootstrap';
import {axiosClient} from "/app/services/axiosClient";

const Reports = () =>{
    const [quizAttempts, setQuizAttempts] = React.useState([]);

    useEffect(() => {

        axiosClient.get("/Quiz/AllAttempts").then((res) => {
            console.log(res.data);
            setQuizAttempts(res.data);
        });
    }, []);
    return(
        <div className={"pl-64 pt-10"}>
            <div className="bg-white rounded-lg ">
                <h1 className="text-3xl font-semibold ml-6 pt-4 mb-4">Quiz</h1>
                <div className="overflow-y-auto" style={{ maxHeight: "900px" }}>
                    <div>
                        <Table striped bordered hover className="w-full">
                            <thead>
                            <tr>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Quiz</th>
                                <th className="px-4 py-2">Total Marks</th>
                            </tr>
                            </thead>
                            <tbody>
                            {quizAttempts.map((item) => (
                                <tr key={item.quizAttemptId}>
                                    <td className="px-4 py-2">{item.userFirstName} {item.userLastName}</td>
                                    <td className="px-4 py-2">{item.quizTopicEng}</td>
                                    <td className="px-4 py-2">{item.totalMarks}</td>
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