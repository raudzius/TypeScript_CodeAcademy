/* eslint no-lone-blocks: 0 */

// Jei išvardinamų konstantų tipas yra ne skaičius, privalote įvardinti kiekvieną narį
enum WeekDayNamesLT {
  Monday = 'pirmadienis',
  Tuesday = 'antradienis',
  Wednesday = 'trečiadienis',
  Thursday = 'ketvirtadienis',
  Friday = 'penktadienis',
  Saturday = 'šeštadienis',
  Sunday = 'sekmadienis',
}

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Literal types - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius aprašykite čia ↓↓↓↓

  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius aprašykite čia ↑↑↑↑

  console.group('1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.');
  {
    enum BiggestLithuanianCities {
      Vilnius,
      Kaunas,
      Klaipeda,
      Siauliai,
      Panevezys,
    }
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
    console.log(`
    enum BiggestLithuanianCities {
      Vilnius,
      Kaunas,
      Klaipeda,
      Siauliai,
      Panevezys,
    }`);
  }
  console.groupEnd();

  console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
  {
    enum MostPopulatedCountries {
      China,
      India,
      US,
      Indonesia,
      Pakistan,
    }

    // sprendimą|sprendimo pavyzdžius spausdinkite čia
    console.log(`
    enum MostPopulatedCountries {
      China,
      India,
      US,
      Indonesia,
      Pakistan,
    }`);
  }
  console.groupEnd();

  console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
  {
    enum HighestGDPCountries {
      US = 1,
      China,
      Japan,
      Germany,
      India,
    }

    // sprendimą|sprendimo pavyzdžius spausdinkite čia
    console.log(`
    enum HighestGDPCountries {
      US = 1,
      China,
      Japan,
      Germany,
      India,
    }`);
  }
  console.groupEnd();
}
console.groupEnd();
