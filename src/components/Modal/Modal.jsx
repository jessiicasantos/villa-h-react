import './Modal.css';

const Modal = ({ id, className, title, gallery }) => (
  <div className={`${className} modal`} id={id}>
    <button className="btn-close">X</button>
    <div className="modal-wrapper">
      <>{title}</>
      <>{gallery}</>
    </div>
  </div>
);

export default Modal;
