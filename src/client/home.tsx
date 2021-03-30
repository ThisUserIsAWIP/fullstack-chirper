import * as React from 'react';
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Chirp } from '../utilities';

const Home = (props: HomeProps) => {

	const [chirps, setChirps] = useState<Chirp[]>(null);
    
    let location = useLocation()
    console.log(location)
    
	useEffect(() => {
		fetch('/api/chirps')
			.then(res => res.json())
			.then(chirpRes => {
				setChirps(chirpRes)
				console.log(chirpRes)
			})
	}, [location]);
   
return (
    <div>
        <div>

            <div id="chirpContainer" className='row d-flex inline-block'>
                {chirps?.map(c => {
                    return (
                        <div className='col-md-4' key={c.id}>
                            <div className="card shadow my-2">
                                <div className='card-body'>
                                    <h4 className='card-title'>{c.name}</h4>
                                    <p className='card-text'>{c.content}</p>
                                    <p className='card-subtext'><Link to={`/${c.id}`}>Edit</Link></p>
                                </div>
                            </div>
                        </div>
                        // <div key={c.id} className="card border border-5 border-primary rounded m-3 p-2">
                        // 	<h5 className="card-title">@{c.author}</h5>
                        // 	<p className="card-text">{c.text}</p>
                        // </div>
                    )
                })}
            </div>
        </div>


    </div>
)};



interface HomeProps { };

interface HomeState { };


export default Home;