"use client"
import CountUp from "react-countup";

const Counter = ({ end }) => {
    return (
        <>
            <CountUp end={end} enableScrollSpy />
        </>
    );
};

export default Counter;