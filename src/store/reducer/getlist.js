let getlist = (state, action) => {
    switch (action.type) {
        case 'getListData':
            return {
                ...state
            }
            break;
    
        default:
            break;
    }
    return state
}

export default getlist
