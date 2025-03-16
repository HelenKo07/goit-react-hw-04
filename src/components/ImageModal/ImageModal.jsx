import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

Modal.setAppElement("#modal-root");

export default function ImageModal({ photo, isCloseModal }) {

  const isOpen = Boolean(photo);
  return (
      <Modal
        className={css.modal}
        overlayClassName={css.overlay}
        isOpen={isOpen}
        onRequestClose={isCloseModal}
        contentLabel="Image Preview"
        ariaHideApp={true}
      >
        {photo && (
          <>
          <img
          className={css.modalImage}
          src={photo?.urls?.regular}
          alt={photo?.alt_description || "Image"}
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <p className={css.text}>{photo?.alt_description}</p>
        <p className={css.text}>Likes: {photo?.likes}</p>
        <p className={css.text}>Instagram: {photo?.user?.instagram_username}</p>
        <button className={css.btnModal} onClick={isCloseModal}>
          <AiOutlineClose />
        </button>
           </>
          )}
      </Modal>
  );
}

