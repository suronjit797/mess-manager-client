import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import './styles/auth.css'

const Register = () => {
    const auth = useSelector((state) => state.auth)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const loginHandler = event => {
        event.preventDefault()
    }

    return (
        <>
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
                                className={auth.error.name ? 'is-invalid' : ''}
                            />
                            {
                                auth.error.name ? (
                                    <Form.Text className="text-warning text-capitalize"> {auth.error.name} </Form.Text>
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
                                onChange={e => setPassword(e.target.value)}
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

                        <Form.Group className="mb-3" controlId="confirmPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                placeholder="Confirm Password"
                                minLength={6}
                                className={auth.error.confirmPassword ? 'is-invalid' : ''}
                            />
                            {
                                auth.error.confirmPassword ? (
                                    <Form.Text className="text-warning text-capitalize"> {auth.error.confirmPassword} </Form.Text>
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
        </>
    )
}

export default Register;