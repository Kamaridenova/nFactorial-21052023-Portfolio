import './App.css';
import NavBar from './Components/navbar';
import Intro from './Components/Container/introduce';
import AboutMe from './Components/Container/AboutMe';
import Experience from './Components/Container/experience';
import ProjectToDoList from './Components/Container/project1';
import ProjectMediaAsMedium from './Components/Container/project2';
import SayHello from './Components/Container/SayHello';
import Footer from './Components/Container/footer';

function App() {
  return (
    <div className="App d-flex flex-column">
        <NavBar/>
        <Intro/>
        <AboutMe/>
        <Experience/>
        <ProjectToDoList/>
        <ProjectMediaAsMedium/>
        <SayHello/>
        <Footer/>
    </div>
  )
}

export default App;
