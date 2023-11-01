"use client";
import React, {useEffect} from "react";
import Card from "/components/card";
import BarChart from "/components/chart";
import {axiosClient} from "/app/services/axiosClient";
import PieChart from "/components/piChart";
import {getIsAuthenticated} from "/app/auth";

// console.log(getIsAuthenticated());
//
// if (getIsAuthenticated() === false) {
//     window.location.href = '/'; // Redirect to the login page
// }
// else{
//     console.log("Authenticated");
// }

const Homepage = () => {

    const [users, setUsers] = React.useState([]);
    const [admin , setAdmin] = React.useState([]);

    useEffect(() => {

        axiosClient.get("/Admin/Dashboard").then((res) => {
            // console.log(res.data);
            setAdmin(res.data);
        });
    }, []);

    useEffect(() => {

        axiosClient.get("/UserDetail").then((res) => {
            // console.log(res.data);
            setUsers(res.data);
        });
    }, []);


    const dummyData = [
        {
            id: 5,
            title: 'Pending Catcher Requests',
            description: admin.count_pending_catcher_req,
        },
        {
            id: 6,
            title: 'Pending Zoologist Requests',
            description: admin.count_pending_zoologist_req,
        },
        {
            id: 7,
            title: 'Total Scanned Images Count',
            description: admin.count_scanned_images,
        },
        {
            id: 8,
            title: 'Total Quiz Attempted',
            description: admin.count_quiz_attempted,
        }
    ];

    const data = admin.bar_new_registers;
    const labels = ['Users', 'Catchers', 'Zoologists', 'Com. Admins'];

    const labels2 = admin.pie_scanned_images;

    const snakeMap = new Map();

    for (const key in labels2) {
        snakeMap.set(key, labels2[key]);
    }

    const labels3 = Array.from(snakeMap.keys());
    const data3 = Array.from(snakeMap.values());


    return (
            <div className="ml-64 mt-10 bg-amber-100 text-black rounded-lg overflow-hidden max-w-screen ">
                {/*<h1 className="ml-3 text-2xl font-light font-sans underline uppercase">Dashboard</h1>*/}
                <div className="grid grid-cols-3 divide-x-2 m-5 ml-5" >
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-2 m-2 max-w-screen-md ">
                        <div className="p-4" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                            <h2 className="text-xl font-semibold mb-2">Pending Posts &nbsp; {admin.count_pending_post} </h2>
                            <h2 className="text-xl font-semibold mb-2">Approved Posts &nbsp; {admin.count_approved_post}</h2>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-2 m-2 max-w-screen-md ">
                        <div className="p-4" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                            <h2 className="text-xl font-semibold mb-2">Requested Services &nbsp; {admin.count_requested_services} </h2>
                            <h2 className="text-xl font-semibold mb-2">Completed Services &nbsp; {admin.count_completed_services}</h2>
                        </div>
                    </div>
                    {dummyData.map((item) => (
                        <Card
                            key={item.id}
                            title={item.title}
                            title2={item.title2}
                            description={item.description}
                            description2={item.description2}
                        />
                    ))}
                </div>

                <div className="grid grid-cols-2 divide-x-2 m-5 ml-5 ">
                    <div className="bg-white h-96 w-96 ml-10 rounded-lg pb-52 p-4">
                        <h1 className="text-3xl font-semibold mb-4">Newly Registered Users</h1>
                        <BarChart data={data} labels={labels}/>
                    </div>
                    <div className="bg-white h-2/3 p-4 w-96 ml-10 rounded-lg pb-56 ">
                        <h1 className="text-3xl font-semibold mb-4">Scanned Snakes</h1>
                        <PieChart data={data3} labels={labels3} />
                    </div>
                </div>
        </div>
    )
}

export default Homepage;