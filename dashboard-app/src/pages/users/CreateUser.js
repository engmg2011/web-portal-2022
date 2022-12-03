import React from 'react';
import UserForm from "./UserForm";
import {ValidateEmail} from "../../helpers/validators";

function CreateUser() {
    const submit = (data) => {
        if (!data.username || !data.email)
            return alert("Please fill in the required fields");

        if(!ValidateEmail(data.email))
            return alert("You entered invalid email");

        console.log("data", data);
    }

    return <div className="page">
        <h1>Create user</h1>
        <UserForm submit={submit} />

    </div>
}

export default CreateUser;