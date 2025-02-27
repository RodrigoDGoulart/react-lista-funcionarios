import styles from './style.module.scss';

interface Props {
  value: string;
  label: string;
}

export default function Info({ value, label }: Props) {
  return(
    <div className={styles.info}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
    </div>
  )
}