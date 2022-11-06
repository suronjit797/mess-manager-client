import React from 'react';
import { useSelector } from 'react-redux';
import AllMembersCard from '../Components/AllMembersCard/AllMembersCard';
import Layout from '../Components/Layout/Layout'
import Placeholder from 'react-bootstrap/Placeholder';


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
                            <>
                                <div className='col-md-4'>
                                    <div className="p-3 allMemberCard text-capitalize">
                                        <Placeholder animation="glow">
                                            <Placeholder xs={6} />
                                        </Placeholder>
                                        <Placeholder animation="glow">
                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                        </Placeholder>
                                        <Placeholder.Button variant="primary" xs={6} />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="p-3 allMemberCard text-capitalize">
                                        <Placeholder animation="glow">
                                            <Placeholder xs={6} />
                                        </Placeholder>
                                        <Placeholder animation="glow">
                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                        </Placeholder>
                                        <Placeholder.Button variant="primary" xs={6} />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="p-3 allMemberCard text-capitalize">
                                        <Placeholder animation="glow">
                                            <Placeholder xs={6} />
                                        </Placeholder>
                                        <Placeholder animation="glow">
                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                        </Placeholder>
                                        <Placeholder.Button variant="primary" xs={6} />
                                    </div>
                                </div>
                            </>
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