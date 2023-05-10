import Benefits from './Benefits/Benefits';

const SectionBenefits = ({ className, title }) => (
  <div className={className}>
    <>{title}</>
    <Benefits />
  </div>
);

export default SectionBenefits;
