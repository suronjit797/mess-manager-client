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

const Layout = ({ children }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [close, setClose] = useState(true)
    const [userData, setUserDataId] = useState({})
    const token = localStorage.getItem('token')
    useEffect(() => {
        axios.get('/users', {
            headers: {
                'Authorization': token
            }
        })
            .then(res => {
                if (res.data.status) {
                    setUserDataId(res.data.user)
                    dispatch(getUserData(res.data.user))

                    if (!res.data.user.mess_id) {
                        navigate('/create-mess')
                    }
                }
            })
            .catch(err => console.table(err))
        axios.get('/mess/singleMess')
            .then(res => {
                dispatch(getMessData(res.data.mess))
                const userRes = res.data.mess.members.find(member => member._id === userData._id)
                if (userRes && Object.keys(userRes).length > 0) {
                    dispatch(getUserData(userRes))
                }
            })
            .catch(err => console.error(err))
    }, [dispatch, token, navigate])


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