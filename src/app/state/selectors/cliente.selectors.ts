import { createSelector } from "@ngrx/store";
import { ClienteState } from "src/app/Models/cliente.state";
import { AppState } from "../app.state"


//selector con relación a la propiedad clientes
export const selectClienteFeature = (state : AppState) => state.clientes;//PADRE

//HIJO
export const selectListItems = createSelector(
    selectClienteFeature,
    (state : ClienteState) => state.clientes
);

//HIJO
export const selectLoading = createSelector(
    selectClienteFeature,
    (state : ClienteState) => state.loading
);