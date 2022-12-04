import React, {useEffect, useState} from 'react';
import {ValidateEmail} from "../../helpers/validators";
import UserForm from "./UserForm";
import {useParams} from "react-router-dom";
import {getUser, updateUser} from "../../api/users-api";
import Loader from "../../components/loader";

function UpdateUser() {
    const [isLoading, setLoading] = useState(false);

    let {userId} = useParams();
    const [user, setUser] = useState();

    const getUserData = ()=>{
        getUser(userId).then((resp) => {
            setUser(resp.data);
        })
    }

    useEffect(() => {
        getUserData()
    }, [userId]);

    const submit = (data) => {
        if (!data.username || !data.email)
            return alert("Please fill in the required fields");

        if (!ValidateEmail(data.email))
            return alert("You entered invalid email");

        setLoading(true);
        updateUser(data).then(() => {
            getUserData();
        }).finally(() => {
            setLoading(false);
        })
    }

    return <div className="page">
        <h1>Update User</h1>
        {
            isLoading ? <Loader/> :
                <UserForm submit={submit} user={user}/>
        }

    </div>
}

export default UpdateUser;