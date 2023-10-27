import React, { useState, useEffect } from 'react';
import { axiosClient } from "/app/services/axiosClient";
import Link from "next/link";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([]);
    const [foundUsers, setFoundUsers] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        axiosClient.get('/UserDetail').then((res) => {
            setUsers(res.data);
        });
    }, []);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const filteredUsers = users.filter((user) => {
            const searchTermLowerCase = searchTerm.toLowerCase();
            const nicLowerCase = user.nic.toLowerCase();
            const emailLowerCase = user.userEmail.toLowerCase();

            return (
                nicLowerCase.includes(searchTermLowerCase) ||
                emailLowerCase.includes(searchTermLowerCase)
            );
        });

        setFoundUsers(filteredUsers);
        setShowPopup(true);
        setSearchTerm('');
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', alignItems: 'center' }}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder="Search..."
                    style={{ padding: '10px', marginRight: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                />
                <button
                    type="submit"
                    style={{ padding: '10px', backgroundColor: '#3182ce', color: '#fff', borderRadius: '4px', cursor: 'pointer' }}
                >
                    Search
                </button>
            </form>

            {showPopup && (
                <div style={{ position: 'fixed', top: '0', left: '0', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div style={{ background: '#fff', width: '400px', padding: '20px', borderRadius: '4px' }}>
                        <p style={{ marginTop: '10px', marginBottom: '5px' }}>Found Users:</p>
                        {foundUsers.length > 0 ? (
                            foundUsers.map((user) => (
                                <Link
                                    key={user.userId}
                                    href={`/dashboard/${user.userId}`}
                                    style={{ display: 'block', marginBottom: '10px', textDecoration: 'none' }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', borderRadius: '4px', padding: '4px 8px', background: '#f0f4f8', cursor: 'pointer' }}>
                                        <div>
                                            <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>
                                                {user.firstName} {user.lastName}
                                            </h3>
                                            <p style={{ color: '#555', fontSize: '14px' }}>{user.userEmail}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p>No users found.</p>
                        )}
                        <button onClick={() => setShowPopup(false)} style={{ padding: '10px', background: '#3182ce', color: '#fff', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBar;