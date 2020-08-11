const initialState = {
    users: [],
    loading: true,
    userFilterValue: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USERS_LOADED':
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case 'FILTER_USER':
            return {
                ...state,
                userFilterValue: action.searchValue
            }
        case 'SORT_BY_NAME':
            const sortedByName = state.users.map(item => item);
            return {
                ...state,
                users: sortedByName.sort((a, b) => a.name > b.name ? 1 : -1)
            }
        case 'SORT_BY_AGE':
            const sortedByAge = state.users.map(item => item);
            return {
                ...state,
                users: sortedByAge.sort((a, b) => a.age > b.age ? 1 : -1)
            }
        case 'SORT_BY_ID':
            const sortedById = state.users.map(item => item);
            return {
                ...state,
                users: sortedById.sort((a, b) => a.id > b.id ? 1 : -1)
            }
        case 'SORT_BY_ASC/DES':
            const sortedByAscending = state.users.map(item => item);
            return {
                ...state,
                users: sortedByAscending.sort((a, b) => a > b ? 1 : -1)
            }
        case 'ADD_OR_DELETE_FAVOURITE':
            const index = state.users.findIndex(item => item.id === action.id);
            const old = state.users[index]
            const newItem = {...old, favourite: !old.favourite};
            const newArr = [...state.users.slice(0, index), newItem, ...state.users.slice(index + 1)];
            return {
                ...state,
                users: newArr
            }
        case 'CHANGE_SEARCH_VALUE':
            return {
                ...state,
                searchInputValue: action.value
            }
        default:
            return state;
    }
}

export default reducer;