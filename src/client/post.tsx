import { Link, useHistory, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { User } from '../utilities';
const Post = () => {

    
    const [userid, setUserid] = useState<number>()
    const [chirpText, setChirpText] = useState<string>('chirpText')
    const [users, setUsers] = useState<Array<User>>(null);
    let location = useLocation()
    console.log(location)
    let history = useHistory()
    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const ChirpData = {
            userid: userid,
            
            content: chirpText
        }

        fetch('/api/chirps', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ChirpData)
        })
            .then(res => alert(res))
            .then(() => history.push(`/`))
    }

     useEffect(() => {
        fetch('/api/users')
        .then(res => res.json())
        .then(userRes => {
            setUsers(userRes)
            setUserid(userRes[0].id)
            console.log(userRes)
            console.log(users)
        })
     }, [])
       
    return (
        <>
            <div className="container form m-3">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <div className="form-group">
                        <select defaultValue='default' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setUserid(Number(e.target.selectedOptions[0].value))} className="form-control" id="exampleFormControlSelect1">
                            <option disabled value='default'>Select User</option>
                            {users?.map(u => {
                                return (
                                <option value={u.id} key={u.id}>{u.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChirpText(e.target.value)} type="text" className="form-control" placeholder="chirpText" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div>
                    <button onClick={handleButtonClick} className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post;