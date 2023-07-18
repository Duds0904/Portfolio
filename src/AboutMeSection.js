import React from 'react';
import './style.css';

const AboutMeSection = () => {
  return (
    <div id="about-me" className="about-me-section">
      <div>
        <img src="./selfiepretoebranco.jpg" alt="Eduardo" className="image2" />
      </div>
      <h2 className="titulo2"><b>SOBRE MIM</b></h2>
      <p className="description1">Meu nome é <b>Eduardo de Oliveira Pontes</b>, Desenvolvedor Front-end</p>
      <p className="description2">Tenho 20 anos de idade, atualmente estou cursando o 6° período de Ciência da Computação pela UniFavip em Caruaru-Pe, com previsão para término em 2024.2. Busco por experiência na área de desenvolvimento Front end, onde pretendo me especializar e seguir carreira. Além disso, no meu tempo livre gosto de praticar exercícios físicos como musculação.</p>
    </div>
  );
};

export default AboutMeSection;
