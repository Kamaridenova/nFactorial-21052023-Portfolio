import './App.css';
import NavBar from './Components/navbar';
import Intro from './Components/Container/introduce';

function App() {
  return (
    <div className="App d-flex flex-column mx-5 mt-3">
    
      <NavBar/>
      <Intro/>
    </div>
  );
}

export default App;
