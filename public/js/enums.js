"use strict";
var WeekDayNamesLT;
(function (WeekDayNamesLT) {
    WeekDayNamesLT["Monday"] = "pirmadienis";
    WeekDayNamesLT["Tuesday"] = "antradienis";
    WeekDayNamesLT["Wednesday"] = "tre\u010Diadienis";
    WeekDayNamesLT["Thursday"] = "ketvirtadienis";
    WeekDayNamesLT["Friday"] = "penktadienis";
    WeekDayNamesLT["Saturday"] = "\u0161e\u0161tadienis";
    WeekDayNamesLT["Sunday"] = "sekmadienis";
})(WeekDayNamesLT || (WeekDayNamesLT = {}));
console.group('Literal types - užduotys');
{
    console.group('1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.');
    {
        let BiggestLithuanianCities;
        (function (BiggestLithuanianCities) {
            BiggestLithuanianCities[BiggestLithuanianCities["Vilnius"] = 0] = "Vilnius";
            BiggestLithuanianCities[BiggestLithuanianCities["Kaunas"] = 1] = "Kaunas";
            BiggestLithuanianCities[BiggestLithuanianCities["Klaipeda"] = 2] = "Klaipeda";
            BiggestLithuanianCities[BiggestLithuanianCities["Siauliai"] = 3] = "Siauliai";
            BiggestLithuanianCities[BiggestLithuanianCities["Panevezys"] = 4] = "Panevezys";
        })(BiggestLithuanianCities || (BiggestLithuanianCities = {}));
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
        let MostPopulatedCountries;
        (function (MostPopulatedCountries) {
            MostPopulatedCountries[MostPopulatedCountries["China"] = 0] = "China";
            MostPopulatedCountries[MostPopulatedCountries["India"] = 1] = "India";
            MostPopulatedCountries[MostPopulatedCountries["US"] = 2] = "US";
            MostPopulatedCountries[MostPopulatedCountries["Indonesia"] = 3] = "Indonesia";
            MostPopulatedCountries[MostPopulatedCountries["Pakistan"] = 4] = "Pakistan";
        })(MostPopulatedCountries || (MostPopulatedCountries = {}));
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
        let HighestGDPCountries;
        (function (HighestGDPCountries) {
            HighestGDPCountries[HighestGDPCountries["US"] = 1] = "US";
            HighestGDPCountries[HighestGDPCountries["China"] = 2] = "China";
            HighestGDPCountries[HighestGDPCountries["Japan"] = 3] = "Japan";
            HighestGDPCountries[HighestGDPCountries["Germany"] = 4] = "Germany";
            HighestGDPCountries[HighestGDPCountries["India"] = 5] = "India";
        })(HighestGDPCountries || (HighestGDPCountries = {}));
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
//# sourceMappingURL=enums.js.map