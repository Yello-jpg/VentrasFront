import { createAction, props } from "@ngrx/store";
import { Cliente } from '../../Models/Cliente';

export const loadClientes = createAction(
    '[Cliente List] Load Clientes' //Type action
);1

export const loadedClientes = createAction(
    '[Cliente List] Loaded Successs',
    props<{clientes: Cliente[]}>(),
);

