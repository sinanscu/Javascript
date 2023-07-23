
// 6! faktöriyel = 6.5.4.3.2.1= 720


let sayi=Number(prompt("Bir sayi giriniz biz de faktoriyelini söyleyelim"))
let carpim=1
for(i=1;i<=sayi;i++){
    // DAHA KOLAY OLMASI İÇİN AŞAĞIDAKİ GİBİ YAPTIM carpim=carpim*i
    carpim*=i
}
alert("Girdiğiniz Sayının Faktöriyeli :"+carpim)