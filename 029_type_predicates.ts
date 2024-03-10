type Fish = {swim: () => void};
type Bird = {fly: () => void};

function  isFish(pet : Fish | Bird) {
    return (pet as Fish).swim !== undefined;
}

function getFood(pet : Fish | Bird) {
    if (isFish(pet)) {
        pet;    // hover here
        return "fish food";
    } else {
        pet;    // hover here
        return "bird food";
    }
}
// hover on commented lines. iTS don't know which pet is that.

// solution
function  isConfirmFish(pet : Fish | Bird) : pet is Fish {  // pet is Fish
    return (pet as Fish).swim !== undefined;
}

function getFood1(pet : Fish | Bird) {
    if (isConfirmFish(pet)) {
        pet;    // hover here
        return "fish food";
    } else {
        pet;    // hover here
        return "bird food";
    }
}
// now it's confirmed, pet is Fish.
