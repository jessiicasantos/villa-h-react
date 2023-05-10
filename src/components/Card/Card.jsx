// eslint-disable-next-line prettier/prettier
const Card = ({ svg, tag, title, text }) => (
  <div className="card">
    <>{svg}</>
    <>{tag}</>
    <>{title}</>
    <>{text}</>
  </div>
);

export default Card;
