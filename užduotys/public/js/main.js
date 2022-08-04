"use strict";
console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
    const logLastArrayIndex = (array) => console.log(`Last index of a given array is: ${array.length - 1}`);
    logLastArrayIndex([1, 2, 'aaaaaa']);
}
console.groupEnd();
console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
    const logArrayIndexColumn = (array) => console.log(`[${array}] index column:\n${array.map((item, index) => index).join('\n')}`);
    logArrayIndexColumn([1, 2, 3, 4, 'aaaaaaaaaaa', true]);
}
console.groupEnd();
console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
    const logArrayItemColumn = (array) => console.log(`[${array}] item column:\n${array.map((item) => item).join('\n')}`);
    logArrayItemColumn([1, 2, 3, 4, 'aaaaaaaaaaa', true]);
}
console.groupEnd();
console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
{
    const logArrayItemAndIndexColumn = (array) => console.log(`[${array}] item[index] column:\n${array.map((item, index) => `${item}[${index}]`).join('\n')}`);
    logArrayItemAndIndexColumn([1, 2, 3, 4, 'aaaaaaaaaaa', true]);
}
console.groupEnd();
console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
    const logReverseArrayItemColumn = (array) => console.log(`[${array}] reverse item column:\n${array.map((item) => item).reverse().join('\n')}`);
    logReverseArrayItemColumn([1, 2, 3, 4, 'aaaaaaaaaaa', true]);
}
console.groupEnd();
console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
    const logArrayIndexesInline = (array) => console.log(`[${array}] index inline:\n${array.map((item, index) => index).join(' ')}`);
    logArrayIndexesInline([1, 2, 3, 4, 'aaaaaaaaaaa', true]);
}
console.groupEnd();
console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
    const logArrayItemsInline = (array) => console.log(`[${array}] item inline:\n${array.map((item) => item).join(' ')}`);
    logArrayItemsInline([1, 2, 3, 4, 'aaaaaaaaaaa', true]);
}
console.groupEnd();
console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
{
    const logArrayItemsAndIndexesInline = (array) => console.log(`[${array}] item inline:\n${array.map((item, index) => `[${index}]=>${item}`).join(', ')}`);
    logArrayItemsAndIndexesInline([1, 2, 3, 4, 'aaaaaaaaaaa', true]);
}
console.groupEnd();
console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
    const doubleArrayItems = (numArray) => numArray.map((number) => number * 2);
    console.log(doubleArrayItems([1, 2, 3, 4, 5, 6]));
}
console.groupEnd();
console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
    const squareArrayItems = (numArray) => numArray.map((number) => number ** 2);
    console.log(squareArrayItems([1, 2, 3, 4, 5, 6]));
}
console.groupEnd();
console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
    const multiplyArrayItemsByIndex = (numArray) => numArray.map((number, index) => number * index);
    console.log(multiplyArrayItemsByIndex([1, 2, 3, 4, 5, 6]));
}
console.groupEnd();
console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
    const filterOutNegative = (numArray) => numArray.filter((number) => number >= 0);
    console.log(filterOutNegative([1, -2, 3, 4, -5, 6]));
}
console.groupEnd();
console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
    const filterOutPositive = (numArray) => numArray.filter((number) => number < 0);
    console.log(filterOutPositive([1, -2, 3, 4, -5, 6]));
}
console.groupEnd();
console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
    const filterOutOdd = (numArray) => numArray.filter((number) => !(number % 2));
    console.log(filterOutOdd([0, 1, -2, 3, 4, -5, 6]));
}
console.groupEnd();
console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
    const filterOutEven = (numArray) => numArray.filter((number) => !!(number % 2));
    console.log(filterOutEven([0, 1, -2, 3, 4, -5, 6]));
}
console.groupEnd();
console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
    const makeNumsPositive = (numArray) => numArray.map((number) => Math.abs(number));
    console.log(makeNumsPositive([0, 1, -2, 3, 4, -5, 6]));
}
console.groupEnd();
//# sourceMappingURL=main.js.map