/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
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

console.group('1. Sukurkite klasę tėvinę Person vaikinėms klasėms ir išsaugokite joje bendrą funkcionalumą.');
{
  class Person {
    private static count = 0;

    protected name!: string;

    protected surname!: string;

    public readonly id!: string;

    constructor(name: string, surname: string) {
      Person.count += 1;
      this.id = `Person_${Person.count}`;
      this.setName = name;
      this.setSurname = surname;
    }

    set setName(name: string) {
      this.name = name;
    }

    set setSurname(surname: string) {
      this.surname = surname;
    }

    get getFullname() {
      return `${this.name} ${this.surname}`;
    }
  }

  class Student extends Person {
    readonly marks: number[] = [];

    constructor(name: string, surname: string) {
      super(name, surname);
      this.marks = [];
    }

    addMark(mark: number) {
      if (mark % 1 === 0 && mark > 0 && mark < 11) {
        this.marks.push(mark);
      } else {
        throw new Error('mark has to be integer 1-10');
      }
    }

    get avg() {
      const average = this.marks.reduce((prevValue, currValue, index, array) => {
        let sum = prevValue + currValue;

        if (index === array.length - 1) {
          sum /= array.length;
        }

        return sum;
      });

      return average;
    }
  }

  class Lecturer extends Person {
    private static MIN_SALARY = 1800;

    private static MAX_SALARY = 4400;

    private static GPM_PERC = 0.20;

    private static PSD_PERC = 0.0698;

    private static VSD_PERC = 0.1252;

    private salary!: number;

    constructor(name: string, surname: string, salary: number) {
      super(name, surname);
      this.setSalary = salary;
    }

    set setSalary(salary: number) {
      if (salary.toString().length <= salary.toFixed(2).toString().length
                && salary >= Lecturer.MIN_SALARY && salary <= Lecturer.MAX_SALARY) {
        this.salary = salary;
      } else {
        throw new Error('get good');
      }
    }

    get salaryNeto() {
      return Math.ceil(
        this.salary - this.salary * Lecturer.GPM_PERC
                - this.salary * Lecturer.PSD_PERC
                - this.salary * Lecturer.VSD_PERC,
      );
    }
  }

  const allPeople = [];

  console.groupEnd();

  // 20min
  console.group('1.1. Sukurkite klasę Person, kurios objektams būtų galima priskirti vardą ir pavardę. Šios klasės objektams turi susigeneruoti id - unikalus raktas. Taip pat sukurkite get"erį fullname, kuris grąžina vardą ir pavardę atskirtus tarpu. Atspausdinkite kelis šios klasės objektus, ir pademonstruokite get"erio veikimą.');
  {
    const person1 = new Person('Mykolas', 'Raudzius');
    const person2 = new Person('Alius', 'Grigaliunas');
    const person3 = new Person('Giedre', 'Klimaite');

    console.log(person1.getFullname, person2.getFullname, person3.getFullname);

    allPeople.push(person1, person2, person3);
  }
  console.groupEnd();

  // 40min
  console.group('1.2. Sukurkite klasę Student, kuri paveldėtų klasę Person. Be Person klasės paveldimų savybių, klasę Student turi turėti savybę "marks", kurioje bus saugomi studento pažymiai. Konstruktoriaus vykdymo metu, "marks" reikšmei turi būti sukuriamas tuščias masyvas. Student klasėje sukurkite metodą "addMark" kuris leistų įdėti naują pažymį - sveiką skaičių nuo 1 iki 10. Taip pat sukurkite get"erį "avg", kuris skaičiuotų studento vidurkį pagal esamus pažymius. Sukurkite bent 2 Student klasės objektus ir atspausdinkite visus get"erius ir pavaizduokite metodų funkcionalumą konsolėje.');
  {
    const student1 = new Student('Mykolas', 'Raudzius');
    const student2 = new Student('Alius', 'Grigaliunas');

    student1.addMark(10);
    student1.addMark(7);

    student2.addMark(9);
    student2.addMark(4);

    console.log(student1.getFullname, student1.avg, student2.getFullname, student2.avg);
    console.group('student1');
    console.log(student1.marks, student1.avg);
    student1.addMark(5);
    console.log('addMark(5)');
    console.log(student1.marks, student1.avg);
    console.groupEnd();

    console.group('student2');
    console.log(student2.marks, student2.avg);
    student2.addMark(5);
    console.log('addMark(5)');
    console.log(student2.marks, student2.avg);
    console.groupEnd();

    allPeople.push(student1, student2);
  }
  console.groupEnd();

  // 50min
  console.group('1.3. Sukurkite klasę Lecturer, kuri paveldėtų klasę Person. Papildomai klasei Lecturer sukurkite savybę "salary", kuri privalo būti priskirta objekto sukūrimo metu. Inkapsuliuokite savybę "salary" taip, kad ji galėtų būti skaičius nuo 1800 iki 4400 su ne daugiau nei 2 skaičiais po kablelio. Taip pat sukurkite get"erį "salaryNeto", kuris atspausdintų suapvalintą atlyginimą iki sveikų skaičių atskaičiavus mokesčius: GPM 20%, PSD 6.98%, VSD 12.52%. Sukurkite bent 2 Lecturer klasės objektus ir atspausdinkite visus get"erius konsolėje.');
  {
    const lecturer1 = new Lecturer('Zilvinas', 'Vidmantas', 3400);
    const lecturer2 = new Lecturer('Romanas', 'Venckus', 3200);

    console.log(lecturer1.getFullname, lecturer1.salaryNeto);
    console.log(lecturer2.getFullname, lecturer2.salaryNeto);

    allPeople.push(lecturer1, lecturer2);
  }
  console.groupEnd();

  // 10min
  console.group('1.4. Sukurkite viešai [1.] užduočiai pasiekiamą masyvą "allPeople". [1.1], [1.2] ir [1.3] užduotyse sukurtus objektus įdėkite į šį masyvą. Atspausdinkite visų žmonių elementų "fullname"');
  {
    allPeople.forEach((person) => { console.log(person.getFullname); });
  }
}
console.groupEnd();
