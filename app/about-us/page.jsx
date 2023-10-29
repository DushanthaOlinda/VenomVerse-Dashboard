// pages/about.js

import React from 'react';
import Image from "next/image";

const teamMembers = [
    {
        name: 'Dushantha Olinda',
        linkedin: 'https://www.linkedin.com/in/dushantha-olinda',
        photo: '/images/olinda.png',
    },
    {
        name: 'Kimuthu Kisal',
        linkedin: 'https://www.linkedin.com/in/kimuthu-kisal-37b897212/',
        photo: '/images/kimuthu.png',
    },
    {
        name: "Isuru Heshan",
        linkedin: 'https://www.linkedin.com/in/isuru-heshan/',
        photo: '/images/isuru.png',
    },
    {
        name : "Bethmi Navanjali",
        linkedin : "https://www.linkedin.com/in/bethmi-navanjali-9ab010244/",
        photo: '/images/bethmi.png',
    },
    {
        name : "Oshadhi Dilthara",
        linkedin : "https://www.linkedin.com/in/oshadhi-dilthara-a34515279/",
        photo: '/images/oshadi.png',
    },
    {
        name:"Senuri Dilshara",
        linkedin:"https://www.linkedin.com/in/senuri-wickramasinghe/",
        photo: '/images/senuri.png',
    }
];

const AboutPage = () => {
    return (
        <div className="pl-64 mt-10 container px-auto py-10 z-10">
            <h1 className="text-4xl font-bold mb-6">Meet the Team</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                    <div key={index} className="border border-gray-300 p-6 rounded-lg">
                        <div className="relative">
                            <Image width={300} height={300}
                                src={member.photo}
                                alt={member.name}
                                className="w-full h-auto transition duration-300 hover:backdrop-filter-none hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-black opacity-40 hover:opacity-0 transition duration-300"></div>
                        </div>
                        <h2 className="text-lg font-semibold my-2">{member.name}</h2>
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 hover:underline"
                        >
                            LinkedIn Profile
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutPage;