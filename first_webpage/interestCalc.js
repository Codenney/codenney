// This is a simple program that calculate the simple interest where the principal and time is given. 
// Also included is a function and a conditional statement to calculate the rate.

let myArray = [
      { Principal: 2500, time: 1.8 },
      { Principal: 1000, time: 5 },
      { Principal: 3000, time: 1 },
      { Principal: 2000, time: 3 }
    ];

/** 
 *  [This is a function that takes in an array as an argument to calculate the simple interest]
 * 
 *  @param {[array]} thisArray - [This takes in the keys and values in a single array]
 *  @return {[array]} interestData - [Return an array that includes the calculated interest]
*/
const interestCalculator = ( thisArray ) => {
      
    let interestData = [ ...thisArray ];
        // A for of to iterate the given array  
        for ( let a of interestData ) {
            
            if ( (a.Principal >= 2500 ) && ( a.time > 1 ) && ( a.time < 3 ) ) {
              a.rate = 3;
              
            } else if ( ( a.Principal >= 2500 ) && ( a.time >= 3 ) ) {
              a.rate = 4;
              
            } else if ( ( a.Principal < 2500 ) || ( a.time <= 1 ) ) {
              a.rate = 2;
              
            } else {
              a.rate = 1;
              
            }
            // This calculates the simple interest
            a.interest = ( a.Principal * a.rate * a.time ) / 100
            
          }

        // The calculated interest is included in the argument after using the spread operator to copy it  
        console.log( interestData ); 
          
        return interestData;
    }

// The myArray variable that includes the object is being called using the console.
console.log( interestCalculator ( myArray ) );