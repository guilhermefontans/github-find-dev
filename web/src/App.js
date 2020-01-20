import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './SideBar.css';
import './Main.css';

function App() {
    const [devs, setDevs] = useState([]);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [techs, setTechs] = useState('');
    const [github_username, setGitHubUsername] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await api.post('/devs', {
            github_username,
            techs,
            latitude,
            longitude,
        });

        setGitHubUsername('');
        setTechs('');
        setDevs([...devs, response.data]);
    }

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

    useEffect(() => {
        async function loadDevs() {
            const response = await api.get('/devs');
            setDevs(response.data);
        }
        loadDevs();
    }, []);
    return (
        <div id="app">
            <aside>
              <strong>Cadastrar</strong>
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
            </aside>
            <main>
              <ul>
                  {devs.map(dev => (
                    <li key={dev._id} className="dev-item">
                      <header>
                        <img src={dev.avatar_url}/>
                        <div className="user-info">
                          <strong>{dev.name}</strong>
                          <span>{dev.techs.join(', ')}</span>
                        </div>
                      </header>
                      <p>{dev.bio}</p>
                      <a href={`https://github.com/${dev.github_username}`}>Visualizar no GitHub</a>
                    </li>
                  ))}
              </ul>
            </main>
        </div>
    );
}

export default App;
