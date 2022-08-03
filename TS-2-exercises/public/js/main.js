"use strict";
console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7 ');
{
    const drinks = [
        { name: 'lemonade', price: 50 },
        { name: 'lime', price: 10 },
        { name: 'coke', price: 15 },
    ];
    const sortDrinks = (drinkArray) => [...drinkArray].sort((a, b) => a.price - b.price);
    console.log(sortDrinks(drinks));
}
console.groupEnd();
//# sourceMappingURL=main.js.map