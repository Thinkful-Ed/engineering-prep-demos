// original solution
function isLeapYear(year) {
    if ( year % 400 === 0 ) {
        return true;
    }

    else if ( year % 100 === 0 ) {
        return false;
    }

    else if ( year % 4 === 0 ) {
        return true;
    }

    else {
        return false;
    }
}

// alternate solution
function isLeapYear(year) {
    if ( (year % 400 === 0) || ((year % 100 !== 0) && (year % 4 === 0)) ) {
        return true;
    } 
    return false;
}

console.log(isLeapYear(1700));
console.log(isLeapYear(1990));
console.log(isLeapYear(2004));
console.log(isLeapYear(2000));
console.log(isLeapYear(2019));
