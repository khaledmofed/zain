import React from 'react';

const SingleProcess2 = ({ process }) => {
    const { title, steps, icon } = process

    return (
        <>
            <div className="process-style-two">
                <div className="thumb">
                    <div className="icon-wrapper">
                        <i className={icon}></i>
                    </div>
                    <span>{steps}</span>
                </div>
                <h3>{title}</h3>
            </div>
        </>
    );
};

export default SingleProcess2;