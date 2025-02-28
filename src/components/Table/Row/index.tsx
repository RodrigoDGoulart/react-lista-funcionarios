import { Funcionario } from "../../../@types";
import Avatar from "../../Avatar";
import styles from "./style.module.scss";

interface Props {
  data: Funcionario;
}

export default function Row({ data }: Props) {
  return (
    <div className={styles.row}>
      <span><Avatar src={data.image} /></span>
      <span>{data.name}</span>
      <span>{data.job}</span>
      <span>{data.admission_date.toLocaleDateString('pt-BR')}</span>
      <span>{data.phone}</span>
    </div>
  );
}
