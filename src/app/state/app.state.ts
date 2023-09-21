import { ActionReducerMap } from "@ngrx/store";
import { ClienteState } from "../Models/cliente.state";
import { clientesReducers } from "./reducers/cliente.reducers";

export interface AppState{
    clientes: ClienteState;
    //mas items
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    clientes: clientesReducers
}