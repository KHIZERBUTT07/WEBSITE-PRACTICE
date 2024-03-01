// for loop
/* 1.Initialization
   2.Condition
   3.Satatement   / Block
   4.Updation 
   */

// for(var i = 0; i<=10; i++){
//       console.log('i');
//       i++
// }

// Star Pattern
/* **********
   *********
   ********
   *******
   ******  */
    var star = "**********"
    for(var i = 10; i >=1; i--){

        console.log(star)
        star = star.slice(1);
        //  console.log(i);
    }
