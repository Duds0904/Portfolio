import React from 'react';
import './style.css';
import ImageSection from './ImageSection';
import AboutMeSection from './AboutMeSection';

const App = () => {

  const handlePerfilButtonClick = () => {
    const aboutMeSection = document.getElementById('about-me');
    const sectionTop = aboutMeSection.getBoundingClientRect().top;
    window.scrollTo({ top: sectionTop, behavior: 'smooth' });
  };

  return (
    <div>
      <ImageSection />
      <AboutMeSection />
    </div>
  );
};

export default App;
