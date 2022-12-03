import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";

function ListUsers() {

    const [isLoading, setLoading] = useState(true);
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setUsersList([
                {
                    id: 1,
                    username: 'Mohamed',
                    email: 'eng.mg2011@gmail.com',

                },
                {
                    id: 2,
                    username: 'Ahmed',
                    email: 'ahmed@gmail.com',

                }
            ])
            setLoading(false);

        }, 2000);
    }, [isLoading]);

    return <div className="page">
        <h1>List users</h1>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Operations</th>
            </tr>
            </thead>
            <tbody>
            {
                isLoading ? (<tr>
                        <td colSpan={4}>
                            <div className="alert alert-dark text-center"> Loading data ...</div>
                        </td>
                    </tr>) :
                    usersList.map((user) =>
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                            <Button className="ms-2" variant="primary">Update</Button>
                            <Button className="ms-2" variant="danger">Delete</Button>
                        </td>
                    </tr>
                )

            }
            </tbody>
        </Table>
    </div>
}

export default ListUsers;