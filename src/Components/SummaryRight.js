import React, { memo } from 'react';
import { Col, Row } from 'react-bootstrap';

import { BsCupFill, BsFillCreditCard2BackFill, BsFillCalendarEventFill } from 'react-icons/bs';
import { HiBriefcase } from 'react-icons/hi';

import { useSelector } from 'react-redux'


const SummaryLeft = memo(() => {

    // get data from redux
    const user = useSelector(state => state.user.user)
    const mess = useSelector(state => state.mess.messData)

    if (Object.keys(mess).length === 0 || Object.keys(mess).length === 0) {
        return <p> Loading... </p>
    }

    // calculate data 
    const myCost = (Number(user?.meal) * mess.meal_rate) + (Number(user.solo))
    const myBalance = Number(user?.balance) - myCost

    return (
        <>
            <div className='m-2 rounded-3 px-2 py-3 text-capitalize' >
                <h5 className="d-flex fw-bold align-items-center text_primary mb-3">
                    my personal info
                </h5>

                <Row className='g-2'>
                    <Col xs={3}>
                        <div className="border-0 card p-3 " style={{ background: 'rgb(232, 246, 255)' }}>
                            <h4 className="fw-bold mb-3"> {user?.meal} </h4>
                            <h3> <BsCupFill style={{ color: 'rgb(14 165 233)' }} /> </h3>
                            <small> My Total Meal </small>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div className="border-0 card p-3 " style={{ background: 'rgb(255, 246, 221)' }}>
                            <h4 className="fw-bold mb-3"> {user?.balance?.toFixed(2)} tk </h4>
                            <h3> <BsFillCreditCard2BackFill style={{ color: 'rgb(255 133 72)' }} /> </h3>
                            <small> My Deposit </small>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div className="border-0 card p-3 " style={{ background: 'rgb(255, 240, 233)' }}>
                            <h4 className="fw-bold mb-3"> {myCost.toFixed(2)} tk </h4>
                            <h3> <BsCupFill style={{ color: 'rgb(251 90 85)' }} /> </h3>
                            <small> My Cost </small>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div className="border-0 card p-3 " style={{ background: 'rgb(230, 252, 222)' }}>
                            <h4 className="fw-bold mb-3"> {myBalance.toFixed(2)} tk </h4>
                            <h3> <HiBriefcase style={{ color: 'rgb(34 197 94)' }} /> </h3>
                            <small> My Balance </small>
                        </div>
                    </Col>
                </Row>

            </div>
            <h5 className='m-2 border border-1 rounded-3 p-3 text-capitalize' >
                <div className='text_primary fw-bold'> My Bazar Date </div>
                <small className='py-2 px-3 rounded-2 d-inline-block mt-3' style={{ background: '#f3f4f0', fontSize: '14px' }}>
                    <BsFillCalendarEventFill className='me-2' /> NOT_SET_YET
                </small>
            </h5>
        </>
    );
});

export default SummaryLeft;