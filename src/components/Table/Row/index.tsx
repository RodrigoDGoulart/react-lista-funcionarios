import styles from "./style.module.scss";

import { Funcionario } from "../../../@types";

import Avatar from "../../Avatar";

import { formatDate } from "../../../utils/formatDate";
import { formatPhone } from "../../../utils/formatPhone";

interface Props {
  data: Funcionario;
}

export default function Row({ data }: Props) {
  return (
    <div className={styles.row}>
      <span><Avatar src={data.image} /></span>
      <span>{data.name}</span>
      <span>{data.job}</span>
      <span>{formatDate(data.admission_date)}</span>
      <span>{formatPhone(data.phone)}</span>
    </div>
  );
}
