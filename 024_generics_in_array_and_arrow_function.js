// 1. intro generics in Array
function getSearchProducts(products) {
    // do some database operations for index
    var myIndex = 3;
    return products[myIndex];
}
// 2. arrow function
var getMoreSearchProducts = function (products) {
    // do some database operations for index
    var myIndex = 42;
    return products[myIndex];
};
// 3. somewhere you can also find comma also like following, which works same.
var getMoreSearchProducts2 = function (products) {
    // do some database operations for index
    var myIndex = 16;
    return products[myIndex];
};
