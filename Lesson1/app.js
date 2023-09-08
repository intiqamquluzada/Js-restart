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


let ceki = prompt("Cekinizi daxil edin: ");
let boy = prompt("Boyunuzu daxil edin: ");

let result = ceki / (boy*2);
function myfunc(netice){
  if (netice < 18.5) {
    return "Ideal cekinin altinda";
  }
  else if (24.9 > netice > 18.5){
    return "Ideal ceki";

  }
  else if (29.9 > netice > 25){
    return "Ideal cekinin ustunde"

  }
  else if (39.9 > netice > 30){
    return "Obez";

  }
  return "Morbid Obez";
};


console.log(myfunc(result));


















