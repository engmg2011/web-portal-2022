import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import Loader from "../../components/loader";
import {deleteUser, getUsersList} from "../../api/users-api";
import Pagination from 'react-bootstrap/Pagination';

let active = 1;
let paginationItems = [];

// TODO:: complete pagination process

function ListUsers() {

    const [isLoading, setLoading] = useState(true);
    const [usersList, setUsersList] = useState([]);

    const getPageUsersList = () => {
        getUsersList().then((resp) => {
            active = resp.current_page;
            paginationItems = [];
            setUsersList(resp.data);
            for (let number = 1; number <= resp.last_page; number++) {
                paginationItems.push(
                    <Pagination.Item key={number} active={number === active}>
                        {number}
                    </Pagination.Item>,
                );
            }

        }).finally(() => setLoading(false))
    };

    useEffect(() => {
        getPageUsersList();
    }, [isLoading]);

    const deleteListUser = (id) => {
        const confirmed = window.confirm('Confirm delete user ?')
        if(confirmed){
            deleteUser(id).then(()=>{
                getPageUsersList();
            })
        }
    }

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
            {
                isLoading ? (<tbody>
                    <tr>
                        <td colSpan={4}><Loader/></td>
                    </tr>
                    </tbody>) :
                    <tbody>
                    {

                        usersList.map((user) =>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <a className="btn btn-primary ms-2" href={`/users/update/${user.id}`}>Update</a>
                                    <a className="btn btn-danger ms-2" href='#'
                                       onClick={() => deleteListUser(user.id)}>Delete</a>
                                </td>
                            </tr>)
                    }

                    <tr>
                        <td colSpan={4}>
                            <Pagination>
                                <Pagination.First/>
                                <Pagination.Prev/>
                                {paginationItems.map((item) =>
                                    item
                                )}
                                <Pagination.Next/>
                                <Pagination.Last/>
                            </Pagination>

                        </td>
                    </tr>
                    </tbody>


            }
        </Table>
    </div>
}

export default ListUsers;