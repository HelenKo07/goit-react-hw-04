import css from "./ImageCard.module.css";

export default function ImageCard({ item }) {
  return (
    <div className={css.containerImg}>
      <img
        className={css.imageitem}
        src={item.urls.small}
        alt={item.alt_description}
      />
    </div>
  );
}
