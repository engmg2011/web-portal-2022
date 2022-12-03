
import React from 'react';

function Home (){
    return <div className="home-page">
        <h1>Welcome to the web portal</h1>

        <ul className="list list-unstyled fs-2">
            <li><a href="/users/create">Create a new user</a></li>
            <li><a href="/users/">List all users</a></li>
        </ul>
    </div>
}

export default Home;