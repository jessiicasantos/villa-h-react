import BouquetFlowers from '../../img/bouquet-flowers.png';
import Decoration from '../../img/decoration-Villa-H.png';
import CakeDecorated from '../../img/cake-decorated.png';
import GreenLace from '../../img/green-lace.png';
import MountainSea from '../../img/Decoration-Flowers-Mountain-Sea.jpg';

const imageList = [
  {
    img: BouquetFlowers,
  },
  {
    img: Decoration,
  },
  {
    img: CakeDecorated,
  },
  {
    img: GreenLace,
  },
  {
    img: MountainSea,
  },
];

const CardsGallery = () => (
  <ul className="gallery-list" id="fotos">
    {imageList.map((image, i) => (
      <li key={`${image}`[i]} className={`${i % 2 ? 'void' : 'photo'}`}>
        <img src={image.img} alt="" />
      </li>
    ))}
  </ul>
);

export default CardsGallery;
