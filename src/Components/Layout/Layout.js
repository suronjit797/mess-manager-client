import React, { useState } from 'react';
import './layout.css'

import RightNav from '../RightNav/RightNav';

const Layout = ({children}) => {

    const [close, setClose] = useState(true)
    const [width, setWidth] = useState('300px')



    return (
        <div className='layout'>
            <RightNav close={close} setClose={setClose}/>
            {children}
        </div>
    );
};

export default Layout;