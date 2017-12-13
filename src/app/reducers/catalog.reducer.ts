const initialState = {
    items: []
};

export function catalogReducer(state = initialState, action){
    switch(action.type){
        case 'PRODUCTS_RECEIVED':
         return {
             ...state,
             items: action.payload
         };
    }
    return state;
}