import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Layout from '../Components/Layout/Layout'
import Swl from 'sweetalert2'
import { useSelector } from 'react-redux';
import RequireManager from '../utilities/RequireManager';

const StartNewMonth = () => {
    const mess = useSelector(state => state.mess.messData)

    const [month, setMonth] = useState(0)
    const [err, setErr] = useState('')

    const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const addMemberHandler = event => {
        event.preventDefault()
        axios.post('/mess/createNew', { mess_month: month })
            .then(res => {
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
                <RequireManager>
                    <Form className='w-100 mx-auto' onSubmit={addMemberHandler} style={{ maxWidth: '400px' }}>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Select Member</Form.Label>
                            <Form.Select
                                className={err?.mess_name ? 'is-invalid' : ''}
                                value={month}
                                onChange={e => setMonth(e.target.value)}
                            >
                                <option value='0' disabled>Select Month</option>
                                {
                                    monthList?.map(month => (
                                        <option key={month} value={month}> {month} </option>
                                    ))
                                }
                            </Form.Select>
                            {
                                err?.month ? (
                                    <Form.Text className="text-warning text-capitalize ps-2"> {err?.email} </Form.Text>
                                ) : ''
                            }
                        </Form.Group>

                        <Button className='d-block mt-4 w-100' type="submit"> Create new month </Button>
                    </Form>
                </RequireManager>
            </div>
        </Layout>
    );
};

export default StartNewMonth;