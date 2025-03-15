import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

export default function ImageModal({ isOpenModal, photo, isCloseModal }) {
  if (!photo) return null;

  return (
    <>
      <Modal
        className={css.modal}
        isOpen={isOpenModal}
        onRequestClose={isCloseModal}
        contentLabel="Image Preview"
        ariaHideApp={false}
      >
        <img
          className={css.modalImage}
          src={photo?.urls?.regular}
          alt={photo?.alt_description || "Image"}
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <p className={css.text}>Description: {photo?.alt_description}</p>
        <p className={css.text}>Likes: {photo?.likes}</p>
        <p className={css.text}>Download: {photo?.links?.download}</p>
        <p className={css.text}>Instagram: {photo?.user?.instagram_username}</p>
        <button className={css.btnModal} onClick={isCloseModal}>
          <AiOutlineClose />
        </button>
      </Modal>
    </>
  );
}
// export default function ImageModal({ isOpenModal, photo, isCloseModal }) {
//   console.log("ImageModal received photo:", photo); // Проверяем, что пришло

//   return (
//     <>
//       <Modal className={css.modal} isOpen={isOpenModal} onRequestClose={isCloseModal}>
//         {photo && photo.urls ? (
//           <>
//             <img className={css.modalImage} src={photo.urls.regular || null} alt={photo.alt_description || "No description"} />
//             <p className={css.text}>Description: {photo.alt_description || "No description available"}</p>
//             <p className={css.text}>Likes: {photo.likes}</p>
//             <p className={css.text}>Download: <a href={photo.links?.download} target="_blank" rel="noopener noreferrer">Download Link</a></p>
//             <p className={css.text}>Instagram: {photo.user?.instagram_username || "N/A"}</p>
//           </>
//         ) : (
//           <p className={css.text}>No image data available</p>
//         )}
//         <button className={css.btnModal} onClick={isCloseModal}>
//           <AiOutlineClose />
//         </button>
//       </Modal>
//     </>
//   );
// }
