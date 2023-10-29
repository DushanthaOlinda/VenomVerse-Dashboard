// pages/about.js
"use client";
import React, {useEffect} from 'react';
import {axiosClient} from "/app/services/axiosClient";
import Image from "next/image";


const AboutPage = () => {
    const [pics, setPics] = React.useState([]);

    useEffect(() => {

        axiosClient.get("/ScanImage").then((res) => {
            console.log(res.data);
            setPics(res.data);
        });
    }, []);


    return (
        <div className="pl-64 mt-10 container px-auto py-10 z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 gap-y-16">
                {pics.map((member, index) => (
                    <div key={index} className="border border-gray-300 p-2 rounded-lg w-full">
                        <div className="flex">
                            <Image
                                src={member.scannedImageMedia}
                                alt={member.scannedSerpentName}
                                className="w-full h-auto transition duration-300 hover:backdrop-filter-none hover:grayscale-0"
                            />
                        </div>
                        <h2 className="text-lg font-semibold my-2">{member.scannedSerpentName}</h2>
                        <p className="text-gray-600">Accuracy: {member.accuracy}%</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutPage;