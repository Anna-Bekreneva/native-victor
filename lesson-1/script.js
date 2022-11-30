const user = {
    name: 'Bob',
    age: 23
}

const user2 = user

user2.name = 'alex'

const state = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
        address: {}
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
        address: {}
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true,
        address: {}
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: true,
        address: {}
    },
]

const copyState = state.map(st => ({...st, address: {...st.address}}))
const copyState2 = state.map(st => st.id === 3 ? {...st, name: "Anne"} : st)

// const array = [1, 2, 3, 4, 5]
// const copyUser = {...array}
// console.log(copyUser)