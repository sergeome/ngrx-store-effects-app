import { Action } from '@ngrx/store';
import { Pizza } from '../../models/pizza.model';

// load pizzas
export const LOAD_PIZZAS = 'LOAD_PIZZAS';
export const LOAD_PIZZAS_FAIL = 'LOAD_PIZZAS_FAIL';
export const LOAD_PIZZAS_SUCCESS = 'LOAD_PIZZAS_SUCCESS';

// action creators
export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(payload: any){};
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  public payload: Pizza[];
  constructor(payload: Pizza[]){
    this.payload = payload;
  };
}

// action types
export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;
