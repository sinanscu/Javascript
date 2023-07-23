let yeniSatir= "\r\n"
let tümBakiye= 5000
let metin = "Para Çekmek İçin 1 'e basınız "
+yeniSatir+"Para Yatırmak için 2' ye basınız"+
yeniSatir+"Bakiyenizi Görüntülemek için 3'e basınız."+ yeniSatir


let kullaniciGirisi= Number(prompt(metin))

switch(kullaniciGirisi) {
    case 1:
        let cekilecekTutar= Number(prompt("Lütfen çekmek istediginiz tutarı giriniz"));
        if(cekilecekTutar>tümBakiye){
              alert("Çekmek İstediğiniz tutar Bakiyenizden büyük olamaz")
        }
        else{
            let kalanpara = tümBakiye - cekilecekTutar;
            alert("Teşekkürler işleminiz bitmiştir kalan miktarınız:"+kalanpara);}
      break;
    case 2:
        let girilenMiktar= Number(prompt("Lütfen yatırmak istediğiniz miktarı giriniz"))
         let yatirilanPara= tümBakiye+girilenMiktar
         alert("İşleminiz gerçekleşmiştir güncel bakiye:"+ yatirilanPara)
         break;
    
    case 3:
    alert("bakiyeniz:"+tümBakiye)
    break;

    default:
        alert("Lütfen geçerli bir sayı giriniz.")
        break;

}