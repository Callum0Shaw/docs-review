import './index.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ReviewContainer from './components/ReviewContainer';
import Description from './components/Description';
import About from './components/About';
import BestRated from './components/BestRated';
import AddDocForm from './components/AddDocForm';
import CenteredSection from './components/CenteredSection';
import AddReviewForm from './components/AddReviewForm';

function App() {
  const [showForm, setShowForm] = useState({state: false, docID: ''});

  return (
    <div>
      <NavBar />
      <Hero />
      <Description />
      <CenteredSection classes={'bg-white text-black'}>
        <BestRated />
      </CenteredSection>
      <CenteredSection classes={'hex-background'}>
        <AddDocForm />
      </CenteredSection>
      <ReviewContainer setShowForm={setShowForm} />
      <About />
      {showForm.state && <AddReviewForm docID={showForm.docID} setShowForm={setShowForm}/>}
    </div>
  );
}

export default App;
