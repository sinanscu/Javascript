let isimler=["Sinan","Mukaddes","Kübra","Yıldız"]


//İsimler'in index numarasını verir, eğer isimler[isim]yazarsam isiminci indexindeki değeri de verir.
for(isim in isimler){
    console.log(isim,isimler[isim])
}

//İsimler'in değerini verir, eğer İndexOf() yazarsam index numarasını da verir.

for(name of isimler){
    console.log(name,isimler.indexOf(name))
}