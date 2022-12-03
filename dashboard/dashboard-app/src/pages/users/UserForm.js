import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function UserForm ({submit}){
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')

    return <Form>
        <Form.Group className="mb-3">
            <Form.Label>Name <span className="text-danger">*</span></Form.Label>
            <Form.Control type="text" placeholder="Name"
                          onChange={e => setUserName(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Email address <span className="text-danger">*</span></Form.Label>
            <Form.Control type="email" placeholder="Enter email"
                          onChange={e => setEmail(e.target.value)}/>
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={()=>submit({username,email})}>
            Submit
        </Button>
    </Form>
}

export default UserForm;