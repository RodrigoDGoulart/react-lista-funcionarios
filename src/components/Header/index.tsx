import logo from '../../assets/betalent-logo.png';
import styles from './style.module.scss';

export default function Header() {
  return(
    <header className={styles.header}>
      <img src={logo} alt="BeTalent" />
    </header>
  )
}