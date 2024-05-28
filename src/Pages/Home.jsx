import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TaskList from '../components/Task/TaskList';

const Home = () => {
    return (
        <Container className="mt-3">
            <Row className="justify-content-md-center mt-3">
                <Col md="auto">
                    <h2 className="text-center">Task List</h2>
                    <TaskList/>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;