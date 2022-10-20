import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import HomeCard from './HomeCard';
import './HomeMembers.css'

const HomeMembers = memo(() => {

    const mess = useSelector(state => state.mess.messData)
    

    if (Object.keys(mess).length === 0) {
        return <p> Loading... </p>
    }
    const { members, meal_rate } = mess




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
                    {
                        members.map(member => <HomeCard key={member._id} {...member} meal_rate={meal_rate} />)
                    }
                    
                </div>
            </div>
        </div>
    );
});

export default HomeMembers;