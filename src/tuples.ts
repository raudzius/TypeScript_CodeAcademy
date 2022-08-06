/* eslint no-lone-blocks: 0 */

/*
  Tuple(rinkinys) - tai masyvas su greižtai nurodytais masyvo elemento tipais ir jų seka.
  Šis tipas neleidžia turėti kitokį kiekį, ar kitokio tipo elementų
*/
type FullnameTuple = [string, string];
type UseNumericStateTuple = [number, (num?: number) => void];

const person1: FullnameTuple = ['Koridas', 'Atmazas'];
const person2: FullnameTuple = ['Paklodijus', 'Pagalvė'];
const person3: FullnameTuple = ['Višta', 'Maumedienė'];

let currentAge = 18;
let currentHeight = 180;
const age: UseNumericStateTuple = [currentAge, () => { currentAge += 1; }];
const height: UseNumericStateTuple = [currentAge, (h) => {
  if (h) currentHeight = h;
}];

// Alikite užduotis, ir atspausdinkite konsolėje savo sprendimo pavyzdžius užduoties bloke
console.group('Tuples - užduotys');
{
  // ↓↓↓↓ Tipus apraškite čia ↓↓↓↓
  type NameAndAge = [string, number];
  type Dog = string;
  type Master = string;
  type DogAndMaster = [Dog, Master];
  type TrianglePoint = [number, number];
  // ↑↑↑↑ Tipus apraškite čia ↑↑↑↑

  console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
  {
    const person: NameAndAge = ['Naglis', 27];
    // sprendimo pavyzdžius spausdinkite čia
    console.log(`
    type NameAndAge = [string, number];

    const person:NameAndAge = ['Naglis', 27];
  `);
  }
  console.groupEnd();

  console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
  {
    const master: Master = 'Matt';
    const dog: Dog = 'Rex';
    const dogAndItsMaster: DogAndMaster = [dog, master];
    // sprendimo pavyzdžius spausdinkite čia
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
    const triangle:TrianglePoint[] = [[8, 6], [0, 14], [-10, -12]];

    // sprendimo pavyzdžius spausdinkite čia
    console.log(triangle);
  }
  console.groupEnd();
}
console.groupEnd();
