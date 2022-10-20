import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const CreateMess = () => {
    const navigate = useNavigate()
    const [err, setErr] = useState('')
    const [mess_name, setMess_name] = useState('')
    const [mess_month, setMess_month] = useState(0)
    const [user, setUser] = useState({})


    useEffect(() => {
        axios.get('/users')
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    }, [])


    if (user.mess_id) {
        navigate('/')
    }



    const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]



    const submitHandler = event => {
        event.preventDefault()

        axios.post('/mess', { mess_name, mess_month })
            .then(res => console.log(res.data))
            .catch(error => {
                const message = error.response.data.message
                console.log(message)
                if (error.request.status) {
                    return Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: message,
                    })
                }
                setErr(message)
            })
    }

    return (
        <div className='auth'>
            <div className="container">
                <div className="mx-auto auth-container">
                    <h1 className="text-center fw-bold mb-4 auth_header"> Create A Mess </h1>
                    <Form className='w-100' onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="mess_name">
                            <Form.Label>Mess Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={mess_name}
                                id="mess_name"
                                onChange={e => setMess_name(e.target.value)}
                                placeholder="Enter Mess Name"
                                className={err?.mess_name ? 'is-invalid' : ''}
                            />
                            {
                                err?.mess_name ? (
                                    <Form.Text className="text-warning text-capitalize ps-2"> {err?.mess_name} </Form.Text>
                                ) : ''
                            }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="mess_month">
                            <Form.Label>Select A Month</Form.Label>
                            <Form.Select
                                className={err?.mess_name ? 'is-invalid' : ''}
                                value={mess_month}
                                id='mess_month'
                                onChange={e => setMess_month(e.target.value)}
                            >
                                <option value='0' disabled>Select Your Month</option>
                                {
                                    monthList.map(month => <option key={month} value={month}> {month} </option>)
                                }
                            </Form.Select>
                            {
                                err?.mess_month ? (
                                    <Form.Text className="text-warning text-capitalize ps-2"> {err?.mess_month} </Form.Text>
                                ) : ''
                            }
                        </Form.Group>

                        <Button className='d-block mt-4 w-100' type="submit"> Create a Mess </Button>
                    </Form>

                    <hr className="w-100 my-4" />
                    <p className="text-center">
                        Already have a mess, send your mail to the mess manager and ask him to add you
                    </p>

                </div>
            </div>
        </div>
    );
};

export default CreateMess;