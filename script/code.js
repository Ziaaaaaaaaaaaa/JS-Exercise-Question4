// let subject = "programming"
// subject = [...subject].reverse().join("");
// console.log(subject);

// Q5

// let objects = {
//     fullName: "Zia Khan",
//     dob: "2003-04-29"
// }
let info = [
    {
        name:'Mish-Al',
        dob:'2020-05-31'
},{
    name:"Zia Khan",
    dob:"2003-04-29"
}
]
let todaysDate = new Date();
let otherDate = new Date (info[0].dob)
console.log(otherDate)
console.log(todaysDate)
console.log(todaysDate.getFullYear())
console.log(otherDate.getFullYear())
console.log(otherDate.getDate() -todaysDate.getDate()," Days Left until Mish's birthday",);
console.log('Mish is : ', otherDate.getDate() - todaysDate.getDate(), 'years old!')