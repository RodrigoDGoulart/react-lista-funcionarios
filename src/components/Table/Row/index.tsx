import { Funcionario } from "../../../@types";
import styles from "./style.module.scss";

interface Props {
  data: Funcionario;
}

export default function Row({ data }: Props) {
  return (
    <div className={styles.row}>
      <span>{data.foto}</span>
      <span>{data.nome}</span>
      <span>{data.cargo}</span>
      <span>{data.dataAdmissao.toLocaleDateString('pt-BR')}</span>
      <span>{data.telefone}</span>
    </div>
  );
}
