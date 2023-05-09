const CardsHorizontal = ({ svg, tag, title, text }) => (
  <div className="card card-dark-blue">
    <>{svg}</>
    <>{tag}</>
    <>{title}</>
    <>{text}</>
  </div>
);

export default CardsHorizontal;
