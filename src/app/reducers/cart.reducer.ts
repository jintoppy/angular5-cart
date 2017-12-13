const initialState = {
    items: []
};

export function cartReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_TO_CART':
          return {
              ...state,
              items: [...state.items, action.payload]
          };
        case 'REMOVE_FROM_CART': 
          return {
              ...state,
              items: [...state.items.slice(0,action.payload), ...state.items.slice(action.payload+1, state.items.length)]
          }
    }
    return state;
}