import './index.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ReviewContainer from './components/ReviewContainer'
import Description from './components/Description'
import About from './components/About'
import BestRated from './components/BestRated'

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Description />
      <BestRated />
      <ReviewContainer />
      <About />
    </div>
  );
}

export default App;
