import styles from "./style.module.scss";

import { MagnifyingGlass } from "phosphor-react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Table from "../../components/Table";
import Title from "../../components/Title";

export default function Funcionarios() {
  return (
    <div className={styles.body}>
      <Header />
      <main>
        <div className={styles.head}>
          <Title size="h1">Funcionários</Title>
          <Input className={styles.search_input} placeholder="Pesquisar" icon={<MagnifyingGlass weight="bold" />} />
        </div>
        <Table
          content={[
            {
              foto: "",
              nome: "João Silva",
              cargo: "Desenvolvedor",
              dataAdmissao: new Date(),
              telefone: "123",
            },
          ]}
        />
      </main>
    </div>
  );
}
