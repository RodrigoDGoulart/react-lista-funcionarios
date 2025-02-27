import Header from "./components/Header";
import Table from "./components/Table";

function App() {
  return (
    <>
      <Header />
      <Table content={[
      { foto: "", nome: "João Silva", cargo: "Desenvolvedor", dataAdmissao: new Date(), telefone: "123" },
      { foto: "", nome: "Maria Souza", cargo: "Designer", dataAdmissao: new Date(), telefone: "123" },
      { foto: "", nome: "Carlos Pereira", cargo: "Gerente de Projetos", dataAdmissao: new Date(), telefone: "123" }
      ]} />
    </>
  );
}

export default App;
