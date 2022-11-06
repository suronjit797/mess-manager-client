import React, { memo } from 'react';
import { useSelector } from 'react-redux'

import { BsFillPieChartFill, BsCalendar2Check, BsCreditCard2Back, BsBagDash, BsCup, BsPieChart, BsBagX, BsCart } from 'react-icons/bs';
import { BiUserMinus } from 'react-icons/bi';
import { RiExchangeDollarFill } from 'react-icons/ri';
import { Placeholder } from 'react-bootstrap';

const SummaryLeft = memo(() => {

    // get data from redux
    const mess = useSelector(state => state.mess.messData)

    if (Object.keys(mess).length === 0) {
        return (
            <div className='m-2 border border-1 rounded-3 p-3 text-capitalize' >
                <Placeholder animation="glow">
                    <Placeholder size="lg" xs={1} /> <Placeholder size="lg" xs={10} /> 
                    <Placeholder size="sm" xs={1} /> <Placeholder size="sm" xs={10} /> 
                    <Placeholder size="sm" xs={1} /> <Placeholder size="sm" xs={10} /> 
                    <Placeholder size="sm" xs={1} /> <Placeholder size="sm" xs={10} /> 
                    <Placeholder size="sm" xs={1} /> <Placeholder size="sm" xs={10} /> 
                    <Placeholder size="sm" xs={1} /> <Placeholder size="sm" xs={10} /> 
                    <Placeholder size="sm" xs={1} /> <Placeholder size="sm" xs={10} /> 
                    <Placeholder size="sm" xs={1} /> <Placeholder size="sm" xs={10} /> 
                    <Placeholder size="sm" xs={1} /> <Placeholder size="sm" xs={10} /> 
                </Placeholder>
            </div>
        )
    }

    let { total_deposit, total_meal, total_other_cost, total_solo_cost, meal_rate, sharedCost } = mess

    if (!Number.isFinite(meal_rate)) {
        meal_rate = 0
    }

    const totalMealCost = Number(meal_rate) * Number(total_meal)
    const messBalance = total_deposit - (totalMealCost + total_other_cost + total_solo_cost)

    return (
        <div className='m-2 border border-1 rounded-3 p-3 text-capitalize' >
            <p style={{ fontSize: '18px' }} className="d-flex fw-bold align-items-center text_primary">
                <BsFillPieChartFill className='me-3' /> Mess: {mess?.mess_name}
            </p>
            <p className="d-flex mb-1 fw-bold align-items-center text-capitalize">
                <BsCalendar2Check className='me-3' /> Month : october (Running)
            </p>

            {/* body */}
            <p className="d-flex mb-1 align-items-center text-capitalize">
                <RiExchangeDollarFill className='me-3' /> Mess Balance: {messBalance.toFixed(2)} tk
            </p>
            <p className="d-flex mb-1 align-items-center text-capitalize">
                <BsCreditCard2Back className='me-3' /> Total Deposit: {total_deposit.toFixed(2)} tk
            </p>
            <p className="d-flex mb-1 align-items-center text-capitalize">
                <BsBagDash className='me-3' /> Total Meal Cost: {totalMealCost.toFixed(2)} tk
            </p>
            <p className="d-flex mb-1 align-items-center text-capitalize">
                <BsCup className='me-3' /> Total Meal: {total_meal.toFixed(2)}
            </p>
            <p className="d-flex mb-1 align-items-center text-capitalize">
                <BsPieChart className='me-3' /> Mess Meal Rate: {meal_rate.toFixed(2)} tk
            </p>
            <p className="d-flex mb-1 align-items-center text-capitalize">
                <BiUserMinus className='me-3' /> Total Individual Cost: {total_solo_cost.toFixed(2)} tk
            </p>
            <p className="d-flex mb-1 align-items-center text-capitalize">
                <BsBagX className='me-3' /> Total Shared Cost: {total_other_cost.toFixed(2)} tk
            </p>
            <p className="d-flex mb-1 align-items-center text-capitalize">
                <BsCart className='me-3' /> Shared Cost Per Person: {sharedCost.toFixed(2)} tk
            </p>
        </div>
    );
});

export default SummaryLeft;