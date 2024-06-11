let heading = document.querySelector("h1")

let count = 11

let interval = setInterval(() => {
    count -= 1
    heading.innerText = count
    if (count == 0) {
        heading.innerText = '"Your mobile has hacked successfully"'
        document.body.style.background = "hsla(0, 57%, 43%, 0.713)";
        heading.style.color = "whitesmoke";
        heading.style.textDecoration = 'underline'; 
        
        clearInterval(interval)
    }
},1000)