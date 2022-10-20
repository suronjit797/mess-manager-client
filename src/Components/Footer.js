import React from 'react';

const Footer = () => {
    return (
        <div className='mt-auto pt-5' >
            <div style={{ borderTop: "1px solid var(--primary-border_color)" }}>
                <p className="mt-2 text-end"> © 2022 Mess Manager App | by <span className="text_primary"> Suronjit Pal </span> </p>
            </div>
        </div>
    );
};

export default Footer;