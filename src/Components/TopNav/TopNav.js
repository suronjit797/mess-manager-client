import React from 'react';
import './TopNav.css'

// IoMdNotificationsOutline

import { IoMdNotificationsOutline } from 'react-icons/io';
import {  FcBusinessman } from 'react-icons/fc';
import {  BsHeadset } from 'react-icons/bs';

const TopNav = () => {
    return (
        <div className='d-flex topNav'>
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