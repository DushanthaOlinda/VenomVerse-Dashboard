import React from 'react';
import Link from "next/link";

const Accounts = ({ users }) => {
    return (
        <div className="bg-white p-4 shadow-md rounded-md">
            <ul>
                {users.map((user) => (
                    <li key={user.userId} className="mb-2">
                        <Link href={`/dashboard/${user.userId}`} className="flex justify-start items-center hover:bg-green-50 hover:text-green-800 rounded-xl p-2">
                            {/*<img*/}
                            {/*    src={user.avatar}*/}
                            {/*    alt={`${user.firstName} ${user.lastName}`}*/}
                            {/*    className="w-8 h-8 rounded-full mr-2"*/}
                            {/*/>*/}
                            <div>
                                <h3 className="text-lg font-semibold">
                                    {user.firstName} {user.lastName}
                                </h3>
                                <p className="text-gray-600">{user.userEmail}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Accounts;
