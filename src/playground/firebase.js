import * as firebase from "firebase"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6C3XDEOn8gMmXFDgKefNaTVlQNcuv3fA",
    authDomain: "expensify-b0d9e.firebaseapp.com",
    databaseURL: "https://expensify-b0d9e.firebaseio.com",
    projectId: "expensify-b0d9e",
    storageBucket: "expensify-b0d9e.appspot.com",
    messagingSenderId: "732892508835",
    appId: "1:732892508835:web:2c3b315f5ec204e1490516",
    measurementId: "G-QB0WLJCVBN"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

// Initialize Firebase database
const database = firebase.database()

// const firebaseNotes = {
//     notes: {
//         "1": {
//             title: "First",
//             body: "1"
//         },
//         "2": {
//             title: "Second",
//             body: "2"
//         }
//     }
// }

// child_removed
database.ref("expenses").on("child_removed", (dataSnapshot) => {
    console.log(dataSnapshot.key, dataSnapshot.val())
})


// child_changed
database.ref("expenses").on("child_changed", (dataSnapshot) => {
    console.log(dataSnapshot.key, dataSnapshot.val())
})

// child_added
database.ref("expenses").on("child_added", (dataSnapshot) => {
    console.log(dataSnapshot.key, dataSnapshot.val())
})

// database.ref("expenses").push({
//     description: "An expense",
//     note: "Yes an expense",
//     amount: 9550,
//     createdAt: 222256346
// })


// database.ref("expenses").on("value", (dataSnapshot) => {
//     console.log(dataSnapshot.val())
//     const expenses = []
//     dataSnapshot.forEach((childDataSnapshot) => {
//         expenses.push({
//             id: childDataSnapshot.key,
//             ...childDataSnapshot.val()
//         })
//     })

//     console.log(expenses)
// },(err) => console.log("Error fetching data", err))


// database.ref("expenses")
//     .once("value")   // subscribe once
//     .then((dataSnapshot) => {
//         console.log(dataSnapshot.val())
//         const expenses = []
//         dataSnapshot.forEach((childDataSnapshot) => {
//             expenses.push({
//                 id: childDataSnapshot.key,
//                 ...childDataSnapshot.val()
//             })
//         })

//         console.log(expenses)
//     })
//     .catch((err) => console.log("Error fetching data", err))

// Add data to a/an collection/array of items
// database.ref("notes").push({
//     title: "Fourth note title",
//     body: "Walk the dog"
// })


// database.ref("notes/-LsvQq4MK1l94Xg2D9ju").remove()


// const ref = database.ref()
// Fetch/Get data from database --- method 2
// const onValueChange = ref.on("value", (dataSnapshot) => {
//     const val = dataSnapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// }, (err) => {
//     console.log("Error fetching data:", err)
// })
// setTimeout(() => {
//     ref.off("value", onValueChange)
// }, 4000)

// Fetch/Get data from database --- method 1
// ref.once("value")
//     .then((dataSnapshot) => {
//         const val  = dataSnapshot.val()
//         console.log(val)
//     })
//     .catch((err) => console.log("Error fetching data", err))


// Create/Set data in database 
// ref.set({
//     name: "Okwuidegbe Emmanuel",
//     age: 24,
//     stressLevel: 5,
//     job: {
//         title: "Software developer",
//         company: "Google"
//     } ,
//     location: {
//         city: "Lagos",
//         country: "Nigeria"
//     }
// }).then(() => {
//     console.log("Data saved")
// }).catch((err) => {
//     console.log("This failed: ", err)
// })


// Update data in database
// ref.update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Enugu"
// })


// Remove data from database
// database.ref("isSingle").remove()
//     .then(() => console.log("Data was removed"))
//     .catch((err) => console.log("This failed:", err))
