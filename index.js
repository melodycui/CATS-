//document.getElementById("count-el").innerText = 4


// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)


// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clocked
//change the count-el in the HTML to reflect the new count 

// camel case


let count = 0

function increment() {
    count = count + 1
    document.getElementById("count-el").innerText = count // pass in arguments
}



function save() {
    document.getElementById("save-el").innerHTML += count + " - "
    count = 0
    document.getElementById("count-el").innerText = count
}
