import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ openModal, items }) {
  return (
    <ul className={css.listImage}>
      {items.map((item) => (
        <li
          key={item.id}
          className={css.itemImg}
          onClick={() => {
            openModal(item);
          }}
        >
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
}
