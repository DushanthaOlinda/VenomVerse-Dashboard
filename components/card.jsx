import React from 'react';
// If you plan to use Next.js routing

const Card = ({ title, description}) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-2 m-2 max-w-screen-md items-center text-center">
            <div className="p-4" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <h2 className="text-3xl font-semibold mb-2">{description}</h2>
            </div>
        </div>
    );
};

export default Card;