import { useState } from "react";

import styles from "./style.module.scss";

import { Funcionario } from "../../../@types";

import Avatar from "../../Avatar";
import { CaretDown, CaretUp } from "phosphor-react";
import Info from "./Info";

import { formatPhone } from "../../../utils/formatPhone";
import { formatDate } from "../../../utils/formatDate";

interface Props {
  data: Funcionario;
}

export default function RowMobile({ data }: Props) {
  const [open, setOpen] = useState(false);

  function switchOpen() {
    setOpen(!open);
  }

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <Avatar src={data.image} />
        <span>{data.name}</span>
        {open ? (
          <CaretUp
            className={styles.down_icon}
            size={24}
            onClick={switchOpen}
          />
        ) : (
          <CaretDown
            className={styles.down_icon}
            size={24}
            onClick={switchOpen}
          />
        )}
      </div>
      <div className={`${styles.details} ${open ? (styles.details_open) : ('')}`}>
        <div className={styles.content}>
          <Info label="Cargo" value={data.job} />
          <Info label="Data de admissão" value={formatDate(data.admission_date)} />
          <Info label="Telefone" value={formatPhone(data.phone)} />
        </div>
      </div>
    </div>
  );
}
