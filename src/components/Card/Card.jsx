// eslint-disable-next-line prettier/prettier
const Card = ({ className, svg, tag, title, text, btn, line, subtitle, gallery, onClick }) => (
  <div className={`card ${className}`} onClick={onClick}>
    <>{svg}</>
    <>{tag}</>
    <>{title}</>
    <>{text}</>
    <>{btn}</>
    <>{line}</>
    <>{subtitle}</>
    <>{gallery}</>
  </div>
);

export default Card;
