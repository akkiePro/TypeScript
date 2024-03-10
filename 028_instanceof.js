// hint: it is used for 'new' keyword(for objects).
// ex. new Array(), new Date(), new User().
function logValue(x) {
    if (x instanceof Date)
        console.log(x.toUTCString());
    else
        console.log(x.toUpperCase());
}
console.log(logValue(new Date()));
console.log(logValue("xyz"));
