import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Layout from '../Components/Layout/Layout'
import Swl from 'sweetalert2'
import RequireManager from '../utilities/RequireManager';

const AddMember = () => {
    const token = localStorage.getItem('token')
    
    const [email, setEmail] = useState('')
    const [err, setErr] = useState('')
    const addMemberHandler = event => {
        event.preventDefault()
        axios.post('/mess/addMember', { email }, {
            headers: {
                'Authorization': token
            }
        })
            .then(res => {
                if (res.data.status) {
                    return Swl.fire({
                        icon: "success",
                        title: 'Success',
                        text: res.data.message,
                    })
                }
            })
            .catch(error => {
                if (error.request.status === 404) {
                    return setErr(error.response.data.message)
                }
                return Swl.fire({
                    icon: "error",
                    title: 'Oops',
                    text: error.response.data.message
                })
            })
        setEmail('')
    }

    return (
        <Layout>
            <div className='d-flex align-items-center justify-content-center' style={{ height: '100%' }}>
                <RequireManager>
                    <Form className='w-100 mx-auto' onSubmit={addMemberHandler} style={{ maxWidth: '400px' }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='ps-2'>Choose Members Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Enter Members Email"
                                className={err?.email ? 'is-invalid' : ''}
                            />
                            {
                                err?.email ? (
                                    <Form.Text className="text-danger text-capitalize ps-2"> {err?.email} </Form.Text>
                                ) : ''
                            }
                        </Form.Group>

                        <Button className='d-block mt-4 w-100' type="submit"> Add a Member </Button>
                    </Form>
                </RequireManager>
            </div>
        </Layout>
    );
};

export default AddMember;