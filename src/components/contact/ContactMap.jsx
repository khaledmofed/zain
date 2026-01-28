import React from 'react';

const ContactMap = () => {
    return (
        <>
            <div className="maps-area bg-gray overflow-hidden">
                <div className="google-maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.123456789!2d58.4106366!3d23.5765361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ff43f7ed6a51%3A0x15648efe580ba2d5!2sSolomon%20Group!5e0!3m2!1sen!2s!4v1234567890!5m2!1sen!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    );
};

export default ContactMap;