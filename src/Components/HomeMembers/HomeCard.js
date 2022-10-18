import React from 'react';

const HomeCard = ({ name, meal, cost, deposit, balance }) => {
    return (
        <div className="col-md-4">
            <div className="homeCard">
                <h5 className="text_primary fw-bold"> {name} </h5>
                <div className="row text-capitalize">
                    <div className="col-sm-6">
                        <p className='m-0' style={{ fontSize: '12px' }} >Total Meal: {meal}</p>
                        <p className='m-0' style={{ fontSize: '12px' }} >Total Cost: {cost} tk</p>
                    </div>
                    <div className="col-sm-6">
                        <p className='m-0' style={{ fontSize: '12px' }} >Total Deposit: {deposit}</p>
                        <p className='m-0' style={{ fontSize: '12px' }} >Balance: {balance} tk</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;