import { catalogReducer } from './reducers/catalog.reducer';
import { cartReducer } from './reducers/cart.reducer';

export const appReducer = {
    catalog: catalogReducer,
    cart: cartReducer
};
