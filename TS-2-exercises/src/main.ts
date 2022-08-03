/* eslint-disable no-lone-blocks */
console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7 ');
{
    type Drink = { name: string, price: number };

    const drinks: Drink[] = [
      { name: 'lemonade', price: 50 },
      { name: 'lime', price: 10 },
      { name: 'coke', price: 15 },
    ];

    const sortDrinks = (drinkArray: Drink[]) => [...drinkArray].sort(
      (a: Drink, b: Drink) => a.price - b.price,
    );

    console.log(sortDrinks(drinks));
}
console.groupEnd();

// console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau ');
// // {

// // }
// console.groupEnd();
