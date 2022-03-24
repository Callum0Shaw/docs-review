import './index.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <About />
    </>
  );
}

export default App;
