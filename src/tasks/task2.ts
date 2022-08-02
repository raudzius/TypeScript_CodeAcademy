const initTask2 = () => {
    // task 2
    type Student = {
      name: string;
      surname: string;
      course: number;
      average: number;
    };

    const students: Student[] = [
      {
        name: 'John',
        surname: 'White',
        course: 4,
        average: 8.6,
      },
      {
        name: 'Martin',
        surname: 'Johnson',
        course: 2,
        average: 6.4,
      },
      {
        name: 'Gary',
        surname: 'Smith',
        course: 5,
        average: 7,
      },
      {
        name: 'Lisa',
        surname: 'Williams',
        course: 1,
        average: 9.2,
      },
      {
        name: 'Chris',
        surname: 'Brown',
        course: 3,
        average: 6.6,
      },
      {
        name: 'Karen',
        surname: 'Jones',
        course: 4,
        average: 7.9,
      },
    ];

    const fullnameArray: string[] = students.map(
      ({ name, surname }) => `${name} ${surname}`,
    );
    console.log(fullnameArray);

    const firstCourseStudents: Student[] = students.filter(
      ({ course }) => course === 1,
    );
    console.log(firstCourseStudents);

    const studentAverages: number[] = students.map(({ average }) => average);
    const studentAveragesSum:number = studentAverages.reduce(
      (prevSum, currValue) => prevSum + currValue,
    );
    const studentsAverage:number = studentAveragesSum / studentAverages.length;
    console.log(studentsAverage);
};

export default initTask2;
