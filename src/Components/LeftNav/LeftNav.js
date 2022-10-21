import React, { memo, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import './LeftNav.css'

import {
    FcHome,
    FcPortraitMode,
    FcMoneyTransfer,
    FcSettings,
    FcDonate,
    FcShipped,
    FcBarChart,
    FcPlus,
    FcFlashOn,
    FcBusinessman,
    FcConferenceCall,
    FcPodiumWithSpeaker,
    FcSynchronize,
    FcAddDatabase,
    FcProcess,
    FcDeleteDatabase,
    FcCancel
} from 'react-icons/fc';
import { AiOutlineRight, AiOutlineLeft, AiOutlineLogout } from 'react-icons/ai';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { useSelector } from 'react-redux';



const LeftNav = memo(({ close, setClose }) => {
    const navigate = useNavigate()
    const user = useSelector(state => state.user.user)

    const [show, setShow] = useState(false)

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }


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
            icon: <FcPlus />,
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
            icon: <FcConferenceCall />,
            name: 'All Members',
            link: '/all-members',
        },
        {
            icon: <FcPodiumWithSpeaker />,
            name: 'Remove Member',
            link: '/remove-member',
        },
        {
            icon: <FcSynchronize />,
            name: "Change Manager",
            link: '/change-manager',
        },
        {
            icon: <FcAddDatabase />,
            name: 'Start New Month',
            link: '/start-new-month',
        },
        {
            icon: <FcProcess />,
            name: 'Switch Active Month',
            link: '/switch-active-month',
        },
        {
            icon: <FcDeleteDatabase />,
            name: 'Delete Old Month',
            link: '/delete-month',
        },
        {
            icon: <FcCancel />,
            name: 'Delete Mess',
            link: '/delete-mess',
        },
    ]

    if (Object.keys(user).length === 0) {
        return <p className="text-danger"> Loading... </p>
    }

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
                                className={`rightNavItems ${close ? '' : 'justify-content-center'}`}>
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
                            show ? <BsChevronUp /> : <BsChevronDown />
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
                                className={`rightNavItems ${close ? '' : 'justify-content-center'}`}>
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
                        {
                            user.picture ? <img src={user.picture} alt={user.name} /> : <FcBusinessman />
                        }
                    </div>
                    <div className={close ? "userDetails" : 'd-none'}>
                        <p className="user-name m-0 text-center text-capitalize"> {user.name} </p>
                        <small className='user-role d-block text-center text-capitalize'> {user.post} </small>
                    </div>
                    <AiOutlineLogout onClick={handleLogout} className={close ? "arrowBtn p-1" : 'd-none'} />
                </div>
                <div className="d-flex">
                    <span className={`${close ? 'd-none' : ''} mx-auto my-2 arrowBtn`} onClick={() => setClose(!close)}>
                        <AiOutlineRight />
                    </span>
                </div>
            </div>

        </div >
    );
});

export default LeftNav;