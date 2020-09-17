const squareNumber = (a) => {
    const result = a ** 2
    console.log(`The result of squaring the number ${a} is ${result}`)
    return result
}
const halfNumber = (a) => {
    const result = a / 2
    console.log(`Half of ${a} is ${result}`)
    return result
}
const percentOf = (a, b) => {
    const result = (a/b) * 100
    console.log(`${a} is ${result}% of ${b}`)
    return result
}
const areaOfCircle = (radius) => {
    const result = +(Math.PI * radius ** 2).toFixed(2)
    console.log(`the area for a circle with radius ${radius} is ${result}`)
    return result
}
const part2 = (a) => {
    const step1 = halfNumber(a)
    const step2 = squareNumber(step1)
    const step3 = areaOfCircle(step2)
    const step4 = percentOf(step3, step2)
    return step4
}