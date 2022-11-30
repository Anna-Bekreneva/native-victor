const todoListId_1 = "1"
const todoListId_2 = "2"

const todoLists = [
    {
        id: todoListId_1,
        title: "What to learn",
        filter: "all",
    },

    {
        id: todoListId_2,
        title: "What to buy",
        filter: "all",
    }
]

const tasks = {
    [todoListId_1]: [
        {id: "11", title: "Html", isDone: true},
        {id: "12", title: "css", isDone: true},
        {id: "13", title: "JS/TS", isDone: true},
    ],

    [todoListId_2]: [
        {id: "21", title: "Beer", isDone: true},
        {id: "22", title: "Fish", isDone: true},
        {id: "23", title: "Cheese", isDone: true},
    ],
    ["user name"]: "Bob"
}

console.log([...tasks[todoListId_1], {id: "14", title: "Redux", isDone: true}])
console.log(tasks[todoListId_2].find(task => task.id === "21"))

console.log(tasks[todoListId_1][2].title)
console.log(tasks[todoListId_1][2]['title'])

console.log(tasks[todoLists[1]["id"]][0].title)

const numbers = [1, 2, 3, 4, 5]

console.log(numbers.reduce((acc, el) => acc + el, 0))

console.log(numbers.reduce((acc, el) => acc > el ? acc : el))

const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

console.log(students.reduce((acc, el) => acc.scores > el.scores ? acc : el))