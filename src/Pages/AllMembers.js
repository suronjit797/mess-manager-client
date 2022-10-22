import React from 'react';
import { useSelector } from 'react-redux';
import AllMembersCard from '../Components/AllMembersCard/AllMembersCard';
import Layout from '../Components/Layout/Layout'

const AllMember = () => {
    const mess = useSelector(state => state.mess.messData)
    const user = useSelector(state => state.user.user)

    return (
        <Layout>
            <div className="px-3">
                <h3 className="text-center text_primary my-3 fw-bold"> All Member List </h3>

                {/* all member lists */}
                <div className="row g-4" >
                    {
                        Object.keys(mess).length === 0 || Object.keys(user).length === 0 ? (
                            <p className="text-danger"> Loading ... </p>
                        ) : (
                            Object.keys(mess).length > 0 && mess.members.map(member => (
                                <AllMembersCard key={member._id}  {...member} userPost={user.post} />
                            ))
                        )
                    }
                </div >
            </div>
        </Layout>
    );
};

export default AllMember;