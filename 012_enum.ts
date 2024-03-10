// 1. declaration of enum
enum SeatChoice {
    AISLE,  // by default AISLE = 0
    MIDDLE, // by default MIDDLE = 1
    WINDOW, // by default WINDOW = 2
    FOURTH  // by default FOURTH = 3
}
const apSeat = SeatChoice.WINDOW;

// 2. assign some value
enum SeatChoice1 {
    AISLE = 10,
    MIDDLE,     // by default MIDDLE = 11
    WINDOW,     // by default WINDOW = 12
    FOURTH = 42,
    FIFTH       // by default FIFTH = 43
}
const apSeat1 = SeatChoice1.WINDOW;

// 3. we can also assign value such as string and other type
enum SeatChoice2 {
    AISLE = "aisle",
    MIDDLE = "middle",  // if i don't assign value here then it will give compile-error. bcz no default value for middle. bcz previous value was not number
    WINDOW = "window",
    FOURTH = 42.5,
    FIFTH       // by default FIFTH = 43.5
}
const apSeat2 = SeatChoice1.WINDOW;

/**
 * this can't be run by node .\012_enum.ts
 * so check on following url:
 * https://www.typescriptlang.org/play
 * you'll see so much unnecessary code came. so use const before enum and it'll reduce down there.
 */
