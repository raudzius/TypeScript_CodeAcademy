"use strict";
console.group('Literal types - užduotys');
{
    console.group('1. Sukurkite konkrečius 5 dižiausių Vokietijos miestų tipus. Sukurkite tipą, kurio reikšmė būtų viena iš miestų.');
    {
        console.log(`
    type Berlin = 'Berlin';
    type Hamburg = 'Hamburg';
    type Munich = 'Munich';
    type Cologne = 'Cologne';
    type Frankfurt = 'Frankfurt';

    type MostPopulatedGermanCity = Berlin;`);
    }
    console.groupEnd();
    console.group('2. Sukurkite konkrečias 5 šunų veisles. Sukurkite tipą, kurio reikšmė būtų viena iš veislių.');
    {
        console.log(`
    type Labrador = 'Labrador';
    type Bulldog = 'Bulldog';
    type Shepherd = 'Shepherd';
    type Retriever = 'Retriever';
    type Poodle = 'Poodle';

    type MostPopularDogBreed = Labrador;`);
    }
    console.groupEnd();
    console.group('3. Sukurkite konkrečias 5 mašinos dalių tipus. Sukurkite tipą, kurio reikšmė būtų viena iš dalių.');
    {
        console.log(`
    type Hood = 'Hood';
    type Bumper = 'Bumper';
    type Radiator = 'Radiator';
    type Spoiler = 'Spoiler';
    type Trunk = 'Trunk';

    type CarCover = Hood;`);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=literal-types.js.map