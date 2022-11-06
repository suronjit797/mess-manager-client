import React, { memo } from 'react';
import { Placeholder } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import HomeCard from './HomeCard';
import './HomeMembers.css'

const HomeMembers = memo(() => {

    const mess = useSelector(state => state.mess.messData)


    if (Object.keys(mess).length === 0) {
        return (
            <div className='homeMembers'>
                <div className="divider mb-4">
                    <div className="divider_row"></div>
                    <div className='divider_text'>
                        <h5 className='text_primary fw-bold mb-0'>All Member Info</h5>
                    </div>
                    <div className="divider_row"></div>
                </div>
                <div className="row g-3" >
                    <div className="col-md-4">
                        <div className="homeCard">
                            <Placeholder animation="glow">
                                <div>
                                    <Placeholder size="lg" xs={3} />
                                </div>
                                <Placeholder size="sm" xs={3} /> <Placeholder size="sm" xs={6} />
                                <Placeholder size="sm" xs={3} /> <Placeholder size="sm" xs={6} />
                            </Placeholder>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="homeCard">
                            <Placeholder animation="glow">
                                <div>
                                    <Placeholder size="lg" xs={3} />
                                </div>
                                <Placeholder size="sm" xs={3} /> <Placeholder size="sm" xs={6} />
                                <Placeholder size="sm" xs={3} /> <Placeholder size="sm" xs={6} />
                            </Placeholder>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="homeCard">
                            <Placeholder animation="glow">
                                <div>
                                    <Placeholder size="lg" xs={3} />
                                </div>
                                <Placeholder size="sm" xs={3} /> <Placeholder size="sm" xs={6} />
                                <Placeholder size="sm" xs={3} /> <Placeholder size="sm" xs={6} />
                            </Placeholder>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
    const { members, meal_rate, sharedCost } = mess




    return (
        <div className='homeMembers'>
            <div className="divider">
                <div className="divider_row"></div>
                <div className='divider_text'>
                    <h5 className='text_primary fw-bold mb-0'>All Member Info</h5>
                    <div className='text-muted'>Total {members?.length} Members</div>
                </div>
                <div className="divider_row"></div>
            </div>

            <div className="memberList mt-4">
                <div className="row g-3" >
                    {
                        members.map(member => <HomeCard key={member._id} {...member} meal_rate={meal_rate} sharedCost={sharedCost} />)
                    }

                </div>
            </div>
        </div>
    );
});

export default HomeMembers;