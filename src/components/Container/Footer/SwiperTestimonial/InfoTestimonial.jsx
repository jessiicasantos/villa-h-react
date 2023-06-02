const InfoTestimonial = ({ data }) => {
  return (
    <div className="info-testimonial">
      <img src={data.photo} alt={`Foto de ${data.name}`} />
      <div>
        <h5>{data.name}</h5>
        <h6>{data.type}</h6>
      </div>
    </div>
  );
};

export default InfoTestimonial;
