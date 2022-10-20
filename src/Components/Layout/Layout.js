import React, { useState } from 'react';
import './layout.css'

import LeftNav from '../LeftNav/LeftNav';
import TopNav from '../TopNav/TopNav';
import Footer from '../Footer';

const Layout = ({ children }) => {

    const [close, setClose] = useState(true)

    return (
        <div className='layout'>
            <LeftNav close={close} setClose={setClose} />
            <div className='w-100 px-3 layout_body'>
                <TopNav />
                {children}
                <Footer />
            </div>

        </div>
    );
};

export default Layout;