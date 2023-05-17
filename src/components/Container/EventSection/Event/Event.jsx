import { ReactComponent as Drink } from '../../../../assets/img/drink-icon.svg';
import { ReactComponent as Bride } from '../../../../assets/img/bride-icon.svg';
import MenuEvent from '../MenuEvent/MenuEvent';
import Card from '../../../Card/Card';
import SwiperEvent from '../SwiperEvent/SwiperEvent';

const cardInfoList = [
  {
    className: 'active',
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

const Event = () => (
  <div className="event">
    <MenuEvent />
    {cardInfoList.map((c, i) => (
      <Card
        className={`card-event theme-gray ${c.className}`}
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

export default Event;
