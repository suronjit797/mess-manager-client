import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Layout from '../Components/Layout/Layout'
import Swl from 'sweetalert2'
import { useSelector } from 'react-redux';
import RequireManager from '../utilities/RequireManager';

const AddMealCost = () => {
    const mess = useSelector(state => state.mess.messData)

    const [email, setEmail] = useState(0)
    const [mealCost, setMealCost] = useState('')
    const [err, setErr] = useState('')

    const addMemberHandler = event => {
        event.preventDefault()
        axios.post('/mess/addMembersMealCost', { email, mealCost })
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
        setMealCost('')
    }
    return (
        <Layout>
            <div className='d-flex align-items-center justify-content-center' style={{ height: '100%' }}>
                <RequireManager>
                    <Form className='w-100 mx-auto' onSubmit={addMemberHandler} style={{ maxWidth: '400px' }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='ps-2'> Meal cost amount</Form.Label>
                            <Form.Control
                                type="number"
                                value={mealCost}
                                onChange={e => setMealCost(e.target.value)}
                                placeholder="Enter Meal Cost"
                                className={err?.amount ? 'is-invalid' : ''}
                            />
                            {
                                err?.amount ? (
                                    <Form.Text className="text-danger text-capitalize ps-2"> {err?.amount} </Form.Text>
                                ) : ''
                            }
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
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
                                    <Form.Text className="text-warning text-capitalize ps-2"> {err?.email} </Form.Text>
                                ) : ''
                            }
                        </Form.Group>

                        <Button className='d-block mt-4 w-100' type="submit"> Add Meal Cost </Button>
                    </Form>
                </RequireManager>
            </div>
        </Layout>
    );
};

export default AddMealCost;