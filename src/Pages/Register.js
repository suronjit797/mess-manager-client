import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import './styles/auth.css'

const Register = () => {
    const navigate = useNavigate()

    const auth = useSelector((state) => state.auth)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [err, setErr] = useState('')

    const token = localStorage.getItem('token')
    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [navigate, token])

    const loginHandler = event => {
        event.preventDefault()

        axios.post('/users/register', {name, email, password, confirmPassword })
        .then(res => {
            if (res.data.status) {
                localStorage.setItem('token', res.data.token)
                navigate('/')
            }
        })
        .catch(error => setErr(error.response.data.message))
    }

    return (
        <div className="auth">
            <div className="container">
                <div className="mx-auto auth-container">
                    <h1 className="text-center fw-bold mb-4 auth_header"> Register </h1>
                    <Form className='w-100' onSubmit={loginHandler}>

                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Enter name"
                                className={err?.name ? 'is-invalid' : ''}
                            />
                            {
                                err?.name ? (
                                    <Form.Text className="text-warning text-capitalize ps-2">  {err?.name} </Form.Text>
                                ) : ''
                            }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Enter email"
                                className={err?.email ? 'is-invalid' : ''}
                            />
                            {
                                err?.email ? (
                                    <Form.Text className="text-warning text-capitalize ps-2">  {err?.email} </Form.Text>
                                ) : ''
                            }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Password"
                                minLength={6}
                                className={err?.password ? 'is-invalid' : ''}
                            />
                            {
                                err?.password ? (
                                    <Form.Text className="text-warning text-capitalize ps-2">  {err?.password} </Form.Text>
                                ) : ''
                            }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="confirmPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                placeholder="Confirm Password"
                                minLength={6}
                                className={err?.confirmPassword ? 'is-invalid' : ''}
                            />
                            {
                                err?.confirmPassword ? (
                                    <Form.Text className="text-warning text-capitalize ps-2">  {err?.confirmPassword} </Form.Text>
                                ) : ''
                            }
                        </Form.Group>


                        <Button
                            variant="primary"
                            className='d-block w-100 mt-4'
                            type="submit"
                        > Register </Button>
                    </Form>
                    <hr className="w-100 my-4" />
                    <Link to='/login' className="btn auth-btn"> Already have an account? Login now </Link>

                </div>
            </div>
        </div>
    )
}

export default Register;