import styles from "./style.module.scss";
import dot from "../../../assets/white-dot.svg";

interface Props {
  titles: string[];
}

export default function Header({ titles }: Props) {
  return (
    <div className={styles.header}>
      <div
        className={styles.titles}
        style={{ gridTemplateColumns: `repeat(${titles.length}, 1fr)` }}
      >
        {titles.map((title) => (
          <h4 key={title}>{title}</h4>
        ))}
      </div>
      <img className={styles.dot} src={dot} />
    </div>
  );
}
