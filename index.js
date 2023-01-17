const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


// function titleCased(array) {
//   array.forEach((items) => {
//       let newArray= items.split(" ")
//       newArray.forEach((newer) => {
//         let x = newer.charAt(0).toUpperCase()
//         let y = newer.slice(1)
//         let z = x + y
//         console.log(z.join())
//         return z
//       })
//   })
  
// } 


function titleCased() {
  return tutorials.map(newArray => {
    return newArray.split(" ").map(character => {
      return character.replace(character[0], character[0].toUpperCase())
    }).join(' ')
    })
    
  }

console.log((titleCased()))