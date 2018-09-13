const GET_LIST_DATA = 'GET_LIST_DATA'

let getListAction = (text) => {
    return {
        type: GET_LIST_DATA,
        text
    }
}

// const getListDataAction = ('hello')
export default getListAction
