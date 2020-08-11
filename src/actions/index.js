const usersLoaded = (users) => {
    return {
        type: 'USERS_LOADED',
        payload: users
    }
}

const sortByName = () => {
    return {
        type: 'SORT_BY_NAME'
    }
}

const sortByAge = () => {
    return {
        type: 'SORT_BY_AGE'
    }
}

const sortById = () => {
    return {
        type: 'SORT_BY_ID'
    }
}

const sortByAsсDec = () => {
    return {
        type: 'SORT_BY_ASC/DES'
    }
}

const addOrDeleteFavourite = (id) => {
    return {
        type: 'ADD_OR_DELETE_FAVOURITE',
        id
    }
}

const userFilter = (searchValue) => {
    return {
        type: 'FILTER_USER',
        searchValue
    }
}


export {
    usersLoaded,
    sortByName,
    sortByAge,
    sortById,
    sortByAsсDec,
    addOrDeleteFavourite,
    userFilter
};