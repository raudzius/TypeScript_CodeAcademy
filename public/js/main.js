"use strict";
console.group('1. Sąjungos operatorius - UNIONS');
{
    console.groupCollapsed('1.1 Sukurkite funkciją "print" kuri priimą string, number arba boolean ir jį atspausdiną');
    {
        const print = (param) => { console.log(param); };
        print('Print function works');
        print(Math.random());
        print(Math.random() > 0.5);
    }
    console.groupEnd();
    console.groupCollapsed('1.2 Sukurkite funkciją "getLength" kuri priimą string arba masyvą ir grąžina elementų skaičių');
    {
        const getLength = (param) => param.length;
        console.log(getLength('veikia!'));
    }
    console.groupEnd();
    console.groupCollapsed('1.3 Sukurkite funkciją "isEmpty" kuri priimą string arba masyvą ir grąžiną true, jei parametras tuščias, priešingu atveju - false');
    {
        const isEmpty = (param) => !param.length;
        console.log(isEmpty(''));
        console.log(isEmpty('1'));
        console.log(isEmpty([]));
        console.log(isEmpty(['a']));
    }
    console.groupEnd();
}
console.groupEnd();
console.group('2. Tipų rinkiniai - TUPLES');
{
    console.groupCollapsed('2.1. Sukurkite funkciją "getMinMax" kuri priima skaičių masyvą ir grąžina dviejų vietų tipų rinkinį. Pirmas grąžinamo rinkinio elementas - mažiausias skaičių masyvas, antras - didžiausias');
    {
        const numberArray = [9.7, -1, 0, 2.22, 150];
        const getMinMax = (numArray) => {
            const sortedNums = [...numArray].sort((a, b) => a - b);
            return [sortedNums[0], sortedNums[sortedNums.length - 1]];
        };
        console.log(getMinMax(numberArray));
    }
    console.groupEnd();
    console.groupCollapsed('2.2 Sukurkite funkciją "calcDistance", kuri pagal 2 taškus (Coordinate2D), suskaičiuotų atstumą tarp taškų');
    {
        const calcDistance = (cord1, cord2) => {
            const [x1, y1] = cord1;
            const [x2, y2] = cord2;
            const deltaX = Math.abs(x1 - x2);
            const deltaY = Math.abs(y1 - y2);
            const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
            return distance;
        };
        console.table({
            'calcDistance([0, 0], [3, 4])': calcDistance([0, 0], [3, 4]),
            'calcDistance([1, 1], [7, 9])': calcDistance([1, 1], [7, 9]),
            'calcDistance([-2, 3], [13, 11])': calcDistance([-2, 3], [13, 11]),
        });
    }
    console.groupEnd();
}
console.groupEnd();
console.group('3. Prielaidos - ASSERTIONS');
{
    console.groupCollapsed('3.1 Parašykite kodą, kuris parsiųstų skelbimus pasiekiamus šiuo adresu: "https://jsonplaceholder.typicode.com/posts?userId=1". Parsiųstus duomenis įrašykite į kintamajį "posts", darant parsiųstų duomenų tipo prielaidą. Prieš parsiunčiant duomenis apsirašykite "Post" tipą.');
    {
        fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then((res) => res.json())
            .then((data) => {
            const posts = data;
            console.table(posts);
        });
    }
    console.groupEnd();
    console.groupCollapsed('3.2 Parašykite kodą, kuris parsiųstų vartotojus pasiekiamus šiuo adresu: "https://jsonplaceholder.typicode.com/users". Parsiųstus duomenis įrašykite į kintamajį "users", darant parsiųstų duomenų tipo prielaidą. Prieš siunčiant duomenis apsirašykite "User" tipą.');
    {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
            const users = data;
            console.table(users);
        });
    }
    console.groupEnd();
}
console.groupEnd();
console.group('4. Konkretūs tipai - LITERAL TYPES');
{
    console.groupCollapsed('4.1 Sukurkite objektą saugoti produktams, Product, pagal kategorijas: "food", "clothes" ir "other". "products" objektas turi 3 savybės pagal kategorijų pavadinimus, kurių reikšmės - Product[]. Sukūrus ir tipais aprašius "products" struktūrą, sukurkite funkciją "addProduct", kuri pridės produktą pagal kategoriją į "products" objektą. Ši funkcija turi priimti 2 parametrus: 1 - produktas, 2 - kategorijos pavadinimas. Kategorijos pavadinimas turi būti konkretus string tipas, pagal galimas produktų objekto kategorijas. Produkto tipą apsirašykite laisvai.');
    {
        const products = {
            food: [],
            clothes: [],
            other: [],
        };
        const addProduct = (product, category) => {
            products[category].push(product);
        };
        addProduct({ id: '1', title: 'Jeans', price: 69.99 }, 'clothes');
        console.log(products);
    }
    console.groupEnd();
}
console.groupEnd();
console.group('5. Išvardinimai - ENUMS');
{
    console.groupCollapsed('5.1 Sukurkite artmetinių veiksmų konstantų išvardinimą: Operation -> Add, Subtract, Multiply, Divide. Parašykite funkciją "calc" kuri priima 2 skaičius ir operaciją "Operation". Pagal perduotą operaciją atlikite veiksmus ir grąžinkite rezultatą');
    {
        let Operation;
        (function (Operation) {
            Operation[Operation["Add"] = 0] = "Add";
            Operation[Operation["Subtract"] = 1] = "Subtract";
            Operation[Operation["Multiply"] = 2] = "Multiply";
            Operation[Operation["Divide"] = 3] = "Divide";
        })(Operation || (Operation = {}));
        const calc = (num1, num2, operation) => {
            switch (operation) {
                case Operation.Add: return num1 + num2;
                case Operation.Subtract: return num1 - num2;
                case Operation.Multiply: return num1 * num2;
                case Operation.Divide: return num1 / num2;
                default: throw new Error('Invalid operation!');
            }
        };
        console.log(calc(240, 24, Operation.Add), calc(240, 24, Operation.Subtract), calc(240, 24, Operation.Multiply), calc(240, 24, Operation.Divide));
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=main.js.map