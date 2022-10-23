import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Layout from '../Components/Layout/Layout'
import Swl from 'sweetalert2'
import RequireManager from '../utilities/RequireManager';
import { getUserData } from '../features/UserSlice'
import { getMessData } from '../features/MessSlice'
import { useDispatch, useSelector } from 'react-redux'
import jwt_decode from "jwt-decode";


const SwitchActiveMonth = () => {
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    const decoded = jwt_decode(token.split(' ')[1]);
    const monthList = useSelector(state => state.months.monthList)
    const user = useSelector(state => state.user.user)

    const [month, setMonth] = useState(0)
    const [err, setErr] = useState('')


    const addMemberHandler = event => {
        event.preventDefault()
        axios.post('/mess/changeMonth', { month_id: month }, {
            headers: {
                'Authorization': token
            }
        })
            .then(res => {
                const userRes = res.data.mess.members.find(member => member._id === decoded.id) || {}
                if (Object.keys(userRes).length > 0) {
                    dispatch(getUserData(userRes))
                    dispatch(getMessData(res.data.mess))
                }
                if (res.data.status) {
                    return Swl.fire({
                        icon: 'success',
                        title: '',
                        text: res.data.message,
                    })
                }
            })
            .catch(error => {
                const message = error.response.data.message
                if (error.request.status === 403) {
                    return Swl.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: message,
                    })
                }
                setErr(message)
            })

        setMonth(0)
    }
    return (
        <Layout>
            <div className='d-flex align-items-center justify-content-center' style={{ height: '100%' }}>
                <Form className='w-100 mx-auto' onSubmit={addMemberHandler} style={{ maxWidth: '400px' }}>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Select Month</Form.Label>
                        <Form.Select
                            className={err?.mess_name ? 'is-invalid text-capitalize' : 'text-capitalize'}
                            value={month}
                            onChange={e => setMonth(e.target.value)}
                        >
                            <option value='0' disabled>Select Month</option>
                            {
                                monthList?.map(month => (
                                    <option
                                        className={month._id === user.active_month ? 'fw-bold' : ''}
                                        key={month._id}
                                        value={month._id}> {
                                            month.month} {month.year} {month._id === user.active_month ? '(Active)' : ''}
                                    </option>
                                ))
                            }
                        </Form.Select>
                        {
                            err?.month ? (
                                <Form.Text className="text-warning text-capitalize ps-2"> {err?.email} </Form.Text>
                            ) : ''
                        }
                    </Form.Group>
                    <Button className='d-block mt-4 w-100' type="submit"> Get Month Data </Button>
                </Form>
            </div>
        </Layout>
    );
};

export default SwitchActiveMonth;