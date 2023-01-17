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


function titleCased(tutorial) {
  tutorial.map(array => {
    let newArray = array.split(" ")
    for( let letter of newArray) {
      console.log(letter)
    }

    
       
        

        // for( let newLetter of letter) {
        //   console.log(newLetter.charAt(2))
        // }
        // let x = letter.charAt(0).toUpperCase()
        // return console.log(x)
     })
    
  }

(titleCased(tutorials))