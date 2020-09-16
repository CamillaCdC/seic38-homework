const drEvil = (amount) => {
    const standardResponse = `${amount} dollars`;
    const itsAMil = `${standardResponse} (pinky)`;
    return (amount === 1000000) ? itsAMil : standardResponse;
}
const mixUp = (stringA, stringB) => {
    let newWord = stringB.slice(0,2) + stringA.slice(2) + " " + stringA.slice(0,2) + stringB.slice(2)
    return newWord
}
const fixStart = (string) => {
    const result = string.split('')
    for (i = 1; i < result.length; i ++) {
        if (result[i] === result[0]) {
            result[i] = '*'
        }
    }
    return result.join('')
}
const verbing = (string) => {
    let result = "";
    if (string.length >= 3) { 
        (string.slice(-3) === 'ing') ? result = `${string}ly` : result = `${string}ing`
    } else { result = string }
    return result
}
const notBad = (string) => {
    const regex = /\bnot\b.*(\bbad\b)/gm
    let result
    if (string.search(regex)) {
        result = string.replace(regex, "good")
    }
    return result
}
