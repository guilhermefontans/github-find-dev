import React, {useEffect, useState} from 'react'
import './styles.css';

function DevForm({ onSubmit }) {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [techs, setTechs] = useState('');
    const [github_username, setGitHubUsername] = useState('');

    useEffect(()=> {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude} = position.coords
                setLatitude(latitude);
                setLongitude(longitude);
            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 3000
            }
        );

    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude,
        });
        setGitHubUsername('');
        setTechs('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="github_username">Usuário do Github</label>
                <input
                    name="github_username"
                    id="username_github"
                    required
                    value={github_username}
                    onChange={e => setGitHubUsername(e.target.value)}
                />
            </div>

            <div className="input-block">
                <label htmlFor="techs">Tecnologias</label>
                <input
                    name="techs"
                    id="techs"
                    required
                    value={techs}
                    onChange={e => setTechs(e.target.value)}
                />
            </div>

            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="latitude">Latidute</label>
                    <input
                        type="number"
                        name="latitude"
                        id="latitude"
                        value={latitude}
                        required
                        onChange={e => setLatitude(e.target.value)}
                    />
                </div>
                <div className="input-block">
                    <label htmlFor="longitude">Longitude</label>
                    <input
                        type="number"
                        name="longitude"
                        id="longitude"
                        value={longitude}
                        required
                        onChange={e => setLongitude(e.target.value)}
                    />
                </div>
            </div>
            <button type="submit">Salvar</button>
        </form>
    );
}

export default DevForm;