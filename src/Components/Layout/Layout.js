import React, { useEffect, useState } from 'react';
import './layout.css'

import LeftNav from '../LeftNav/LeftNav';
import TopNav from '../TopNav/TopNav';
import Footer from '../Footer';
import RequireAuth from '../../utilities/RequireAuth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getMessData } from '../../features/MessSlice'
import { getUserData } from '../../features/UserSlice'
import { getMonthData } from '../../features/MonthSlice'

const Layout = ({ children }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    }, [token])

    const [close, setClose] = useState(true)
    const windowWidth = window.innerWidth
    useEffect(() => {
        if (windowWidth <= 500) {
            setClose(false)
        }
    }, [windowWidth])


    useEffect(() => {
        if (token) {
            // get user data
            axios.get('/users', {
                headers: {
                    'Authorization': token
                }
            })
                .then(res => {
                    if (res.data.status) {
                        dispatch(getUserData(res.data.user))
                        if (!res.data.user.mess_id) {
                            navigate('/create-mess')
                        }
                    }
                })
                .catch(err => console.table(err))

            // get mess data
            axios.get('/mess/singleMess', {
                headers: {
                    'Authorization': token
                }
            })
                .then(res => {
                    if (res.data.status) {
                        dispatch(getMessData(res.data.mess))
                    }
                })
                .catch(err => console.error(err))

            // get month list
            axios.get('/mess/monthList', {
                headers: {
                    'Authorization': token
                }
            })
                .then(res => {
                    if (res.data.status) {
                        dispatch(getMonthData(res.data.month))
                    }
                })
                .catch(err => console.error(err))
        } else {
            navigate('/login')
        }


    }, [dispatch, token, navigate])


    return (
        <RequireAuth>
            <div className='layout'>
                <LeftNav close={close} setClose={setClose} />
                <div className='w-100 px-3 layout_body'>
                    <TopNav close={close} setClose={setClose} />
                    {children}
                    <Footer />
                </div>

            </div>
        </RequireAuth>
    );
};

export default Layout;