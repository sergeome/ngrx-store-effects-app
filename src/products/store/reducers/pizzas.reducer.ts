import * as fromPizzas from '../actions/pizzas.actions';
import { Pizza } from '../../models/pizza.model';
import { LOAD_PIZZAS_FAIL, LOAD_PIZZAS_SUCCESS } from '../actions/pizzas.actions';

export interface PizzaState {
  data: Pizza[];
  loaded: boolean;
  loading: boolean;
};

export const initialState: PizzaState = {
  data: [
    {
      name: "Seaside Surfin'",
      toppings: [
        {
          id: 6,
          name: "mushroom"
        },
        {
          id: 7,
          name: "olive"
        },
        {
          id: 2,
          name: "bacon"
        },
        {
          id: 3,
          name: "basil"
        },
        {
          id: 1,
          name: "anchovy"
        },
        {
          id: 8,
          name: "onion"
        },
        {
          id: 11,
          name: "sweetcorn"
        },
        {
          id: 9,
          name: "pepper"
        },
        {
          id: 5,
          name: "mozzarella"
        }
      ],
      id: 2
    }
  ],
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
      return {
        ...state,
        loaded: true,
        loading: false
      };
    }
    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
  }
  return state;
}

export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzas = (state: PizzaState) => state.data;
