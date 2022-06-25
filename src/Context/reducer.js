export const initialState = {
    basket: [],
    user: ""
}
export const basketAmount = (basket) => {

    basket?.reduce((amount, item) => {

        return amount + item.price
    }, 0);
}

const getItemIndex = (state, idToFind) => {
    const ids = state.basket.map(item => item.item.name);
    return ids.indexOf(idToFind);
}



const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // const itemIndex = getItemIndex(state, action.item.name);
            // if (itemIndex && itemIndex < 0) {
            console.log(action.item?.name)
            return { ...state, basket: [...state.basket, action.payload] }
        // } else {
        //     return state.basket[itemIndex].quantity += action.quantity;
        // }
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