import React, { useEffect, useState } from 'react';
import './layout.css'

import LeftNav from '../LeftNav/LeftNav';
import TopNav from '../TopNav/TopNav';
import Footer from '../Footer';
import RequireAuth from '../../utilities/RequireAuth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


const Layout = ({ children }) => {

    const navigate = useNavigate()

    const [close, setClose] = useState(true)
    const [user, setUser] = useState({})


    useEffect(() => {
        axios.get('/users')
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if (!user.mess_id) {
            navigate('/create-mess')
        }
    }, [])

    useEffect(() => {
        if (!user.mess_id) {
            navigate('/create-mess')
        }
    }, [user.mess_id, navigate])

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