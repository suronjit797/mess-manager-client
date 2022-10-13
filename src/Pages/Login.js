import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import './styles/auth.css'

const Login = () => {
    const auth = useSelector((state) => state.auth)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = event => {
        event.preventDefault()
    }

    return (
        <>
            <div className="container">
                <div className="mx-auto auth-container">
                    <h1 className="text-center fw-bold mb-4 auth_header"> Login </h1>
                    <Form className='w-100' onSubmit={loginHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={e=>setEmail(e.target.value)}
                                placeholder="Enter email"
                                className={auth.error.email ? 'is-invalid' : ''}
                            />
                            {
                                auth.error.email ? (
                                    <Form.Text className="text-warning text-capitalize"> {auth.error.email} </Form.Text>
                                ) : ''
                            }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={e=>setPassword(e.target.value)}
                                placeholder="Password"
                                minLength={6}
                                className={auth.error.password ? 'is-invalid' : ''}
                            />
                            {
                                auth.error.password ? (
                                    <Form.Text className="text-warning text-capitalize"> {auth.error.password} </Form.Text>
                                ) : ''
                            }
                        </Form.Group>
                        <Button className='d-block mt-4 w-100' type="submit"> Login </Button>
                    </Form>

                    <hr className="w-100 my-4" />
                    <Link to='/register' className="btn auth-btn"> Don't have an account? Register now </Link>

                </div>
            </div>
        </>
    )
}

export default Login;