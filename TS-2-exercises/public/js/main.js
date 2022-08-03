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
console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau ');
{
    const addKeyValuePair = (obj, key, value) => Object.assign(obj, { [key]: value });
    console.log(addKeyValuePair({ piano: 500, stereo: 300 }, 'Caligula', 440));
}
console.groupEnd();
//# sourceMappingURL=main.js.map