import React, { memo } from 'react';
import HomeCard from './HomeCard';
import './HomeMembers.css'

const HomeMembers = memo(() => {
    return (
        <div className='homeMembers'>
            <div className="divider">
                <div className="divider_row"></div>
                <div className='divider_text'>
                    <h5 className='text_primary fw-bold mb-0'>All Member Info</h5>
                    <div className='text-muted'>Total 12 Members</div>
                </div>
                <div className="divider_row"></div>
            </div>

            <div className="memberList">
                <div className="row">
                    <HomeCard name='Suronjit Pal' meal='15.5' cost='927.14' deposit='15000' balance='572' />
                </div>
            </div>
        </div>
    );
});

export default HomeMembers;