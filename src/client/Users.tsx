import { Link, useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Users = (props: UsersProps) => {

    const [name, setName] = useState<string>('Username')
    let history = useHistory()
    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const UserData = {
            name:  name
        }

        fetch('/api/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(UserData)
        })
            .then(res => alert(res))
            .then(() => history.push(`/`))
    }

    return (
        <>
            <div className="container form m-3">
                <div className="input-group mb-3">
                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} type="text" className="form-control" placeholder="name" aria-label="Username" aria-describedby="basic-addon1" />
                    <button onClick={handleButtonClick} className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>
            </div>
        </>
    )
}
export interface User {
	id: number,
    name: string,
    _created: string
}

interface UsersProps { };

interface UsersState { };


export default Users;