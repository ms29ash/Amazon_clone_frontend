export const initialState = {
    basket: [],
    user: ""
}
export const basketAmount = (basket) => {

    basket?.reduce((amount, item) => {

        return amount + item.price
    }, 0);
}



const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state, basket: [...state.basket, action.item]
            }
        case 'ADD_USER': {
            return {
                ...state, user: action.email
            }
        }

        default: return state;
    }
}

export default reducer;