import * as fromPizzas from '../actions/pizzas.actions';
import { Pizza } from '../../models/pizza.model';

export interface PizzaState {
  data: Pizza[];
  loaded: boolean;
  loading: boolean;
};

export const initialState: PizzaState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(state: PizzaState = initialState, action: fromPizzas.PizzasAction): PizzaState {
  switch (action.type) {
    case fromPizzas.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loaded: true,
        loading: false,
        data: data
      };
    }
    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    default:
      return state;
  }
}

export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzas = (state: PizzaState) => state.data;
