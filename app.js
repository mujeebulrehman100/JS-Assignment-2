
                        //     chapter 7
                        // qno1

//       var CityName = prompt("Enter your City Name:")


// alert("Welcome to city of lights: " )

      //      qno2


//       var gender = prompt("Please enter your gender (male/female):");
   
//       if(gender === "male"){
//            alert("Good Morning sir " );
//       } else if (gender === "female"){
//                 alert("Good Morning Ma'am ")
//       } else {
//          alert("Invalid input. Please enter 'male' or 'female'.");
// }

//    qno 3

// var color = prompt("take input color of road traffic signal (Red/Yellow/Green):");
// if(color === "Red"){
//       alert("Must Stop");
// } else if (color === "Yellow") {
//       alert("Ready to move")
// } else if (color === "Green") {
//       alert("Move now")
// } else {
//      alert ("Invalid input. ");
// }

// ch7
// qno4





// var remainingfuel =prompt("Enter the remaining fuel in your car (in litres):");
// if(remainingfuel <0.25){
//       alert("Please refill the fuel in your car");

// }else {
//       alert(" Please refill the fuel in your car :")
// }




// qno5

// a

// var a=4;
// if (++a ===5){
//       alert("given condition for variable a is true")
// }

// // b

// var b=82;
// if (b++ ===83){
//       alert("given condition for variable b is true")
// }


// // c
// var c = 12;
// if (c++ === 13){
//   alert("condition 1 is true");
// }
// if (c === 13){
//   alert("condition 2 is true");
// }
// if (++c < 14){
//   alert("condition 3 is true");
// }
// if(c === 14){
//   alert("condition 4 is true");
// }


// // d

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//   alert("The cost equals");
// }

// // e

// if (true){
//   alert("True");
// }
// if (false){
//   alert("False");
// }

// // f.

// if("car" < "cat"){
//   alert("car is smaller than cat");
// }








                              //   chapter  08

      // qno1


//       let char = prompt("Enter a single character:");

// if (char.length === 1) {
//     let code = char.charCodeAt(0);

//     if (code >= 48 && code <= 57) {
//         alert("It is a number.");
//     } else if (code >= 65 && code <= 90) {
//         alert("It is an uppercase letter.");
//     } else if (code >= 97 && code <= 122) {
//         alert("It is a lowercase letter.");
//     } else {
//         alert("It is a special character or symbol.");
//     }
// } else {
//     alert("Please enter only one character.");
// }


// // qno2

// let num1 = prompt("Enter the first integer:");
// let num2 = prompt("Enter the second integer:");

// if (num1 > num2) {
//     alert(num1 + " is larger than " + num2);
// } else if (num2 > num1) {
//     alert(num2 + " is larger than " + num1);
// } else {
//     alert("Both numbers are equal");
// }





// qno 3


// let number = prompt("Enter a number:");
// number = Number(number); // Convert input to a number

// if (number > 0) {
//     alert("The number is positive.");
// } else if (number < 0) {
//     alert("The number is negative.");
// } else if (number === 0) {
//     alert("The number is zero.");
// } else {
//     alert("Invalid input. Please enter a valid number.");
// }






// qno4


// var char = prompt("Enter a single character:");

// // Convert to lowercase for consistent comparison
// char = char.toLowerCase();

// // Check if the input is a single letter
// if (char.length === 1 && /[a-z]/.test(char)) {
//     // Check if the character is a vowel
//     let isVowel = (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u');
//     alert(isVowel); // Will show true or false
// } else {
//     alert("Invalid input. Please enter a single alphabet letter.");
// }












