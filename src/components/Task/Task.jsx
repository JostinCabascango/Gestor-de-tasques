import React from 'react';
import { Button, ListGroupItem } from 'react-bootstrap';

const Task = ({ id, text, completed, completeTask, deleteTask }) => {
    const taskStyle = completed ? "line-through" : "none";

    return (
        <ListGroupItem className="d-flex justify-content-between align-items-center" action onClick={() => completeTask(id)} style={{ textDecoration: taskStyle, marginBottom: '1rem' }}>
            {text}
            <Button variant="danger" onClick={(e) => { e.stopPropagation(); deleteTask(id); }} style={{ marginBottom: '0.5rem' }}>Delete</Button>
        </ListGroupItem>
    );
};

export default Task;