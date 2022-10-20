import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import './styles/auth.css'

const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState('')

    const token = localStorage.getItem('token')
    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [navigate, token])

    const loginHandler = event => {
        event.preventDefault()
        axios.post('/users/login', { email, password })
            .then(res => {
                if (res.data.status) {
                    localStorage.setItem('token', res.data.token)
                    navigate('/')
                }
            })
            .catch(error => setErr(error.response.data.message))


    }

    return (
        <div className='auth'>
            <div className="container">
                <div className="mx-auto auth-container">
                    <h1 className="text-center fw-bold mb-4 auth_header"> Login </h1>
                    <Form className='w-100' onSubmit={loginHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Enter email"
                                className={err?.email ? 'is-invalid' : ''}
                            />
                            {
                                err?.email ? (
                                    <Form.Text className="text-warning text-capitalize ps-2"> {err?.email} </Form.Text>
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
                                    <Form.Text className="text-warning text-capitalize ps-2"> {err?.password} </Form.Text>
                                ) : ''
                            }
                        </Form.Group>
                        <Button className='d-block mt-4 w-100' type="submit"> Login </Button>
                    </Form>

                    <hr className="w-100 my-4" />
                    <Link to='/register' className="btn auth-btn"> Don't have an account? Register now </Link>

                </div>
            </div>
        </div>
    )
}

export default Login;