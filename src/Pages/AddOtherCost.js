import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Layout from '../Components/Layout/Layout'
import Swl from 'sweetalert2'
import { useSelector } from 'react-redux';
import RequireManager from '../utilities/RequireManager';

const AddOtherCost = () => {
    const mess = useSelector(state => state.mess.messData)
    const token = localStorage.getItem('token')

    const [email, setEmail] = useState(0)
    const [isIndividual, setIsIndividual] = useState(false)
    const [cost, setCost] = useState('')
    const [err, setErr] = useState('')

    const addMemberHandler = event => {
        event.preventDefault()


        if (!cost) {
            return setErr({ cost: 'Please provide amount' })
        } else {
            setErr({})
        }
        if (isIndividual && !email) {
            return setErr({ email: 'Please select a Email' })
        } else {
            setErr({})
        }



        axios.post('/mess/addOtherCost', { email, isIndividual, cost }, {
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
        setEmail(0)
        setCost('')
    }
    return (
        <Layout>
            <div className='d-flex align-items-center justify-content-center' style={{ height: '100%' }}>
                <RequireManager>
                    <Form className='w-100 mx-auto' onSubmit={addMemberHandler} style={{ maxWidth: '400px' }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='ps-2'> Other cost amount</Form.Label>
                            <Form.Control
                                type="number"
                                value={cost}
                                onChange={e => setCost(e.target.value)}
                                placeholder="Enter Other Cost"
                                className={err?.amount ? 'is-invalid' : ''}
                            />
                            {
                                err?.cost ? (
                                    <Form.Text className="text-danger text-capitalize ps-2"> {err?.cost} </Form.Text>
                                ) : ''
                            }
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="Individual Cost"
                                checked={isIndividual}
                                onChange={() => setIsIndividual(!isIndividual)}
                            />
                        </Form.Group>
                        {
                            isIndividual ? (<Form.Group className="mb-3" controlId="email">
                                <Form.Label>Select Member</Form.Label>
                                <Form.Select
                                    className={err?.mess_name ? 'is-invalid' : ''}
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                >
                                    <option value='0' disabled>Select Member</option>
                                    {
                                        mess?.members?.map(member => (
                                            <option key={member._id} value={member.email}> {member.name} :- ( {member.email} ) </option>
                                        ))
                                    }
                                </Form.Select>
                                {
                                    err?.email ? (
                                        <Form.Text className="text-danger text-capitalize ps-2"> {err?.email} </Form.Text>
                                    ) : ''
                                }
                            </Form.Group>) : ''
                        }

                        <Button className='d-block mt-4 w-100' type="submit"> Add Other Cost </Button>
                    </Form>
                </RequireManager>
            </div>
        </Layout>
    );
};

export default AddOtherCost;