import React from 'react';
import Animate from '../animation/Animate';

const ContactInfo = () => {
    return (
        <>
            <div className="contact-style-one-info">
                <h2>Contact Information</h2>
                <p>
                    Zain Solutions, your trusted digital consulting partner in Muscat, Sultanate of Oman.
                </p>
                <ul>

                    <Animate className="animate__animated animate__fadeInUp">
                        <li>
                            <div className="icon">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div className="content">
                                <h5 className="title">Phone</h5>
                                <a href="tel:+96872720046">+968 7272 0046</a>
                            </div>
                        </li>
                    </Animate>

                    <Animate className="animate__animated animate__fadeInUp" delay="300ms">
                        <li>
                            <div className="icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="info">
                                <h5 className="title">Our Location</h5>
                                <p>
                                    Zain Solutions<br />Muscat, Sultanate of Oman
                                </p>
                            </div>
                        </li>
                    </Animate>

                    <Animate className="animate__animated animate__fadeInUp" delay="500ms">
                        <li>
                            <div className="icon">
                                <i className="fas fa-envelope-open-text"></i>
                            </div>
                            <div className="info">
                                <h5 className="title">Official Email</h5>
                                <a href="mailto:info@zainom.com">info@zainom.com</a>
                            </div>
                        </li>
                    </Animate>
                </ul>
            </div>
        </>
    );
};

export default ContactInfo;