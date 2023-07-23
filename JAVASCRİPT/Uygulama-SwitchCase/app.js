let yeniSatir= "\r\n"
let metin= "Kemal Kılıçdaroğlu'na oy vermek için 1'e basınız"+yeniSatir+
"Recep Tayyip Erdoğan'a oy vermek için 2'ye basınız"+yeniSatir+
"Muharrem İnce'ye oy vermek için 3'e basınız"+yeniSatir+
"Sinan Oğan'a oy vermek için 4'e basınız"
let secim=Number(prompt(metin))

switch(secim){
case 1:
    alert("Kemal Kılıçdaroğluna oy verdiniz")
    break;
case 2:
    alert("Recep Tayyip Erdoğan'a oy verdiniz")
    break;
case 3:
    alert("Muharrem İnce'ye oy verdiniz")
    break;
case 4:
    alert("Sinan Oğan'a oy verdiniz")
    break;
default:
    alert("Oy kullanamıyorsunuz")
    break;
}