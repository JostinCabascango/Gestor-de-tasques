import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Task from './Task';
import TaskForm from './TaskForm';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (text) => {
        const newTask = { text, completed: false };
        setTasks(prevTasks => [...prevTasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks(prevTasks => prevTasks.filter((task, index) => index !== id));
    };

    const completeTask = (id) => {
        setTasks(prevTasks => prevTasks.map((task, index) => index === id ? { ...task, completed: !task.completed } : task));
    };

    return (
        <Container fluid className="d-flex align-items-center justify-content-center mt-3">
            <Row>
                <Col>
                    <Card>
                        <Card.Body className="text-center">
                            <Card.Title className="display-4">Task List</Card.Title>
                            <TaskForm addTask={addTask} />
                            {tasks.map((task, index) => (
                                <Task key={index} id={index} text={task.text} completed={task.completed} completeTask={completeTask} deleteTask={deleteTask} />
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default TaskList;