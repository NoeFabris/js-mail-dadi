var num1 = (Math.floor(Math.random() * 6) + 1)
var num2 = (Math.floor(Math.random() * 6) + 1)


console.log(num1)
console.log(num2)


if (num1 > num2) {
    document.getElementById("output").innerHTML = "Umano Vince"
} else {
    document.getElementById("output").innerHTML = "Computer Vince"
}