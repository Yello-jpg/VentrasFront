import { createReducer, on } from "@ngrx/store";
import { Cliente } from "src/app/Models/Cliente";
import { loadClientes } from "../actions/cliente.actions";
import { ClienteState } from "src/app/Models/cliente.state";

//estado inicial
export const initialState: ClienteState = { loading: false, clientes: [] }


//funciones puras
export const clientesReducers = createReducer(
    initialState,
    on(loadClientes, state => {
        return {...state,loading: true};
    })
);

