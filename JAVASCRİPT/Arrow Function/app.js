const name=(firstName,lastName)=>{
    console.log("Merhaba",firstName,lastName)
}
name("Sinan","Sucu")

//Eğer tek satırdan oluşan bir kod yazacaksan süslü paranteze gerek yok ve yanında yazabilirsin//
//Mesela Yukarıdaki kod Böyle de yazılabilirdi

const İsim=(firstName,lastName)=>console.log("Merhaba",firstName,lastName)
name("Mehmet","Sucu")

//Eğer tek bir geri dönüş istiyorsan 'name(FirstName,LastName)' gibi değilse oval paranteze de gerek yok
const hitap=firstname=>console.log("Merhaba",firstname)
hitap("Sinan")

//Eğer Return yapacaksan ve tek satırlık bir işse return yazmana gerek yok
// const kupAl = x => return x*x*x
const kupAl = x => x*x*x
console.log("cevap=",kupAl(3))