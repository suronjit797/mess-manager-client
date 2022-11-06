import React from 'react';

const HomeCard = ({ name, meal, meal_rate, balance, solo, sharedCost }) => {

    if (!Number.isFinite(meal_rate)) {
        meal_rate = 0
    }


    let totalCost = (Number(meal_rate) * Number(meal)) + Number(solo) + Number(sharedCost)

    return (
        <div className="col-md-4">
            <div className="homeCard">
                <h5 className="text_primary fw-bold text-capitalize"> {name} </h5>
                <div className="row text-capitalize">
                    <div className="col-sm-6">
                        <p className='m-0' style={{ fontSize: '12px' }} >Total Meal: {meal.toFixed(2)}</p>
                        <p className='m-0' style={{ fontSize: '12px' }} >
                            Total Cost: {Number(totalCost).toFixed(2)} tk
                        </p>
                    </div>
                    <div className="col-sm-6">
                        <p className='m-0' style={{ fontSize: '12px' }} >Total Deposit: {balance.toFixed(2)} tk</p>
                        <p className='m-0' style={{ fontSize: '12px' }} >
                            Balance: {(Number(balance) - (Number(totalCost))).toFixed(2)} tk
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;