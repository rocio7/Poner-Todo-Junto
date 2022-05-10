import Persona from "./Componentes/Persona/Persona";
import './App.css';

const App = ()  => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="contendor-cards">

        <Persona firstName = "Jane"  lastName = "Doe" age = "45" hairColor = "Black"/>
        <Persona firstName = "John" lastName = "Smith" age = "88" hairColor = "Brown"/>
      </div>
    </div>
  );
}

export default App;