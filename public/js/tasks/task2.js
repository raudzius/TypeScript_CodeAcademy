const initTask2 = () => {
    const students = [
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
    const fullnameArray = students.map(({ name, surname }) => `${name} ${surname}`);
    console.log(fullnameArray);
    const firstCourseStudents = students.filter(({ course }) => course === 1);
    console.log(firstCourseStudents);
    const studentAverages = students.map(({ average }) => average);
    const studentAveragesSum = studentAverages.reduce((prevSum, currValue) => prevSum + currValue);
    const studentsAverage = studentAveragesSum / studentAverages.length;
    console.log(studentsAverage);
};
export default initTask2;
//# sourceMappingURL=task2.js.map