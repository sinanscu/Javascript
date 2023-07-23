let sayılar=[5,4,8,3]

let Ekleme=(a,b,c,d)=>{
    console.log(a,b,c,d)
}

//Eski Yöntem
// Ekleme(sayılar[0],sayılar[1],sayılar[2],sayılar[3])

//Yeni Yöntem
Ekleme(...sayılar)


let sayı = [6,7,8,9,0,1,2]
let [a,b,...gerisi]=sayı
console.log(a,b,gerisi)