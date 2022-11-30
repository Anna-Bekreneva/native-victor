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


const getNames = (arr) => {
    let result = []
    const getValues = (el) => el.name
    for (let i = 0; i < arr.length; i++) {
        result[i] = getValues(arr[i])
    }
    return result
}
console.log(getNames(students))

const easyMap = (arr, fn) => {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        result[i] = fn(arr[i])
    }

    return result
}

console.log(easyMap(students, (el) => el.name))
console.log(easyMap(students, (el) => `My name is ${el.name}. I'm ${el.age} years old. And i have ${el.scores} scores`))
console.log(students.map(el => el.name))

const easyFilter = (arr, fn) => {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true) {
            result.push(arr[i])
        }
    }

    return result
}

console.log(easyFilter(students, el => el.scores >= 100))
console.log(students.filter(el => el.scores >= 100))

const easyFind = (arr, fn) => {
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true) {
            return arr[i]
        }
    }
}

console.log(easyFind(students, el => el.scores > 80))
console.log(students.find(el => el.scores > 80))

const easyJoin = (arr, separator) => {
    let result = ''
    let sep = separator ? separator : ","

    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length - 1) {
            result += arr[i] + sep
        } else {
            result += arr[i]
        }
    }

    return result
}

console.log(easyJoin(['Bob', 'Alex', 'Nick', 'John'], ''))
console.log(['Bob', 'Alex', 'Nick', 'John'].join(''))

console.log(easyJoin(['Bob', 'Alex', 'Nick', 'John'], ' ! '))
console.log(['Bob', 'Alex', 'Nick', 'John'].join(' ! '))

const easyPush = (arr, element) => {
    const result = [...arr, element]
    return result
}

console.log(easyPush(['Anna', 'Alex'], 'Ivan'))

const easyPop = (arr) => {
    const result = []

    const lastElement = arr.slice(-1)
    console.log(lastElement)

    const test = arr.splice(-1, lastElement, 0)
    console.log()

    //return result
}

console.log(easyPop(['Anna', 'Alex and']))



























