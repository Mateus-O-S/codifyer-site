const password = document.getElementById("password")
const button2 = document.getElementById("uncodify")
const button = document.getElementById("codify")
const text = document.getElementById("text")

const alphabet = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',.;:[](){}-!@#+=§ªº$%¨&*^?<>~_`´ãõâôêîûáéíóúàèìùò\\/"

function createLetter(letter) {
    const Letter = {
        "string": letter,
        "number": alphabet.indexOf(letter) +1,
        "inverse": (alphabet.length - alphabet.indexOf(letter)) - 1,
        "cesar": (password) => {
            return (Letter.number + (password-1)) % (alphabet.length)
        },
        "uncesar": (password) => {
            if (Letter.number - password < 1) {
                return alphabet.length-1 + (Letter.number - (password))
            } return (Letter.number - (password + 1))
        }
    }
    return Letter
}

function simplifyPassword(text) {
    let pass = 0
    text.forEach((letter)=>{
        pass += letter.number
    })
    return pass
}

function translate(text) {
    let translation = []
    for(let letter = 0; letter < text.length; letter++) {
        translation.push(createLetter(text[letter]))
    }
    return translation
}

function toText(Text) {
    final = ""
    Text.forEach((letter) => {
        final += alphabet[letter]
    })
    return final
}

function cesar(text, password) {
    let newText = text
    let newNewText = []
    newText.forEach((letter) => {
        newNewText.push(letter.cesar(simplifyPassword(password)))
    })
    newText = newNewText
    return newText
}

function uncesar(text, password) {
    let newText = text
    let newNewText = []
    newText.forEach((letter) => {
        newNewText.push(letter.uncesar(simplifyPassword(password)))
    })
    newText = newNewText
    return newText
}

button2.addEventListener("click", () => {
    setResult(toText(uncesar(translate(text.value), translate(password.value))))
})


button.addEventListener("click", () => {
    setResult(toText(cesar(translate(text.value), translate(password.value))))
})
