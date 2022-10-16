import React, { useState } from 'react';
import './layout.css'

import RightNav from '../RightNav/RightNav';
import TopNav from '../TopNav/TopNav';

const Layout = ({ children }) => {

    const [close, setClose] = useState(true)
    const [width, setWidth] = useState('300px')



    return (
        <div className='layout'>
            <RightNav close={close} setClose={setClose} />
            <div className='w-100 px-3'>
                <TopNav />
                {children}
            </div>
        </div>
    );
};

export default Layout;