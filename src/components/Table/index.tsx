import styles from "./style.module.scss";

import Header from "./Header";
import Row from "./Row";

import { Funcionario } from "../../@types";

interface Props {
  content: Funcionario[];
  mobileMaxColumns: number;
}

const columns = ["foto", "nome", "cargo", "data de admissão", "telefone"];

export default function Table(props: Props) {
  return (
    <div className={styles.table}>
      <Header
        titles={columns}
      />
      <div className={styles.body}>
        {props.content.map(item => (
          <Row data={item} />
        ))}
      </div>
    </div>
  );
}
