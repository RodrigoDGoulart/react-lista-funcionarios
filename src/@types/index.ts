export interface Funcionario {
  id: number;
  image: string;
  name: string;
  job: string;
  admission_date: Date;
  phone: string;
}

export interface FuncionarioApiResponse
  extends Omit<Funcionario, "admission_date"> {
  admission_date: string;
}

export interface PageStatus {
  loading: boolean;
  error: boolean;
}
