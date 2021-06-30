import './App.css';
import Weather from './Weather.js';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:"center",color:"#ffff",letterSpacing:"4px",
      	textTransform:'uppercase'
  		}}>
      Weather app</h1>
      <Weather/>
    </div>
  );
}

export default App;
