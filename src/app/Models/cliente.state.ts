import { Cliente } from "./Cliente";

export interface ClienteState{
    loading: boolean,
    clientes: ReadonlyArray<Cliente>;
}