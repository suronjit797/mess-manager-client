import React from 'react';
import './AllMembersCard.css'
import defaultUser from '../../images/user.webp'

import { GoMail } from 'react-icons/go';
import { BsTelephoneForward, BsBookmarkPlus, BsCalendarEvent } from 'react-icons/bs';



const AllMembersCard = ({ name, email, post, phone, bazar }) => {
    return (
        <div className='col-lg-3 col-md-4'>
            <div className="p-3 allMemberCard">
                <div className="text-center text-primary">
                    <img src={defaultUser} alt="user" />
                    <h5 className="fw-bold text_primary my-2"> {name} </h5>
                </div>

                <div className="d-flex align-items-center my-1">
                    <GoMail className='me-2 text_primary' /> {email}
                </div>
                <div className="d-flex align-items-center my-1">
                    <BsTelephoneForward className='me-2 text_primary' /> {post}
                </div>
                <div className="d-flex align-items-center my-1">
                    <BsBookmarkPlus className='me-2 text_primary' /> {phone}
                </div>
                <div className="d-flex align-items-center my-1">
                    <BsCalendarEvent className='me-2 text_primary' /> {bazar}
                </div>
            </div>
        </div>
    );
};

export default AllMembersCard;