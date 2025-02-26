import styles from "./style.module.scss";

interface Props {
  titles: string[];
}

export default function Header({ titles }: Props) {
  return (
    <div
      className={styles.header}
      style={{ gridTemplateColumns: `repeat(${titles.length}, 1fr)` }}
    >
      {titles.map((title) => (
        <h4 key={title}>{title}</h4>
      ))}
    </div>
  );
}
