const Card = ({
  className,
  svg,
  tag,
  title,
  text,
  btn,
  line,
  subtitle,
  slides,
  onClick,
}) => (
  <div className={`card ${className}`} onClick={onClick}>
    <>{svg}</>
    <>{tag}</>
    <>{title}</>
    <>{text}</>
    <>{btn}</>
    <>{line}</>
    <>{subtitle}</>
    <>{slides}</>
  </div>
);

export default Card;
