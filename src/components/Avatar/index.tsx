import styles from "./style.module.scss";
import defaultPhoto from "../../assets/default-user-photo.png";

export default function Avatar(
  props: React.ImgHTMLAttributes<HTMLImageElement>
) {

  return (
    <img
      {...props}
      src={props.src || defaultPhoto}
      className={`${styles.img} ${props.className}`}
      onError={(e) => e.currentTarget.src = defaultPhoto}
    />
  );
}
