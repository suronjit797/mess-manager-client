import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Layout from '../Components/Layout/Layout'
import Swl from 'sweetalert2'
import { useSelector } from 'react-redux';
import RequireManager from '../utilities/RequireManager';

const AddMeal = () => {
    const mess = useSelector(state => state.mess.messData)

    const [email, setEmail] = useState(0)
    const [meal, setMeal] = useState('')
    const [err, setErr] = useState('')

    const addMemberHandler = event => {
        event.preventDefault()
        axios.post('/mess/addMembersMeal', { email, meal })
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
        setMeal('')
    }
    return (
        <Layout>
            <div className='d-flex align-items-center justify-content-center' style={{ height: '100%' }}>
                <RequireManager>
        
                </RequireManager>
            </div>
        </Layout>
    );
};

export default AddMeal;