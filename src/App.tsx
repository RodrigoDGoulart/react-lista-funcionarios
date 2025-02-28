import { MagnifyingGlass } from "phosphor-react";
import Header from "./components/Header";
import Input from "./components/Input";
import Table from "./components/Table";

function App() {
  return (
    <>
      <Header />
      <Table
        content={[
          {
            foto: "",
            nome: "João Silva",
            cargo: "Desenvolvedor",
            dataAdmissao: new Date(),
            telefone: "123",
          },
          {
            foto: "",
            nome: "Maria Souza",
            cargo: "Designer",
            dataAdmissao: new Date(),
            telefone: "123",
          },
          {
            foto: "",
            nome: "Carlos Pereira",
            cargo: "Gerente de Projetos",
            dataAdmissao: new Date(),
            telefone: "123",
          },
        ]}
      />
      <Input placeholder="teste" icon={<MagnifyingGlass weight="bold" />} />
    </>
  );
}

export default App;
