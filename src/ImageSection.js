import React from 'react';
import './style.css';

const ImageSection = () => {

  const handlePerfilButtonClick = () => {
    // Encontra a posição vertical da seção "AboutMeSection" relativa à página
    const aboutMeSection = document.getElementById('about-me');
    const sectionTop = aboutMeSection.getBoundingClientRect().top;

    // Rola a página para a posição da seção "AboutMeSection"
    window.scrollTo({ top: sectionTop + window.scrollY, behavior: 'smooth' });
  };

  const handleHomeButtonClick = () => {
    // Rola a página para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="image-section">
      <div className="text-container">
        <p className="frase"> <b>OLÁ! <br/> ME CHAMO EDUARDO</b></p>
        <p className="front-end-text"><b>DESENVOLVEDOR FRONT END</b></p>
      </div>
      <div className="lista">
        <ul>
          {/* Botão Home com a função handleHomeButtonClick */}
          <li><button className="btn-home" onClick={handleHomeButtonClick}><img src="./casa.png" alt="casa" className="casaimagem" /></button></li>
          {/* Botão Perfil com a função handlePerfilButtonClick */}
          <li><button className="btn-perfil" onClick={handlePerfilButtonClick}><img src="./perfil.png" alt="perfil" className="casaimagem perfil-image" /></button></li>
          <li><button className="btn-skills"><img src="./lampada.png" alt="casa" className="casaimagem" /></button></li>
          <li><button className="btn-projects"><img src="./maleta.png" alt="casa" className="casaimagem" /></button></li>
          <li><button className="btn-contacts"><img src="./telefone.png" alt="casa" className="casaimagem" /></button></li>
        </ul>
      </div>
      <div className="image-container">
        <img src="./selfiepretoebranco.jpg" alt="Eduardo" className="image" />
      </div>
    </div>
  );
};

export default ImageSection;
