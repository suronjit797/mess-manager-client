import React, { memo } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './LeftNav.css'
import Swal from 'sweetalert2'
import Placeholder from 'react-bootstrap/Placeholder';

import {
    FcHome,
    FcPortraitMode,
    FcMoneyTransfer,
    FcSettings,
    FcDonate,
    FcShipped,
    FcBarChart,
    FcPlus,
    FcBusinessman,
    FcConferenceCall,
    FcAddDatabase,
    FcProcess,
    FcDeleteDatabase,
    FcCancel
} from 'react-icons/fc';
import { AiOutlineRight, AiOutlineLeft, AiOutlineLogout } from 'react-icons/ai';

import { useSelector } from 'react-redux';
import axios from 'axios';


const LeftNav = memo(({ close, setClose }) => {
    const navigate = useNavigate()
    const user = useSelector(state => state.user.user)
    const mess = useSelector(state => state.mess.messData)



    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    const managerNav = [
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
        {
            icon: <FcConferenceCall />,
            name: 'All Members',
            link: '/all-members',
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
    ]

    const memberNav = [
        {
            icon: <FcHome />,
            name: 'Home',
            link: '/',
        },
        {
            icon: <FcBarChart />,
            name: 'Active Month Details',
            link: '/active-month-details',
        },
        {
            icon: <FcConferenceCall />,
            name: 'All Members',
            link: '/all-members',
        },
        {
            icon: <FcProcess />,
            name: 'Switch Active Month',
            link: '/switch-active-month',
        },
    ]

    const deleteMessHandler = () => {
        Swal.fire({
            title: 'Do you want to delete mess?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/mess/deleteMess/${mess._id}?monthId=${mess.month_id}`)
                    .then(res => {
                        if (res.data.status) {
                            Swal.fire({
                                text: 'Mess deleted successfully',
                                icon: 'success'
                            })
                            navigate('/create-mess')
                        }
                    })
                    .catch(error => Swal.fire({
                        title: 'Opps...',
                        text: error.response.data.message,
                        icon: 'error'
                    }))
            }
        })
    }

    return (
        <div className={close ? 'rightNav' : 'rightNav active'}>
            <div className="logo">
                <Link to='/'> <h5 className='m-0'>MM</h5> </Link>
                <span className={`${close ? '' : 'd-none'} arrowBtn`} onClick={() => setClose(!close)}>
                    <AiOutlineLeft />
                </span>
            </div>


            {
                Object.keys(user).length === 0 || Object.keys(mess).length === 0 ? (
                    <div className='p-3'>
                        <Placeholder animation="glow">
                            <Placeholder xs={12} className='my-2' />
                            <Placeholder xs={12} className='my-2' />
                            <Placeholder xs={12} className='my-2' />
                            <Placeholder xs={12} className='my-2' />
                            <Placeholder xs={12} className='my-2' />
                            <Placeholder xs={12} className='my-2' />
                            <Placeholder xs={12} className='my-2' />
                            <Placeholder xs={12} className='my-2' />
                        </Placeholder>
                    </div>
                ) : (
                    <ul className='mb-0'>
                        {
                            (user.post.toLowerCase() === 'manager' ? managerNav : memberNav).map(item => (
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

                        <li >
                            {
                                (user.post.toLowerCase() === 'manager' ? (
                                    <div
                                        onClick={deleteMessHandler}
                                        className={`rightNavItems ${close ? '' : 'justify-content-center'}`}>
                                        <span className='icon'>  <FcCancel /> </span>
                                        <span className={`${close ? '' : 'd-none '} text`}> Delete Mess </span>
                                    </div>
                                ) : (
                                    <NavLink
                                        to='/delete-mess'
                                        className={`rightNavItems ${close ? '' : 'justify-content-center'}`}>
                                        <span className='icon'>  <FcCancel /> </span>
                                        <span className={`${close ? '' : 'd-none '} text`}> Delete Mess </span>
                                    </NavLink>
                                ))
                            }
                        </li>
                    </ul>
                )
            }

            <div className="bottomNav mt-auto">
                <div className="user">
                    <div className={close ? "userImg" : 'userImg mx-auto'}>
                        {
                            user.picture ? <img src={user.picture} alt={user.name} /> : <FcBusinessman />
                        }
                    </div>
                    <div className={close ? "userDetails" : 'd-none'}>
                        <p className="user-name m-0 text-center text-capitalize"> {
                            user.name ? user.name : (
                                <Placeholder animation="glow" >
                                    <Placeholder xs={12} style={{ width: '100px' }} size="sm" className='my-2' />
                                </Placeholder>
                            )
                        } </p>
                        <small className='user-role d-block text-center text-capitalize'> {
                            user.post ? user.post : (
                                <Placeholder animation="glow" >
                                    <Placeholder xs={12} style={{ width: '100px' }} size="xs" className='my-2' />
                                </Placeholder>
                            )
                        } </small>
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