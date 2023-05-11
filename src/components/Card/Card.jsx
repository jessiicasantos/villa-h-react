// eslint-disable-next-line prettier/prettier
const Card = ({ className, svg, tag, title, text, btn, line, subtitle, gallery }) => (
  <div className={`card ${className}`}>
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
