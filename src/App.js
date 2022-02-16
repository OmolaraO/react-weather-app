import './App.css';
import Weather from "./Weather";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container"> 
      <Weather defaultCity="Lagos"/> 
      </div>
      <footer>
      <a href="https://github.com/OmolaraO/react-weather-app">Open source code</a> by Omolara
        </footer>
    </div>
  );
}

export default App;
