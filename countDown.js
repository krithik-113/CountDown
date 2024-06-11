let heading = document.querySelector("h1")

let count = 11

let interval = setInterval(() => {
    count -= 1
    heading.innerText = count
    if (count == 0) {
        heading.innerText = 'Happy New Year'
        clearInterval(interval)
    }
},1000)