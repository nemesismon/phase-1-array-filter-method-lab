// Code your solution here

function findMatching(driverArray, nameSearched) {
    let driverMatch = driverArray.filter(function (element) {
        return element.toLowerCase() === nameSearched.toLowerCase();  
    })
    return driverMatch;
}

function fuzzyMatch(driverArray, partialSearch) {
    let driverMatch = driverArray.filter(function (element) {
        if (partialSearch === partialSearch.toLowerCase()) {
            return;
        }
        else {
            return element.includes(partialSearch);
        }
    })
    return driverMatch;
    
}

function matchName(driverArray, nameSearched) {
    let driverMatch = driverArray.filter(function(element) {
        return element.name === nameSearched;
    })
    return driverMatch;
}