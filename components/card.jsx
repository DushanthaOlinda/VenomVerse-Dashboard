import React from 'react';
// If you plan to use Next.js routing

const Card = ({ title, description}) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-2 m-2 max-w-screen-md ">
            {/*<Image src={imageUrl} alt={title} className="w-full h-40 object-cover object-center" width={800} height={800}/>*/}
            <div className="p-4" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default Card;