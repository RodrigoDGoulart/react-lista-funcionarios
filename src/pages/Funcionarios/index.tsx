import styles from "./style.module.scss";

import { useEffect, useState } from "react";

import { Funcionario, PageStatus } from "../../@types";

import FuncionarioService from "../../services/FuncionarioService";

import { MagnifyingGlass } from "phosphor-react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Table from "../../components/Table";
import Title from "../../components/Title";
import { formatPhone } from "../../utils/formatPhone";

export default function Funcionarios() {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
  const [status, setStatus] = useState<PageStatus>({
    error: false,
    loading: true,
  });
  const [searchValue, setSearchValue] = useState('');
  const [searchRegExp, setSearchRegExp] = useState<RegExp>(new RegExp(''));

  useEffect(() => {
    FuncionarioService.getFuncionarios()
      .then((res) => {
        const { data, status } = res;
        if (!data.length || status !== 200) {
          setStatus({ error: true, loading: false });
        } else {
          setFuncionarios(data);
          setStatus((prev) => ({ ...prev, loading: false }));
        }
      })
      .catch((err) => {
        console.error(err);
        setStatus({ loading: false, error: true });
      });
  }, []);

  useEffect(() => {
    const filteredString = searchValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    setSearchRegExp(new RegExp(filteredString, "i"))
  }, [searchValue, setSearchRegExp])

  return (
    <div className={styles.body}>
      <Header />
      <main>
        <div className={styles.head}>
          <Title size="h1">Funcionários</Title>
          <Input
            className={styles.search_input}
            placeholder="Pesquisar"
            icon={<MagnifyingGlass weight="bold" />}
            onChange={e => setSearchValue(e.target.value)}
          />
        </div>
        <Table
          content={funcionarios.filter(func => (
            searchRegExp?.test(`${func.name} ${func.job} ${func.phone} ${formatPhone(func.phone)}`)
          ))}
          loading={status.loading}
          error={status.error}
        />
      </main>
    </div>
  );
}
