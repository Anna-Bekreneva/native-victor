//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
const repeatString = (str, repeat, separator) => {
    const string = `${str}${separator}`
    return string.repeat(repeat).slice(0, -1)
}

console.log(repeatString("yo", 3, " ")) // "yo yo yo"
console.log(repeatString("yo", 3, ",")) // yo,yo,yo

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
const checkStart = (string, smallString) => {
    return string.toLowerCase().startsWith(smallString.toLowerCase())
}

console.log(checkStart("Incubator", "inc")) //true
console.log(checkStart("Incubator", "yo")) //false

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
const truncateString = (string, count) => {
    let test = "";
    for (let i = 0; i <= count; i++) {
        test = test + string[i]
    }
    return test + '...'
}

console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10)) //"Всем студе..."

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
const getMinLengthWord = (string) => {
    if (string === "") {
        return null
    } else {
        return string.split(" ").sort((a, b) => (b.length - a.length)).slice(-1).toString()
    }
}

console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!")) //"Всем"
console.log(getMinLengthWord("")) //null

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
const setUpperCase = (string) => {
    let newString = ''
    const array = string.toLowerCase().split(" ").map(el => {
        newString += el[0].toUpperCase() + el.slice(1) + " "
    })
    return newString
}

console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!")) //"Всем Студентам Инкубатора Желаю Удачи!"


//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

const isIncludes = (string, subString) => {
    const stringLowerCase = string.toLowerCase()
    const subStringLowerCase = subString.toLowerCase()

    let array = []
    for (let i = 0; i < subStringLowerCase.length; i++) {
        array.push(stringLowerCase.includes(subStringLowerCase[i]))
    }

    if (array.find(el => !el) === false) {
        return false
    } else {
        return true
    }
}
console.log(isIncludes("Incubator", "Cut")) //true
console.log(isIncludes("Incubator", "table")) //false
console.log(isIncludes("Incubator", "inbba")) //true
console.log(isIncludes("Incubator", "Incubatorrr")) //true




