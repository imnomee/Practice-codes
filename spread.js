

const teachers = [
    {
        name: 'Ashley',
        topicArea: 'Javascript'
    }
];

const courses = ['Introducing JavaScript',
    'JavaScript Basics',
    'JavaScript Loops, Arrays and Objects',
    'Getting Started with ES2015',
    'JavaScript and the DOM',
    'DOM Scripting By Example'];

var i = courses.length;

function addNewTeachers(newTeachers) {
    teachers.push(...newTeachers);

}

function printTreehouseSummary() {

    for (let i = 0; i < teachers.length; i++) {
        console.log(`${teachers[i].name} teaches ${teachers[i].topicArea}`);
    }

    console.log(`Treehouse has ${i} JavaScript courses, and ${teachers.length} Javascript teachers`);
}

let newTeachersList = [
    {
        name: 'James',
        topicArea: 'Javascript'
    },
    {
        name: 'Treasure',
        topicArea: 'Javascript'
    },
];

addNewTeachers(newTeachersList);
printTreehouseSummary();








