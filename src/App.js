import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <NavBar />
      
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/experience' component={Experience} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
