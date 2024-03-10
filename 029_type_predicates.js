function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet; // hover here
        return "fish food";
    }
    else {
        pet; // hover here
        return "bird food";
    }
}
// hover on commented lines. iTS don't know which pet is that.
// solution
function isConfirmFish(pet) {
    return pet.swim !== undefined;
}
function getFood1(pet) {
    if (isConfirmFish(pet)) {
        pet; // hover here
        return "fish food";
    }
    else {
        pet; // hover here
        return "bird food";
    }
}
// now it's confirmed, pet is Fish.
