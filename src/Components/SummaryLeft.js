import React, { memo } from 'react';

import { BsFillPieChartFill, BsCalendar2Check } from 'react-icons/bs';
import { RiExchangeDollarFill } from 'react-icons/ri';

const SummaryLeft = memo(() => {
    return (
        <div className='m-2 border border-1 rounded-3 p-3 text-capitalize' >
            <p style={{ fontSize: '18px' }} className="d-flex fw-bold align-items-center text_primary">
                <BsFillPieChartFill className='me-3' /> Mess: sahanur vai apartments
            </p>
            <p className="d-flex mb-1 fw-bold align-items-center text-capitalize">
                <BsCalendar2Check className='me-3' /> Month : october (Running)
            </p>
            <p className="d-flex mb-1 align-items-center text-capitalize">
                <RiExchangeDollarFill className='me-3' /> Mess Balance: 1699 tk
            </p>
            <p className="d-flex mb-1 align-items-center text-capitalize">
                <BsFillPieChartFill className='me-3' /> Total Deposit: 7145 tk
            </p>
            <p className="d-flex mb-1 align-items-center text-capitalize">
                <BsFillPieChartFill className='me-3' /> Total Meal Cost: 5446 tk
            </p>
            <p className="d-flex mb-1 align-items-center text-capitalize">
                <BsFillPieChartFill className='me-3' /> Total Meal: 116.5
            </p>
            <p className="d-flex mb-1 align-items-center text-capitalize">
                <BsFillPieChartFill className='me-3' /> Mess Meal Rate: 46.75 tk
            </p>
            <p className="d-flex mb-1 align-items-center text-capitalize">
                <BsFillPieChartFill className='me-3' /> Total Individual Cost: 0 tk
            </p>
            <p className="d-flex mb-1 align-items-center text-capitalize">
                <BsFillPieChartFill className='me-3' /> Total Individual Cost: 0 tk
            </p>
            <p className="d-flex mb-1 align-items-center text-capitalize">
                <BsFillPieChartFill className='me-3' /> Shared Cost Per Person: 0.00 tk
            </p>
        </div>
    );
});

export default SummaryLeft;