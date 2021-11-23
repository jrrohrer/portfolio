import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />      
    </div>
  );
}

export default App;
