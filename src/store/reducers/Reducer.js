const initialState = {
    cartItems: []
   
} 

const reducer = (state = initialState, action) => {

    if(action.type === 'STORE_CART_ITEMS') {
        return {
            ...state,
            cartItems: action.cartItems
        }
    }

    if(action.type === 'DELETE_CART_ITEM') {
    
        const updatedArr = state.cartItems.filter(e => e.id !== action.idForDelete);

        return {
            ...state,
            cartItems: updatedArr
        }
    }

    return state;
}

export default reducer;
