import logo from './logo.svg';
import './App.css';
import Saludar from "./components/Saludar"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar name="Limber" edad="32"/>
        <Saludar name="Cuevas" edad="84"/>
      </header>
    </div>
  );
}

export default App;
