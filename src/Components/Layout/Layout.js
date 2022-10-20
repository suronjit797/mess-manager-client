import React, { useEffect, useState } from 'react';
import './layout.css'

import LeftNav from '../LeftNav/LeftNav';
import TopNav from '../TopNav/TopNav';
import Footer from '../Footer';
import RequireAuth from '../../utilities/RequireAuth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMessData } from '../../features/MessSlice'
import { getUserData } from '../../features/UserSlice'


const Layout = ({ children }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)

    const [close, setClose] = useState(true)


    useEffect(() => {
        axios.get('/users')
            .then(res => {
                dispatch(getUserData(res.data.user))
            })
            .catch(err => console.table(err))

        axios.get('/mess/singleMess')
            .then(res => dispatch(getMessData(res.data.mess)))
            .catch(err => console.table(err))
    }, [dispatch])

    useEffect(() => {
        if (Object.keys(user).length && !user.mess_id) {
            navigate('/create-mess')
        }
    }, [navigate, user])

    return (
        <RequireAuth>
            <div className='layout'>
                <LeftNav close={close} setClose={setClose} />
                <div className='w-100 px-3 layout_body'>
                    <TopNav />
                    {children}
                    <Footer />
                </div>

            </div>
        </RequireAuth>
    );
};

export default Layout;