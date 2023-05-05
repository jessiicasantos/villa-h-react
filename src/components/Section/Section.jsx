const Section = ({ className, title, text, btn }) => (
  <section className={className}>
    <>{title}</>
    <>{text}</>
    <>{btn}</>
  </section>
);

export default Section;
