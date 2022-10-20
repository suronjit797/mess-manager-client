import React from 'react';
import AllMembersCard from '../Components/AllMembersCard/AllMembersCard';
import Layout from '../Components/Layout/Layout'

const AllMember = () => {
    const user = {
        name: 'Suronjit Pal',
        email: 'suronjit797@gmail.com',
        post: 'member',
        phone: '01799057302',
        bazar: '2022-01-30'
    }



    return (

        <Layout>
            <div className="px-3">
                <h3 className="text-center text_primary my-3 fw-bold"> All Member List </h3>

                {/* all member lists */}
                <div className="row g-4" >
                    <AllMembersCard  {...user} />
                    <AllMembersCard  {...user} />
                </div >
            </div>
        </Layout>
    );
};

export default AllMember;