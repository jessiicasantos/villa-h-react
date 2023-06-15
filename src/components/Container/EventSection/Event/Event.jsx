import { ReactComponent as Drink } from '../../../../assets/img/drink-icon.svg';
import { ReactComponent as Bride } from '../../../../assets/img/bride-icon.svg';
import MenuEvent from '../MenuEvent/MenuEvent';
import Card from '../../../Card/Card';
import SwiperEvent from '../SwiperEvent/SwiperEvent';
import { useState } from 'react';

const cardInfoList = [
  {
    id: 'preWed',
    className: 'active',
    svg: <Drink />,
    tag: <h5 className="tag"></h5>,
    title: <h3>Pré Wedding</h3>,
    text: (
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        nostrum. Officiis eius cupiditate repudiandae distinctio officia
        tempore, perferendis voluptatem magnam, blanditiis magni laboriosam.
        Explicabo incidunt delectus quae nemo, vitae atque!
      </p>
    ),
  },
  {
    id: 'dayUse',
    svg: <Drink />,
    tag: <h5 className="tag"></h5>,
    title: <h3>Day Use</h3>,
    text: (
      <p>
        Day use é uma modalidade de hospedagem sem pernoite, podendo-se
        aproveitar a estrutura do local. Além da nossa vista maravilhosa, você
        pode aproveitar um dia de sol na piscina da Villa H. Assim, você pode
        curtir ao máximo tudo o que o nosso espaço tem a oferecer
      </p>
    ),
  },
  {
    svg: <Bride />,
    tag: <h5 className="tag"></h5>,
    title: <h3>Elopement Wedding</h3>,
    text: (
      <p>
        É realizada uma cerimônia, sendo indicado para os casais que desejam
        viver intensamente o romantismo do momento. O ideal é que seja realizado
        apenas com os noivos, podendo contar com um número máximo de 10 pessoas,
        incluindo celebrante e fotógrafo. Os locais escolhidos para essa
        celebração normalmente conta com um visual de maravilhoso e a Villa H se
        encaixa perfeitamente, contribuindo com fotos incríveis deste dia.
      </p>
    ),
  },
];

const Event = () => {
  const [openCard, setOpenCard] = useState(cardInfoList[0].id);

  const handleOpenCard = (id) => {
    console.log('test click');
    setOpenCard(id, !openCard);
  };

  return (
    <div className="event">
      <MenuEvent onClick={handleOpenCard} />
      {cardInfoList.map((c, i) => (
        <Card
          className={`card-event theme-gray ${
            openCard === c.id ? 'active' : ''
          }`}
          key={`${c}`[i]}
          svg={c.svg}
          tag={c.tag}
          title={c.title}
          text={c.text}
          btn={
            <a href="#orcamento" className="btn-dark-blue">
              SOLICITAR UM ORÇAMENTO
            </a>
          }
          line={<hr />}
          subtitle={<h6>Veja fotos desse evento</h6>}
          gallery={<SwiperEvent />}
        />
      ))}
    </div>
  );
};

export default Event;
