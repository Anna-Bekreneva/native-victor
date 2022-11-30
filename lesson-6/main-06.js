const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100,
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110,
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105,
    },
];

const user = {
    name: "Bob",
    age: 23,
    isMarried: false,
    friends: ["Alex", "Nick", "John"],
};

//https://www.dev-notes.ru/articles/deep-copying-using-structured-clone/

//1. Поверхностная копия user / student
const copyUser = {...user};
console.log(user === copyUser); //false
console.log(user.friends === copyUser.friends); //true

const copyStudents = [...students];
console.log(students === copyStudents); //false
console.log(students[0] === copyStudents[0]); //true

//2. Полная (глубокая) копия user
const deepCopyUser = {...user, friends: [...user.friends]};
console.log(user === deepCopyUser); //false
console.log(user.friends === deepCopyUser.friends);//false

//3. Поверхностная копия students (slice)
const sliceCopyStudents = students.slice()
console.log(students === sliceCopyStudents) //false
console.log(students[3] === sliceCopyStudents[3]) //true

//4*. Полная (глубокая) копия students
const mapCopyStudents = students.map((student) => ({...student}))
console.log(students === mapCopyStudents) //false
console.log(students[2] === mapCopyStudents[2]) //false

//5. Отсортируйте студентов по успеваемости (лучший идёт первым)
const studentsScores = [...students]
console.log(studentsScores.sort((a, b) => (b.scores - a.scores)))

//5a. Отсортируйте студентов по алфавиту
const studentsNames = [...students]
console.log(studentsNames.sort((a, b) => (a.name >= b.name ? 1 : -1)))

//6. Сформируйте массив студентов, у которых 100 и более баллов
console.log(copyStudents.filter(student => student.scores >= 100))

//6a. Сформируйте массив из трёх лучших студентов
const bestStudents = [...students]
bestStudents.sort((a, b) => (a.scores - b.scores))
console.log(bestStudents.slice(-3))

//7. Сформируйте массив холостых студентов
console.log(students.filter(student => !student.isMarried))

//8. Сформируйте массив имён студентов
const arrayStudentsNames = copyStudents.map(students => students.name)
console.log(arrayStudentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом
// - запятой
console.log(arrayStudentsNames.join(' '))
console.log(arrayStudentsNames.join(', '))

//9. Добавьте всем студентам свойство "isStudent" со значением true
console.log(students.map((student) => ({...student, isStudent: true})))

//10. Nick женился. Выполните преобразование массива students
console.log(students.map(student => student.name === 'Nick' ? {...student, isMarried: true} : student))

//11. Найдите Студентку по имени Ann
console.log(students.find(student => student.name === 'Ann'))

//12. Найдите студента с самым высоким баллом
const bestStudent = [...students]
const oneBestStudent = bestStudent.sort((a, b) => (b.scores - a.scores))
console.log(oneBestStudent[0])

//12a. Найдите 2 студента с самым высоким баллом
console.log(oneBestStudent[0], oneBestStudent[1])

//13. Найдите сумму баллов всех студентов
const scoresStudents = students.map(student => student.scores)
console.log(scoresStudents.reduce((a, b) => a + b))

// 14.Напишите функцию addFriends, которая принимает параметром массив students и возвращает новый массив,
// при этом добавляет в каждому студенту свойство .friends, значением которого является массив имён всех остальных студентов из массива,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriend = (array) => {
    const names = array.map(el => el.name)
    return array.map((el) => {
            const newNames = names.filter(name => name !== el.name)
            return (
                {...el, friends: [newNames]}
            )
        }
    )
}

console.log(addFriend(students))