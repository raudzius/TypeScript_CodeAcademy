"use strict";
const init = () => {
    console.group('typescript/eslint testas');
    console.log('Hello World');
    console.groupEnd();
    console.group('task 5');
    const firstName = 'Mykolas';
    const age = 21;
    const coins = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2];
    const products = [
        { title: 'Milk', price: 2 },
        { title: 'Apple', price: 0.3 },
        { title: 'Jeans', price: 50 },
    ];
    const friends = [
        { name: 'John', age: 27, status: 'divorced' },
        { name: 'Gary', age: 28, status: 'married' },
        { name: 'Lilly', age: 40, status: 'widow' },
    ];
    console.log(firstName, age, coins, products, friends);
    console.groupEnd();
};
init();
//# sourceMappingURL=main.js.map