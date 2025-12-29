
import './App.css';

import Menu from "./components/Menu"
import Carrusel from "./components/Carrusel"
import Servicios from "./components/Servicios"
import Pie from "./components/Pie"
function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
        <Menu/>
        <Carrusel/>
        <Servicios/>
        <Pie/>
        
      </div>
      
    </div>
  );
}

export default App;
