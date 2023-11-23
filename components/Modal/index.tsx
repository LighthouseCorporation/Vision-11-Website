import ReactModal from 'react-modal';

const Modal = ({ visible, onClose, children }) => {
  return (
    <ReactModal
      isOpen={visible}
      onRequestClose={onClose}
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        content: {
          border: 'none',
          borderRadius: '8px',
          padding: '5px',
          maxWidth: '400px',
          maxHeight: '300px',
          width: '80%',
          height: '60%',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;