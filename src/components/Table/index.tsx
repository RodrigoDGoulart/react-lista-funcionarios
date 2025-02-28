import styles from "./style.module.scss";

import Header from "./Header";
import Row from "./Row";

import { Funcionario } from "../../@types";
import RowMobile from "./RowMobile";

interface Props {
  content: Funcionario[];
  loading?: boolean;
  error?: boolean;
}

const columns = ["foto", "nome", "cargo", "data de admissão", "telefone"];

export default function Table(props: Props) {
  return (
    <div className={styles.table}>
      <Header titles={columns} />
      <div className={styles.body}>
        {props.loading && <p className={styles.loading}>Carregando...</p>}
        {(!props.loading && !props.error) && props.content.map((item) => (
          <>
            <Row key={item.id} data={item} />
            <RowMobile key={`mobile-${item.id}`} data={item} />
          </>
        ))}
        {props.error && <p className={styles.error}>Erro ao carregar lista.</p>} 
      </div>
    </div>
  );
}
