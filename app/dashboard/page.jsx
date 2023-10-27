"use client";
import React, {useEffect} from "react";
import Card from "/components/card";
import BarChart from "/components/chart";
import Accounts from "/components/accounts";
import {axiosClient} from "/app/services/axiosClient";

const Homepage = () => {
    const dummyData = [
        {
            id: 1,
            title: 'Card 1',
            description: 'This is the first card.',
        },
        {
            id: 2,
            title: 'Card 2',
            description: 'This is the second card.',
        },
        {
            id: 3,
            title: 'Card 3',
            description: 'This is the third card.',
        },
        {
            id: 4,
            title: 'Card 4',
            description: 'This is the forth card.'
        }
    ];

    const [users, setUsers] = React.useState([]);

    useEffect(() => {

        axiosClient.get("/UserDetail").then((res) => {
            console.log(res.data);
            setUsers(res.data);
        });
    }, []);

    const data = [12, 19, 3, 5, 2, 3];
    const labels = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'];


    return (
            <div className="ml-64 mt-10 bg-amber-100 text-black rounded-lg overflow-hidden max-w-screen ">
                <h1 className="ml-3 text-2xl font-light font-sans underline uppercase">Dashboard</h1>
                <div className="grid grid-cols-2 divide-x-2 m-5 ml-5" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    {dummyData.map((item) => (
                        <Card
                            key={item.id}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>

                <div className="grid grid-cols-2 divide-x-2 m-5 ml-5 ">
                    <div className="bg-white h-96 w-96 ml-10 rounded-lg pb-52 p-4">
                        <h1 className="text-3xl font-semibold mb-4">Bar Chart</h1>
                        <BarChart data={data} labels={labels}/>
                    </div>
                    <div className="bg-white h-96 p-4 w-96 ml-10 rounded-lg pb-52 ">
                        <h1 className="text-3xl font-semibold mb-4">User Accounts</h1>
                        <div className="overflow-y-auto" style={{ maxHeight: '300px' }}>
                        <Accounts users={users}/>
                            {/*{console.log(users)}*/}
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Homepage;