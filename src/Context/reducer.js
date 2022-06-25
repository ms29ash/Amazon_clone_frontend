export const initialState = {
    basket: [],
    user: ""
}

//to get total payment of basket items
export const basketAmount = (basket) => {

    return basket?.reduce((amount, item) => amount + (item.quantity * item?.item.price.current_price), 0);
}

//To get total number of products in basket
export const totalProduct = (basket) => {

    return basket?.reduce((amount, item) => amount + item.quantity, 0);
}


//get index of any product in basket
const getItemIndex = (state, idToFind) => {
    const ids = state.basket.map(product => product.item?._id);
    return ids.indexOf(idToFind);
}




const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const itemIndex = getItemIndex(state, action.payload.item._id);
            if (itemIndex && itemIndex < 0) {

                return { ...state, basket: [...state.basket, action.payload] }
            } else {
                //  state.basket[itemIndex].quantity++
                const newState = { ...state };
                // const index = newState.findIndex((product) => product?.item._id === action.payload.item._id);
                newState.basket[itemIndex].quantity++;
                return newState;
            }
        // return {
        //     ...state, basket: [...state.basket, action.item]
        // }
        case 'ADD_USER': {
            return {
                ...state, user: action.email
            }
        }

        default: return state;
    }
}

export default reducer;