import React from 'react';
import './AllMembersCard.css'
import defaultUser from '../../images/user.webp'
import axios from 'axios'
import jwt_decode from "jwt-decode";

import { GoMail } from 'react-icons/go';
import { BsTelephoneForward, BsBookmarkPlus, BsCalendarEvent } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { RiAdminFill } from 'react-icons/ri';
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { getMessData } from '../../features/MessSlice'
import { getUserData } from '../../features/UserSlice'



const AllMembersCard = ({ _id, name, email, post, phone, bazar, userPost }) => {
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    const decoded = jwt_decode(token);

    const handleManager = id => {
        Swal.fire({
            icon: 'question',
            text: 'Are you sure want to change manager?',
            showCancelButton: true,
            confirmButtonText: 'Change',
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post('/mess/changeManager', { userId: id }, {
                    headers: {
                        'Authorization': token
                    }
                })
                    .then(res => {
                        const { status, mess } = res.data
                        if (status) {
                            dispatch(getMessData(mess))
                        }
                        mess.members.forEach(member => {
                            if (member.email === decoded.email) {
                                dispatch(getUserData(member))
                            }
                        })
                        Swal.fire('Saved!', '', 'success')
                    })
                    .catch(error =>  Swal.fire( 'Opps...', error.response.data.message, 'error'))
            }
        })
    }
    const handleDelete = id => {
        Swal.fire({
            icon: 'question',
            text: 'Are you sure want to remove this member?',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post('/mess/removeMember', { userId: id }, {
                    headers: {
                        'Authorization': token
                    }
                })
                    .then(res => {
                        const { status, mess } = res.data
                        if (status) {
                            dispatch(getMessData(mess))
                        }
                        Swal.fire('Remove!', '', 'success')
                    })
                    .catch(error =>  Swal.fire( 'Opps...', error.response.data.message, 'error'))
            }
        })
    }



    return (
        <div className='col-lg-3 col-md-4' >
            <div className="p-3 allMemberCard text-capitalize">
                <div className="text-center text-primary">
                    <img src={defaultUser} alt="user" />
                    <h5 className="fw-bold text_primary my-2"> {name ? name : 'Not Set Yet'} </h5>
                </div>

                <div className="d-flex align-items-center my-1 text-lowercase">
                    <GoMail className='me-2 text_primary ' /> {email ? email : 'Not Set Yet'}
                </div>
                <div className="d-flex align-items-center my-1">
                    <BsTelephoneForward className='me-2 text_primary' /> {phone ? phone : 'Not Set Yet'}
                </div>
                <div className="d-flex align-items-center my-1">
                    <BsBookmarkPlus className='me-2 text_primary' /> {post ? post : 'Not Set Yet'}
                </div>
                <div className="d-flex align-items-center my-1">
                    <BsCalendarEvent className='me-2 text_primary' /> {bazar ? bazar : 'Not Set Yet'}
                </div>

                {
                    userPost.toLowerCase() === 'manager' ? (
                        <>
                            <hr />
                            <div className="d-flex">
                                <button
                                    onClick={() => handleManager(_id)}
                                    title='Make manager'
                                    className="adminBtn text-success"
                                    disabled={post.toLowerCase() === 'manager'}
                                > <RiAdminFill /> </button>

                                <button
                                    onClick={() => handleDelete(_id)}
                                    title='Delete user'
                                    className="deleteBtn text-danger"
                                    disabled={post.toLowerCase() === 'manager'}
                                > <MdDelete /> </button>
                            </div>
                        </>
                    ) : ''
                }


            </div>
        </div>
    );
};

export default AllMembersCard;