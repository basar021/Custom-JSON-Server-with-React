import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

/*
Steps->
1. At first create a database folder in root -> create db.json
2. npm i json-server
3. npx json-server -p 3001 -w database/db.json
4. npm install axios
custom url-> http://localhost:3001/users
*/
const App = () => {
    const [users, setUsers] = useState([]);

    const getAllUsers = async () => {
        const response = await axios.get('http://localhost:3001/users');
        console.log(response.data);
        setUsers(response.data);
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <div>
            <h1>Creat Custom JSON Server</h1>

            {users.map((user) => {
                const { id, name, username, email } = user;
                return (
                    <article key={id}>
                        <h1>Id: {id}</h1>
                        <h1>Name: {name}</h1>
                        <h4>Username: {username}</h4>
                        <h4>Email: {email}</h4>
                    </article>
                );
            })}
        </div>
    );
};
export default App;
