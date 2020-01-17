import React from 'react';
import './global.css';
import './App.css';
import './SideBar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
        <aside>
          <strong>Cadastrar</strong>
          <form>
            <div className="input-block">
              <label htmlFor="github_username">Usuário do Github</label>
              <input name="github_username" id="username_github" required/>
            </div>

            <div className="input-block">
              <label htmlFor="techs">Tecnologias</label>
              <input name="techs" id="techs" required/>
            </div>

            <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latidute</label>
                <input name="latitude" id="latitude" required/>
              </div>
              <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input name="longitude" id="longitude" required/>
              </div>
            </div>
            <button type="submit">Salvar</button>
          </form>
        </aside>
        <main>
          <ul>
            <li className="dev-item">
              <header>
                <img src="https://sdasdsadsadsa"/>
                <div className="user-info">
                  <strong>dasdasasdasdasds</strong>
                  <span>sdasdsadsadsad</span>
                </div>
              </header>
              <p>dsadsadsadsadsa</p>
              <a href="dsadsadsadasds">Visualizar no GitHub</a>
            </li>
          </ul>
        </main>
    </div>
  );
}

export default App;
