
import './App.css';

import Testimonio from "./components/Testimonio"
import Menu from "./components/Menu"
import Carrusel from "./components/Carrusel"
import Emergencia from "./components/Emergencia"
import Historia from "./components/Historia"
import Servicios from "./components/Servicios"
import Pie from "./components/Pie"
function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
        <Menu/>
        <Carrusel/>
        <Emergencia/>
        <Historia/>
        <Servicios/>        
        <Testimonio/>
        <Pie/>
        
        
      </div>
      
    </div>
  );
}

export default App;
