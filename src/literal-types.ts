/* eslint no-lone-blocks: 0 */

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Literal types - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius apraškite čia ↓↓↓↓

  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius apraškite čia ↑↑↑↑

  console.group('1. Sukurkite konkrečius 5 dižiausių Vokietijos miestų tipus. Sukurkite tipą, kurio reikšmė būtų viena iš miestų.');
  {
    type Berlin = 'Berlin';
    type Hamburg = 'Hamburg';
    type Munich = 'Munich';
    type Cologne = 'Cologne';
    type Frankfurt = 'Frankfurt';

    type MostPopulatedGermanCity = Berlin;

    // sprendimą|sprendimo pavyzdžius spausdinkite čia
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
    type Labrador = 'Labrador';
    type Bulldog = 'Bulldog';
    type Shepherd = 'Shepherd';
    type Retriever = 'Retriever';
    type Poodle = 'Poodle';

    type MostPopularDogBreed = Labrador;

    // sprendimą|sprendimo pavyzdžius spausdinkite čia
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
    type Hood = 'Hood';
    type Bumper = 'Bumper';
    type Radiator = 'Radiator';
    type Spoiler = 'Spoiler';
    type Trunk = 'Trunk';

    type CarCover = Hood;

    // sprendimą|sprendimo pavyzdžius spausdinkite čia
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
