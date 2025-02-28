import { Funcionario, FuncionarioApiResponse } from "../@types";
import api from "./api";

class FuncionarioSevice {
  async getFuncionarios(): Promise<{ data: Funcionario[]; status: number }> {
    const { data, status } = await api.get("/employees");

    let resp: Funcionario[];
    if (status === 200) {
      resp = data.map(
        (funcionario: FuncionarioApiResponse) =>
          ({
            ...funcionario,
            admission_date: new Date(funcionario.admission_date),
          } as Funcionario)
      );
    } else resp = [];

    return { data: resp, status };
  }
}

export default new FuncionarioSevice();
