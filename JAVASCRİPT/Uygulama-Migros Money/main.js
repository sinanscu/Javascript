let mesaj = 
`Migros'a hoş geldiniz değerli Müşterimiz.
Migros Money Kartınız var mı ?
Evet ise-Tamam'a Basın
Hayır ise- İptal'e Basın
`
let urunler = [{urunIsmi: "tavuk",fiyat: 80},{urunIsmi:"Yumurta",fiyat:70},{urunIsmi:"yoğurt",fiyat:65}]
let kartVarMi=confirm(mesaj)
let odenecekTutar1
let odenecekTutar2;
if(kartVarMi){
    let isim = prompt("isminizi giriniz")
    let soyisim = prompt("soyisminizi giriniz")

    const musteri1= new musteri(isim,soyisim,kartVarMi,urunler)
    let odenecekTutar1=musteri1.hesapla()
    alert
    (` Sayın ${isim} ${soyisim} Ödeyeceğiniz tutar ${odenecekTutar1}
         
    `)
}
else{
    
    const musteri2= new musteri(null,null,kartVarMi,urunler)
    let odenecekTutar2= musteri2.hesapla()
    alert
    (` Ödeyeceğiniz tutar ${odenecekTutar2}
         
    `)
}