import axios from 'axios';
import React, { useState } from 'react';
import Layout from '../Components/Layout/Layout'
import Swl from 'sweetalert2'
import { useSelector } from 'react-redux';
import RequireManager from '../utilities/RequireManager';

const AddMeal = () => {
    const mess = useSelector(state => state.mess.messData)
    const token = localStorage.getItem('token')

    const [updateMember, setUpdateMember] = useState({})
    const [err, setErr] = useState('')

    const addMealHandler = event => {
        event.preventDefault()
        if (Object.keys(updateMember).length === 0) {
            return Swl.fire({
                icon: "error",
                title: 'Please Add Members Meal'
            })
        }
        axios.post('/mess/addMultiMembersMeal', updateMember, {
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
        setUpdateMember({})
    }

    // add members meal
    const addMeal = (id, meal) => {
        setUpdateMember(current => {
            if (typeof current[id] === 'undefined') {
                return {
                    ...current,
                    [id]: Number(meal)
                }
            } else {
                return {
                    ...current,
                    [id]: (current[id] + Number(meal))
                }
            }
        })
    }

    const addMealInput = (id, meal) => {
        setUpdateMember(current => {
            if (typeof current[id] === 'undefined') {
                return {
                    ...current,
                    [id]: Number(meal)
                }
            } else {
                return {
                    ...current,
                    [id]: Number(meal)
                }
            }
        })
    }





    return (
        <Layout>
            <div className='d-flex align-items-center justify-content-center' style={{ height: '100%' }}>
                <RequireManager>
                    <div style={{ maxWidth: '300px', width: '100%' }}>
                        {
                            Object.keys(mess).length === 0 ? (
                                <div>
                                    loading
                                </div>
                            ) : (
                                mess.members.map(member => (
                                    <div className='my-2 d-flex align-items-center justify-content-between' key={member._id}>
                                        <h6 className='pe-3 m-0'> {member.name}</h6>
                                        <div className="btn-group align-items-center" role="group" aria-label="Basic example">
                                            <button
                                                type="button"
                                                className="btn btn-outline-primary "
                                                onClick={() => addMeal(member._id, 0.5)}
                                            > + </button>
                                            <input
                                                type="number"
                                                name="number"
                                                id="number"
                                                className='text-center'
                                                style={{ border: '0', maxWidth: '50px', outline: 'none' }}
                                                value={updateMember[member._id] ? updateMember[member._id] : 0}
                                                onChange={e => addMealInput(member._id, e.target.value)}
                                            />
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger "
                                                onClick={() => addMeal(member._id, -0.5)}
                                            > - </button>
                                        </div>
                                    </div>
                                ))
                            )
                        }

                        <div className="text-center my-5">
                            <button className="btn btn-primary px-5" onClick={addMealHandler}> Add Meal </button>
                        </div>
                    </div>

                </RequireManager>
            </div>
        </Layout>
    );
};

export default AddMeal;