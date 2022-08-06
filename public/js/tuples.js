"use strict";
const person1 = ['Koridas', 'Atmazas'];
const person2 = ['Paklodijus', 'Pagalvė'];
const person3 = ['Višta', 'Maumedienė'];
let currentAge = 18;
let currentHeight = 180;
const age = [currentAge, () => { currentAge += 1; }];
const height = [currentAge, (h) => {
        if (h)
            currentHeight = h;
    }];
console.group('Tuples - užduotys');
{
    console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
    {
        const person = ['Naglis', 27];
        console.log(`
    type NameAndAge = [string, number];

    const person:NameAndAge = ['Naglis', 27];
  `);
    }
    console.groupEnd();
    console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
    {
        const master = 'Matt';
        const dog = 'Rex';
        const dogAndItsMaster = [dog, master];
        console.log(`
    type Dog = string;
    type Master = string;
    type DogAndMaster = [Dog, Master];

    const master:Master = 'Matt';
    const dog:Dog = 'Rex';
    const dogAndItsOwner: DogAndMaster = [dog, master];
    `);
    }
    console.groupEnd();
    console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
    {
        const triangle = [[8, 6], [0, 14], [-10, -12]];
        console.log(triangle);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=tuples.js.map