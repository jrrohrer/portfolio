import './App.css';
import NavBar from './components/NavBar'
import Header from './components/Header';
import Particles from 'react-tsparticles';

function App() {

  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="App">
      <NavBar />
      <Particles id="tsparticles" url="http://foo.bar/particles.json" init={particlesInit} loaded={particlesLoaded} />
      <Header />
    </div>
  );
}

export default App;
