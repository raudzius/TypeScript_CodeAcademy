/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

/*
  Užduočių atlikimo eiga:
  * Pirmiausiai perskaitykite visą užduotį:
  * Klauskite dėstytojo užduoties paaiškinimo, jeigu užduotis nėra aiški.
  * Galvoje susidarytkite sprendimo planą:
    * Kaip atliksiu užduotį? Galbūt verta pasibraižyti sprendimo idėją ant lapelio?
    * Kokių tipų reikės? Parametrų tipai, rezultatų tipai, funkcijų tipai.
    * Kaip aiškiai ir tvarkingai pateiksiu rezultatus?
  * Bandykite atlikti užduotį:
    * Pavyko:
      * Atspausdinkite rezultatus ir/arba veikimo pavyzdžius
      * Pabandykite patobulinti savo kodą:
        * pabandykite aiškiau aprašyti kintamųjų/tipų pavadinimus
        * sužiūrėkite ar tikrai naudojate vieningą sintaksę
      * Palyginkite savo sprendimą su užuočių atsakymų failu.
      * Suformuokite klausimus dėstytojui, pagal sprendimų skirtumus
    * Nepavyko:
      * pažiūrėkite atsakymų failą ir PO VIENĄ EILUTĘ nusirašykite sprendimą
      * rašant kiekvieną eilutę smulkmeniškai suformuokite klausimus.
    * Spręskite kitus uždavinius, o kai dėstytojas aiškins užduoties sprendimą, klausykitės
      * Po dėstytojo sprendimo ir aiškinimo užduokite klausimus, kurių vis dar nesuprantate.
  Patarimai:
    * Paspauskite komandą: ALT + Z - tai padės lengviau skaityti užduočių tekstą
    * Nežiūrėkite į atsakymų failus anksčiau laiko.
      jūsų tikslas lavinti inžinerinį mąstymą, o ne atlikti užduotis.
    * Nesedėkite prie kompiuterio ilgiau nei 1 val iš eilės, darykite pertraukas po 10 min
    * Klauskite visko ko nesuprantate. Neklausdami eikvojat savo laiką, kurį šie kursai taupo.
      Gerbiat savo laiką - gerbiat save.
    * Kodo tvarka ir aiškumas tiek pat svarbūs kiek funkcionalumas. Išmoksite tai dabar,
      arba kuomet negausite darbo dėl netvarkingo kodo.
    * Atlikę užduotį, užduokite sau klausimą: "Ar tai geriausia ką galėjau?"
    * Įsigilinimas jūsų žinias iš supratimo perkelia į suvokimą. Tik suvokiant dalykus, galite
      žinias pritaikyti kūrybiškai. Iš to seka, kad užduoties atlikimo kokybė >>> užduočių kiekis
    * Užduočių rezultatų pateikimas tike pat svarbus, kiek sprendimas.
*/

// 10 min
console.group('1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis');
{
  const capitalizeAllLetters = (string: string): void => console.log(`${string} -> ${string.toUpperCase()}`);
  capitalizeAllLetters('zalioji citrina');
}
console.groupEnd();

// 10 min
console.groupCollapsed('2. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių');
{
  const countSymbols = (word1: string, word2: string): number => word1.length + word2.length;
  console.log(countSymbols('baltas', 'lapas'));
}
console.groupEnd();

// 10 min
console.groupCollapsed('3. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2 parametru perduoda raidė, priešingu atveju false');
{
  const checkIfHasLetter = (string: string, letter: string): boolean => string.includes(letter);
  console.log(checkIfHasLetter('indas', 'k'));
}
console.groupEnd();

// 10 min
console.groupCollapsed('4. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių');
{
  const checkIfEven = (string: string) => !(string.length % 2);
  console.log(checkIfEven('adidas'));
}
console.groupEnd();

// 15 min
console.groupCollapsed('5. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje');
{
  const getNumOfVowels = (string: string): number => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let count = 0;

    [...string.toLowerCase()].forEach((letter) => { if (vowels.includes(letter)) count += 1; });

    // for (const letter of string.toLowerCase()) {
    //   vowels.includes(letter) && count++;
    // }
    return count;
  };

  console.log(getNumOfVowels('information'));
}
console.groupEnd();

// 15 min
console.groupCollapsed('6. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje');
{
  const countLetterOccurrences = (string: string, userLetter: string) => {
    let count = 0;

    [...string.toLowerCase()].forEach((letter) => { if (letter === userLetter) count += 1; });
    return count;
  };
  console.log(countLetterOccurrences('baravykai', 'a'));
}
console.groupEnd();

// 15 min
console.groupCollapsed('7. Sukurkite funkciją, kuri ištrintų pirmą surastą simbolį žodyje ir grąžintų pakeistą žodį');
{
  const removeFirstSymbol = (string: string) => string.slice(1);
  console.log(removeFirstSymbol('price'));
}
console.groupEnd();

// 20 min
//  7. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.
//  Ši funkcija turi žodyje ištrinti visas raides, kurios perduotos antruoju parametru.
//  Atlikus veiksmus, grąžinti pakeistą žodį
console.groupCollapsed('8. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.');
{
  const removeGivenLetters = (string: string, letterArray: string[]) => {
    const modifiedString: string = string;

    return [...modifiedString.toLocaleLowerCase()].filter((stringLetter) => !letterArray.includes(stringLetter)).join('');
  };
  console.log(removeGivenLetters('obuolysss', ['o', 's']));
}
console.groupEnd();

// 60 min
// 8. Sukurkite funkciją, kuri taiso teksto klaidas, pagal tokius reikalavimus:
//  * Pirma sakinio raidė didžioji.
//  * Po skiriamojo ženklo tarpas, o prieš skiriamajį ženklą nėra tarpo (skiriamieji ženklai: .,!?)
//  * Bet koks kiekis tarpų pakeičiamas vienu tarpu
//  * Pašalinti tarpus aplink visą tekstą
console.groupCollapsed('9. Sukurkite funkciją, kuri taiso pastraipos klaidas');
{
  const fixText = (string: string): string => {
    let modifiedString = string;

    const sentencePunctuators = ['.', '!', '?'];
    sentencePunctuators.forEach((punctuator) => {
      let sentenceArray: string[] = string.split(punctuator);
      if (sentenceArray[sentenceArray.length - 1] === '') sentenceArray.pop();
      sentenceArray = sentenceArray.map((sentence) => sentence
        .trim()[0].toUpperCase() + sentence.trim().slice(1));
      modifiedString = sentenceArray.join(punctuator);
    });

    const punctuators: string[] = ['.', ',', '!', '?'];
    punctuators.forEach((punctuator) => {
      let stringArray: string[] = string.split(punctuator);
      stringArray = stringArray.map((word) => ` ${word.trim()}`);
      modifiedString = stringArray.join(punctuator);
    });

    modifiedString = modifiedString.split(' ').filter((occur) => occur !== '').join(' ');

    modifiedString.trim();

    return modifiedString;
  };
  console.log(fixText('Lorem              I,    p,s,u?m is si.mply dummy te!xt of !the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'));
}
console.groupEnd();
