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

// const getNames = (arr) => {
//     const result = []
//     const getNewValue = (el) => el.name
//     for (let i = 0; i < arr.length; i++) {
//         const newValue = getNewValue(arr[i])
//         result[i] = newValue
//     }
//     return result;
// }

// const getData = (arr) => {
//     const result = []
//     const getNewValue = (el) => ` ${el.name}, ${el.age} yo, ${el.scores} scores`
//     for (let i = 0; i < arr.length; i++) {
//         const newValue = getNewValue(arr[i])
//         result[i] = newValue
//     }
//     return result;
// }

const easyMap = (arr, fn) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const newValue = fn(arr[i])
        result[i] = newValue
    }
    return result;
}

console.log(easyMap(students, (el) => el.name))
console.log(easyMap(students, (el) => ` ${el.name}, ${el.age} yo, ${el.scores} scores`))
console.log(easyMap(students, (el) => el.scores))

console.log(students.map((el) => el.name))
console.log(students.map((el) => ` ${el.name}, ${el.age} yo, ${el.scores} scores`))
console.log(students.map((el) => el.scores))

const easyFilter = (arr, fn) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true) {
            result.push(arr[i])
        }
    }
    return result
}

console.log(easyFilter(students, el => el.scores >= 100))
console.log(students.filter((el => el.scores >= 100)))

const easyFind = (arr, fn) => {
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true) {
            return arr[i]
        }
    }
}

console.log(easyFind(students, el => el.name === "Alex"))
console.log(students.find(el => el.name === "Alex"))


const easyJoin = (arr, separator = "") => {
    let result = ""
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length - 1) {
            result = result + arr[i] + separator
        } else {
            result += arr[i]
        }
    }
    return result
}

console.log(easyJoin(["Bob", "Alex", "Nick", "John"]))
console.log(easyJoin(["Bob", "Alex", "Nick", "John"]," "))
console.log(["Bob", "Alex", "Nick", "John"].join())
console.log(["Bob", "Alex", "Nick", "John"].join(" "))