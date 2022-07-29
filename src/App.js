import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="nav-item nav-logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="nav-item">
                    <a href="/projects">Мои проекты</a>
                </div>
            </header>

            <main className="App-main big-container">
                <h1 className="big">Juashik</h1>
            </main>

            <footer className="App-footer">
                <p>Когда-нибудь будет не лень...</p>
            </footer>
        </div>
    );
}

export default App;
