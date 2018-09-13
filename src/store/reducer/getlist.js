let getlist = (state, action) => {
    switch (action.type) {
        case 'GET_LIST_DATA':
            return {
                state
            }
            break;

        default:
            return state
    }

}

export default getlist
