import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './rightNav.css'

import {
    FcHome,
    FcPortraitMode,
    FcMoneyTransfer,
    FcGoodDecision,
    FcSettings,
    FcDonate,
    FcShipped,
    FcBarChart,
    FcFlashOn,
    FcBusinessman
} from 'react-icons/fc';
import { AiOutlineRight, AiOutlineLeft, AiOutlineLogout } from 'react-icons/ai';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';



const RightNav = ({ close, setClose }) => {

    const [show, setShow] = useState(false)

    const mainNav = [
        {
            icon: <FcHome />,
            name: 'Home',
            link: '/',
        },
        {
            icon: <FcPortraitMode />,
            name: 'Add Member',
            link: '/add-member',
        },
        {
            icon: <FcMoneyTransfer />,
            name: "Add Member's Money",
            link: '/add-money',
        },
        {
            icon: <FcGoodDecision />,
            name: 'Add Meal',
            link: '/add-meal',
        },
        {
            icon: <FcSettings />,
            name: 'Add Single Meal',
            link: '/add-single-meal',
        },
        {
            icon: <FcDonate />,
            name: 'Add Meal Cost',
            link: '/add-meal-cost',
        },
        {
            icon: <FcShipped />,
            name: 'Add Other Cost',
            link: '/add-other-cost',
        },
        {
            icon: <FcBarChart />,
            name: 'Active Month Details',
            link: '/active-month-details',
        },
    ]
    const optionNav = [
        {
            icon: <FcHome />,
            name: 'All Members',
            link: '/all-members',
        },
        {
            icon: <FcPortraitMode />,
            name: 'Remove Member',
            link: '/remove-member',
        },
        {
            icon: <FcMoneyTransfer />,
            name: "Change Manager",
            link: '/change-manager',
        },
        {
            icon: <FcGoodDecision />,
            name: 'Start New Month',
            link: '/start-new-month',
        },
        {
            icon: <FcSettings />,
            name: 'Switch Active Month',
            link: '/switch-active-month',
        },
        {
            icon: <FcDonate />,
            name: 'Delete Old Month',
            link: '/delete-month',
        },
        {
            icon: <FcShipped />,
            name: 'Delete Mess',
            link: '/delete-mess',
        },
    ]



    return (
        <div className={close ? 'rightNav' : 'rightNav active'}>
            <div className="logo">
                <Link to='/'> <h5 className='m-0'>MM</h5> </Link>
                <span className={`${close ? '' : 'd-none'} arrowBtn`} onClick={() => setClose(!close)}>
                    <AiOutlineLeft />
                </span>
            </div>

            <ul className='mb-0'>
                {
                    mainNav.map(item => (
                        <li key={item.name} >
                            <NavLink
                                to={item.link}
                                className={({ isActive }) => `rightNavItems ${close ? '' : 'justify-content-center'} ${isActive ? 'active' : ''}`}
                            >
                                <span className='icon'> {item.icon} </span>
                                <span className={`${close ? '' : 'd-none '} text`}> {item.name} </span>
                            </NavLink>
                        </li>

                    ))
                }
                <li className='rightNavItems cursor-pointer' onClick={() => setShow(!show)} >
                    <span className='icon'> <FcFlashOn /> </span>
                    <span className={`${close ? '' : 'd-none'} text`}> Options </span>
                    <div className={close ? 'ms-auto' : 'd-none'}>
                        {
                            show ? <BsChevronDown /> : <BsChevronUp />
                        }
                    </div>

                </li>
            </ul>

            <ul className={show ? 'mt-0' : 'd-none'}>
                {
                    optionNav.map(item => (
                        <li key={item.name} >
                            <NavLink
                                to={item.link}
                                className={({ isActive }) => `rightNavItems ${close ? '' : 'justify-content-center'} ${isActive ? 'active' : ''}`}
                            >
                                <span className='icon'> {item.icon} </span>
                                <span className={`${close ? '' : 'd-none'} text`}> {item.name} </span>
                            </NavLink>
                        </li>
                    ))
                }
            </ul>

            <div className="bottomNav mt-auto">
                <div className="user">
                    <div className={close ? "userImg" : 'userImg mx-auto'}>
                        <FcBusinessman />
                    </div>
                    <div className={close ? "userDetails" : 'd-none'}>
                        <p className="user-name m-0 text-center"> Suronjit Pal </p>
                        <small className='user-role d-block text-center'> Member </small>
                    </div>
                    <AiOutlineLogout className={close ? "arrowBtn p-1" : 'd-none'} />
                </div>
                <div className="d-flex">
                    <span className={`${close ? 'd-none' : ''} mx-auto my-2 arrowBtn`} onClick={() => setClose(!close)}>
                        <AiOutlineRight />
                    </span>
                </div>
            </div>



        </div >

    );
};

export default RightNav;