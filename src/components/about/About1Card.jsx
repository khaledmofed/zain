import React from 'react';
import Animate from '../animation/Animate';
import Counter from '../counter/Counter';

const About1Card = () => {
    return (
        <>
            <Animate className="animate__animated animate__fadeInUp" delay="500ms">
                <div className="about-card" style={{}}>
                    <ul>
                        <li>
                            <div className="icon">
                                <i className="flaticon-license"></i>
                            </div>
                            <div className="fun-fact">
                                <div className="counter">
                                    <div className="timer">
                                        <Counter end={98} /></div>
                                    <div className="operator">%</div>
                                </div>
                                <span className="medium">Consulting Success</span>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="flaticon-global"></i>
                            </div>
                            <div className="fun-fact">
                                <div className="counter">
                                    <div className="timer"> <Counter end={120} /></div>
                                    <div className="operator">+</div>
                                </div>
                                <span className="medium">Worldwide Clients</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </Animate>
        </>
    );
};

export default About1Card;