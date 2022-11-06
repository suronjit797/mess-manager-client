import React from 'react';
import './TopNav.css'

// IoMdNotificationsOutline

import { CgMenuLeftAlt } from 'react-icons/cg';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FcBusinessman } from 'react-icons/fc';
import { BsHeadset } from 'react-icons/bs';

const TopNav = ({ close, setClose }) => {
    return (
        <div className='d-flex topNav align-items-center'>
            <CgMenuLeftAlt onClick={() => setClose(!close)} className='menu-bars cursor-pointer' style={{ fontSize: '28px' }} />

            <div className="ms-auto d-flex align-items-center">
                <IoMdNotificationsOutline className='bg_primary' />
                <BsHeadset className='mx-2 bg_primary' />
                <div className="userImg cursor-pointer" >
                    <FcBusinessman />
                </div>
            </div>
        </div>
    );
};

export default TopNav;