import { useParams, useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Chirp, User } from '../utilities';

const Edit = (props: EditProps) => {

    const [userid, setUserid] = useState<Chirp['userid']>()
    const [chirpText, setChirpText] = useState<string>('chirpText')
    let {id} = useParams<{id: string}>()
    let history = useHistory()
    console.log(id)

    useEffect(() => {
		fetch(`/api/chirps/${id}`)
			.then(res => res.json())
			.then(chirpRes => {
                setUserid(chirpRes[0].userid)
				setChirpText(chirpRes[0].content)
				console.log(chirpRes[0])
			})
	}, [id]);
    const handleButtonClickEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const ChirpData = {
            userid: userid,
            content:  chirpText 
        }

        fetch(`/api/chirps/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ChirpData)
        })
            .then(res => res.json())
            .then(res => alert(res))
            .then(() => history.push(`/`))

    }

    const handleButtonClickDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        fetch(`/api/chirps/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(res => alert(res))
            .then(() => history.push(`/`))
    }

    return (
        <>
            <div className="container form m-3">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChirpText(e.target.value)} type="text" className="form-control" placeholder={chirpText} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <button onClick={handleButtonClickEdit} className="btn btn-outline-secondary" type="button" id="button-addon2">Edit</button>
                    <button onClick={handleButtonClickDelete} className="btn btn-outline-secondary" type="button" id="button-addon2">Delete</button>
                </div>
            </div>
        </>
    )
}
interface EditProps { };

interface EditState { };
export default Edit;