import React, { useState } from 'react';
import { Button, Container, Row, Col, InputGroup, Form } from 'react-bootstrap';

const TaskForm = ({ addTask }) => {
    const [taskText, setTaskText] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        if (taskText.trim() !== "") {
            addTask(taskText);
            setTaskText("");
        }
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Form onSubmit={submitForm} className="mt-5">
                        <InputGroup>
                            <Form.Control type="text" placeholder="Enter task" value={taskText} onChange={(e) => setTaskText(e.target.value)} />
                            <Button variant="primary" type="submit">Add Task</Button>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default TaskForm;