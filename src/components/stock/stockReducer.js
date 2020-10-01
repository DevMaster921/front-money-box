const defaultState = {
    stocks: [],
    stock: {},
    quotes: {}
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_STOCKS':
            return {
                ...state,
                stocks: [...action.payload]
            }
        case 'SET_STOCK':
            return {
                ...state,
                stock: {...action.payload}
            }
        case 'SET_QUOTES':
            return {
                ...state,
                quotes: {...action.payload}
            }
        case 'UPDATE_TRANSACTIONS':
            return {
                ...state,
                stocks: [
                    ...action.payload
                ]
            }
        default:
            return state;
    }
};

export default reducer;