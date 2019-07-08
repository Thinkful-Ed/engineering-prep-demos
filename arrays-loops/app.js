// array syntax
let cart = ["butter", "eggs", "flour", "sugar", "Red Bull", "Cheetos"]

/* let cart = [
    "butter",
    "eggs",
    "flour",
    "sugar",
    "Red Bull",
    "Cheetos"
] */

// accessing values
console.log(cart[1]) // "eggs"
console.log(cart[6]) // undefined

// map
let formattedCart = cart.map(item => {
    return item.toLowerCase();
})

console.log(formattedCart)

// map, join
let htmlString = cart.map(item => {
    return `<li class="cart-item">${item}</li>`
}).join("")

console.log(htmlString)

// for loop syntax
const joke1 = "Knock, knock!"
const response1 = "Who's there?"
const joke2 = "Banana!" 
const response2 = "Banana who?"

for (let i = 0; i <= 5; i++) {
    console.log(joke1);
    console.log(response1);
    console.log(joke2);
    console.log(response2);
}

console.log(joke1);
console.log(response1);
console.log("Orange!");
console.log("Orange who?");
console.log("Orange you glad I didn't say, 'banana?'");