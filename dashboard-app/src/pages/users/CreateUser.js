import React, {useState} from 'react';
import UserForm from "./UserForm";
import {ValidateEmail} from "../../helpers/validators";
import {createUser} from "../../api/users-api";
import Loader from "../../components/loader";
import { useNavigate } from "react-router-dom";

function CreateUser() {
    let navigate = useNavigate();

    const [isLoading, setLoading] = useState(false);

    const submit = (data) => {
        if (!data.username || !data.email)
            return alert("Please fill in the required fields");

        if(!ValidateEmail(data.email))
            return alert("You entered invalid email");

        setLoading(true);

        createUser(data).then(()=>{
            navigate('/users')
        }).finally(()=> setLoading(false))
    }

    return <div className="page">
        <h1>Create user</h1>
        {
            isLoading ?
                <Loader /> :
                <UserForm submit={submit} />
        }

    </div>
}

export default CreateUser;