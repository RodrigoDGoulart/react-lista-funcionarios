import styles from "./style.module.scss";

import { Funcionario } from "../../../@types";

import Avatar from "../../Avatar";
import { CaretDown, CaretUp } from "phosphor-react";
import { useState } from "react";
import Info from "./Info";

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
        <Avatar src={data.foto} />
        <span>{data.nome}</span>
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
          <Info label="Cargo" value={data.cargo} />
          <Info label="Data de admissão" value={data.dataAdmissao.toLocaleDateString('pt-BR')} />
          <Info label="Telefone" value={data.telefone} />
        </div>
      </div>
    </div>
  );
}
