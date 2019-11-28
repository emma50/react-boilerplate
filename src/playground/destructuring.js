// Object destructuring

// const person = {
//     name: "Emmanuel",
//     age: 24,
//     location: {
//         city: "Lagos",
//         temp: 32
//     }
// }

// const { name: firstName = "Anonymous", age} = person
// console.log(`my name is ${firstName}. I am ${age} years old`)

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`it's ${temperature} temp in ${city}`)
// }


// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: "penguin"
//     }
// }

// const { name: publisherName = "Self-published" } = book.publisher
// console.log(`${publisherName}`)



// Array destructuring

const address = ["39 Victoria St", "Ojota", "Lagos", "100242"]

const [, city, state = "Enugu"] = address
console.log(`You are in ${city}, ${state}`)

const item = ["coffee (hot)", "$2.00", "$2.50", "2.70"]

const [itemName, , mediumPrice] = item
console.log(`A medium ${itemName} costs ${mediumPrice}`)


