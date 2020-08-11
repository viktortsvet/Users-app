const searchFilter = (items, value) => {
    if (value.length === 0) {
        return items;
    }
    return items.filter(item => {
        return item.name.toLowerCase().indexOf(value.toLowerCase().trim()) > -1 
    });
}

const getLanguageData = (languageData) => {
    let language = null;
    if (languageData.englishActive) {
        language = languageData.english;
    } else {
        language = languageData.russian;
    }
    return language;
}



export {
    searchFilter,
    getLanguageData
}