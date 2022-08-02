const init = () => {
  console.group('typescript/eslint testas');
  console.log('Hello World');
  console.groupEnd();

  console.group('task 5');
  const firstName: string = 'Mykolas';
  const age: number = 21;
  const coins: number[] = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2];

  type Product = { title: string; price: number };

  const products: Product[] = [
    { title: 'Milk', price: 2 },
    { title: 'Apple', price: 0.3 },
    { title: 'Jeans', price: 50 },
  ];

  interface Person {
    name: string;
    age: number;
    status: 'married' | 'divorced' | 'widow';
  }

  const friends: Person[] = [
    { name: 'John', age: 27, status: 'divorced' },
    { name: 'Gary', age: 28, status: 'married' },
    { name: 'Lilly', age: 40, status: 'widow' },
  ];

  console.log(firstName, age, coins, products, friends);

  console.groupEnd();
};

init();
