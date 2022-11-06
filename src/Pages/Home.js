import React from 'react';
import { Col, Row } from 'react-bootstrap';
import HomeMembers from '../Components/HomeMembers/HomeMembers';
import Layout from '../Components/Layout/Layout';
import SummaryLeft from '../Components/SummaryLeft';
import SummaryRight from '../Components/SummaryRight';



const Home = () => {
    return (
        <Layout>
            <Row className='gx-1 py-3'  >
                <Col lg={4}> <SummaryLeft /> </Col>
                <Col lg={8}> <SummaryRight /> </Col>
            </Row>
            

            <HomeMembers />


        </Layout>
    );
};

export default Home;