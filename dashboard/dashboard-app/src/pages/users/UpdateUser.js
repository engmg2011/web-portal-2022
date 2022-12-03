import React from 'react';
import {ValidateEmail} from "../../helpers/validators";
import UserForm from "./UserForm";

function UpdateUser (){
    const submit = (data) => {
        if (!data.username || !data.email)
            return alert("Please fill in the required fields");

        if(!ValidateEmail(data.email))
            return alert("You entered invalid email");

        console.log("data", data);
    }

    return <div className="page">
        <h1>Update User</h1>
        <UserForm submit={submit} />

    </div>
}

export default UpdateUser;