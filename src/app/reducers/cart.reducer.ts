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
    }
    return state;
}