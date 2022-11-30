const sm = document.getElementById("small")
const md = document.getElementById("medium")
const bg = document.getElementById("big")

const handler1 = (event) => {
    console.log(event.currentTarget)
}

const handler2 = (event) => alert(event)

sm.addEventListener('click', handler1)
md.addEventListener('click', handler1)
bg.removeEventListener("click", handler1)