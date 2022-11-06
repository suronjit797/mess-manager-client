import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Layout from '../Components/Layout/Layout'
import Swl from 'sweetalert2'
import { useSelector } from 'react-redux';
import RequireManager from '../utilities/RequireManager';


import { ImBin2 } from 'react-icons/im';

const DeleteOldMonth = () => {
    const mess = useSelector(state => state.mess.messData)
    const token = localStorage.getItem('token')
    const monthList = useSelector(state => state.months.monthList)
    const user = useSelector(state => state.user.user)


    const deleteOldHandler = (id, mess_id, month, year) => {
        console.log(id, month, year)
        axios.delete(`/mess/deleteOldMonth/${id}?month=${month}&mess_id=${mess_id}&year=${year}`, {
            headers: {
                'Authorization': token,
            }
        })
            .then(res => {
                console.log(res.data)
                if (res.data.status) {
                    return Swl.fire({
                        icon: "success",
                        title: 'Success',
                        text: res.data.message,
                    })
                }
            })
            .catch(error => {
                console.log(error)
                return Swl.fire({
                    icon: "error",
                    title: 'Oops',
                    text: error.response.data.message
                })
            })
    }
    return (
        <Layout>
            <div className='d-flex justify-content-center flex-column' style={{ height: '100%' }}>
                <RequireManager>
                    <div className='mx-auto' style={{ width: '300px', maxWidth: '100%' }}>
                        {
                            monthList.length > 1 ? monthList?.map(month => month._id === user.active_month ? "" : (
                                <div
                                    className='d-flex align-items-center justify-content-between'
                                    key={month._id}
                                    value={month._id}
                                    style={{ borderBottom: '1px solid #dbcece' }}
                                >
                                    <div className='pe-2'> {month.month} {month.year}</div>
                                    <button 
                                    className='btn text-danger' 
                                    onClick={() => deleteOldHandler(month._id, month.month_id, month.month, month.year)}
                                    > <ImBin2 /> </button>
                                </div>
                            )) : <p className="text-danger text-center"> No Old Month Found </p>
                        }

                    </div>
                </RequireManager>
            </div>
        </Layout>
    );
};

export default DeleteOldMonth;