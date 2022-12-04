import React, {useEffect, useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function UserForm({submit, user}) {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');
    useEffect(() => {
        if (user) {
            setUserName(user.username);
            setEmail(user.email)
            setId(user.id)
        }
    }, [user])

    return <Form>
        <Form.Group className="mb-3">
            <Form.Label>Name <span className="text-danger">*</span></Form.Label>
            <Form.Control type="text" placeholder="Name" value={username}
                          onChange={e => setUserName(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Email address <span className="text-danger">*</span></Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email}
                          onChange={e => setEmail(e.target.value)}/>
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={() => submit({id, username, email})}>
            Submit
        </Button>
    </Form>
}

export default UserForm;