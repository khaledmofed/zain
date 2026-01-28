import Link from 'next/link';
import React from 'react';

const SingleServices1 = ({ data }) => {
    const { id, icon, title, text } = data

    return (
        <>
            <div className="services-style-one">
                <h4>
                    <i className={icon}></i>
                    <Link
                    href='#'        
                    //  href={`/services-details/${id}`}
                     >{title}</Link>
                </h4>
                <p>{text}</p>
            </div>
        </>
    );
};

export default SingleServices1;