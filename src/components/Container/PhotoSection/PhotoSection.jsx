import { useState, useRef } from 'react';
import SalaoPrincipal from '../img/Salao-Principal.png';
import Loft from '../img/Loft-e-varanda-externa.png';
import Deck from '../img/Deck-Piscina.png';
import Gastronomia from '../img/Gastronomia_Villa H.png';
import Photo from './Photo/Photo';
import Section from '../../Section/Section';
import Modal from '../../Modal/Modal';

const columns = [
  {
    id: 'salaoprincipal',
    photo: SalaoPrincipal,
    title: 'Salão principal e varanda',
    text: 'Ambiente totalmente climatizado, com cobertura e cortina de vidro, possibilitando que cerimônias e comemorações sejam realizadas com a vista deslumbrante que a Villa H proporciona.',
    alt: '',
  },
  {
    id: 'loft',
    photo: Loft,
    title: 'Loft e varanda externa',
    text: 'Ambiente parcialmente coberto, com uma varanda externa aberta, possibilitando a realização de cerimônias ao ar livre.',
    alt: '',
  },
  {
    id: 'deck',
    photo: Deck,
    title: 'Deck piscina',
    text: 'Área coberta e área ao redor da piscina, ambiente ao ar livre. Neste espaço é possível realizar cerimônias com vista direta para o Cristo redentor.',
    alt: '',
  },
  {
    id: 'gastronomia',
    photo: Gastronomia,
    title: 'Gastronomia da Villa H',
    text: 'Área coberta e área ao redor da piscina, ambiente ao ar livre. Neste espaço é possível realizar cerimônias com vista direta para o Cristo redentor.',
    alt: '',
  },
];

function PhotoSection() {
  const [modalIsOpen, setModalIsOpen] = useState('');
  const modalRef = useRef(null);

  const openModal = (ev) => {
    let evTarget = ev.target;

    console.log('open');
    if (evTarget) {
      console.log(evTarget);
    }
    setModalIsOpen('open');
    document.body.addEventListener('click', closeModal);
  };

  const closeModal = (event) => {
    event.stopPropagation();

    let evTarget = event.target;

    if (evTarget.classList.contains('open')) {
      console.log(event.target);
      setModalIsOpen('');
    }
  };

  // const closeModal = () => setModalIsOpen();

  return (
    <div className="photos-section">
      {columns.map((c, index) => (
        <div
          key={`photo-section-${index}`}
          className={`photo-section photo-${!(index % 2) ? 'left' : 'right'}`}
        >
          <Photo src={c.photo} alt={c.alt} />
          <Section
            className="section section-dark"
            title={<h2>{c.title}</h2>}
            text={<p>{c.text}</p>}
            btn={
              <button className="btn-dark-blue" onClick={openModal}>
                VER GALERIA DO AMBIENTE
              </button>
            }
          />
          <Modal
            id={`modal-${c.id}`}
            className={modalIsOpen}
            modalRef={modalRef}
            title={<h2>{c.title}</h2>}
            gallery={<img src={c.photo} alt={c.alt} />}
          />
        </div>
      ))}
    </div>
  );
}

export default PhotoSection;
