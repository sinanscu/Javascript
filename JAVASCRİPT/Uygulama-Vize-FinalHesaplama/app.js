// let not = 90 ;
 
// if(not>60) {
//     console.log("başarılar, geçtiniz notunuz:"+ not);

// }
// else{
//     console.log("üzgünüz gecemediniz notunuz:"+ not)
// }

// let yas =  Number(prompt("yasiniz :" ));
// let para = Number(prompt ("butceniz :"));

//     if(yas>=20 && para>=500) {
//         alert("katılabilirsiniz")
//     } 
//     else{
//         alert("katılamazsınız")
//     }
 
let vize1 = Number(prompt("vize1 notunuzu giriniz"));
let vize2 = Number(prompt("vize2 notunuzu giriniz"));

let final = Number(prompt("final notunuzu giriniz"));

let ortalama = (vize1*0,3) + (vize2*0,3) + (final*0,4);

if(ortalama>=70){
alert("geçtiniz");
console.log("gectiniz");
}
else{
    alert ("kaldınız");
    console.log("kaldınız");
}
