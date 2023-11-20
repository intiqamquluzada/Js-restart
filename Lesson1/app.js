// console.log("salam")
// document.write("SALAM")
// alert("F12ye basmada ay .");
// alert("F12ye basmada ay .");
// var --> function scope-dur. 
// if -in icinde bele tanimlasaq function scope olur
// ramda cox yer tutur
//let,const ise block scope da elan olunursa basqa yerde taninmir
//var ile bir deyiseni bir nece defe elan etmek olur
//let ile ise yalnizca bir defe
// 
//let a = 5;
// a = 4;
// console.log(a);
// let ad = 'Inti'
// console.log(typeof ad)
//  let a = 10
//  let b = 21
//  console.log(a + b)
// let a;
// a = 5;
// console.log(a);
// let ad = prompt("Adinizi daxil edin; ");
// console.log(ad);
// let result = confirm("Silmek istediyinize eminsiniz ?");
// console.log(result);

// let ceki = prompt("Cekinizi daxil edin: ");
// let boy = prompt("Boyunuzu daxil edin: ");
// let result = ceki / (boy*2);
// function myfunc(netice){
//   if (netice < 18.5) {
//     return "Ideal cekinin altinda";
//   }
//   else if (24.9 > netice > 18.5){
//     return "Ideal ceki";
//   }
//   else if (29.9 > netice > 25){
//     return "Ideal cekinin ustunde"
//   }
//   else if (39.9 > netice > 30){
//     return "Obez";
//   }
//   return "Morbid Obez";
// };
// console.log(myfunc(result));



// let fuel_type = prompt("1-Dizel : 0.8 AZN \n2-Benzin : 1.6 AZN \n3-Qaz : 0.6 AZN\nIstediyiniz yanacaq novunu qeyd edin:");
// let quantity = prompt("Miqdari yazin (litrle):");
// let balans = prompt("Balansiniz ne qederdir ?")

// let myfunc = function(balance, fuel_type, quantity) {
//     if (fuel_type == "1") {
//         mebleg = Number(quantity) * 0.8;
//         if (balance < mebleg){
//             return "Balansda mevacib azdir"
//         };
       
//         balance-=mebleg;
//       return "Ugurlu odenis\nBalans: " + balance;
//     } else if (fuel_type == "2") {
//         mebleg = Number(quantity) * 1.6;
//       if (balance < mebleg) {
//         return "Balansda mevacib azdir";
//       }
//       balance -= mebleg;
//       return "Ugurlu odenis\nBalans; " + balance;
//     } else if (fuel_type == "3") {
//         mebleg = Number(quantity) * 0.6;
//         if (balance < mebleg) {
//           return "Balansda mevacib azdir";
//         }
//         balance -= mebleg;
//         return "Ugurlu odenis\nBalans; " + balance;
  
//     }
//     else return "Yalnis secim";
// };

// alert(myfunc(balans,fuel_type, quantity));

// let eded = prompt("Ededi daxil edin: 1-5 arasinda ");


// switch (eded) {
//   case "1":
//     console.log("Eded 1-dir");
//     break;
//   case "2":
//     console.log("Eded 2-dir");
//     break;
//   case "3":
//     console.log("Eded 3-dir");
//     break;
//   case "4":
//     console.log("Eded 4-dir");
//     break;
//   case "5":
//     console.log("Eded 5-dir");
//     break;
//     default:
//         console.log("eded 1-5 arasinda deyil");
//         break;

// }



// let balance = 1000;

// let text = "1-Balansi gostermek\n2-Pul cekmek\n3-Pul yatirmaq\n4-Cixis\nSeciminizi edin:";

// let operation = prompt(text);

// let salam = 'salam'

// switch(operation){
//     case "1":
//         console.log(balance);
//         break;
//     case "2":
//         outcome = Number(prompt("cixarmaq istediyiniz meblegi daxil edin: "));
//         if (outcome < balance){
//             balance -= outcome;
//             console.log("Pulu cekdiniz, Balans: " + balance);
//         }
//         else console.log("Balansda kifayet qeder pul yoxdur");
//         break;
//     case "3":
//         income = Number(prompt("Medaxil etmek istediyiniz meblegi daxil edin"));
//         balance += income
//         console.log("Balansiniz artirildi, balans: ", balance);
//         break;
//     case "4":
//         break;
//     default:
//         console.log("Yalnis secim");
//         break;
// }
    

//Decimal to binary program
// 10 5 2 1

// decimalToBinary(58);

// function decimalToBinary(number){
//     let binary = "";
//     while(true){
//         binary += (number%2).toString();
//         number = Math.floor(number / 2);
//         if(number == 1){
//             break;
//         }
//     }
//     console.log(binary);
// }


// Binary to decimal

// let binary = "010"


// function binaryToDecimal(binary){

//     let toplam = 0;
//     let pow = 0;

//     for(i = binary.length-1; i>=0; i--){

//         toplam += Number(binary.charAt(i)) * Math.pow(2, pow);
//         pow++;

//     }
//     console.log(toplam)


// }

// binaryToDecimal(binary);



// sum of number's elements

// 123

// function sumElements(number){
//     mySum = 0;
//     number = String(number);
//     for(i=0; i<number.length; i++){

//         mySum += Number(number[i]);

//     }
//     return mySum
// }


// console.log(sumElements(123));


// Count of each alpha in word


// function counterAlpha(word){
//     let myList = [];
//     for(i=0;i<word.length;i++){
//         myList.append(word[i],word[i].count);
//     }
//     return myList
// }

// console.log(counterAlpha('salam'));



let numbers = [1,2,3,4,5,6,7,8,9]

// console.log(numbers[3])

// numbers[9] = 'Salam'
// console.log(numbers[numbers.length])


// numbers.forEach(function(num){
//     console.log(num);
// });



























