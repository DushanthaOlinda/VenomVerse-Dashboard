import React from 'react';
import Link from "next/link";

const Accounts = ({ users }) => {
    return (
        <div className="bg-white p-5 w-full flex shadow-md rounded-md">
            <div className="flex w-full flex-wrap">
                {users.map((user) => (
                    <div key={user.userId} className="mb-2 w-1/5">
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accounts;