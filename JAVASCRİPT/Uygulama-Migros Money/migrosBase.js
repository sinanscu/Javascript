class migrosBase{
    indirimOrani = 20
    constructor( isim,soyisim,kartVarMi,urunler){
        this.isim = isim
        this.soyisim = soyisim
        this.kartVarMi = kartVarMi
        this.urunler = urunler
    }
    hesapla(){
        let odenecekTutar=0
        if(this.urunleriKontrolEt(this.urunler)){
           
            if(this.kartVarMi){         
                this.urunler.forEach((urun) => {
                    console.log(urun.fiyat)
                odenecekTutar+=(urun.fiyat*(100-this.indirimOrani)/100)
                
             });

            }
            else{          
                this.urunler.forEach((urun) => {
                odenecekTutar+=urun.fiyat
             });}

            
  
        }
        else{
            alert("en az bir ürün eklemelisiniz")
        }
        return odenecekTutar
        }

        urunleriKontrolEt(urunler){
        if (urunler!=null) {
            
            return true
            
        }
        else{
            console.log("false")
            return false
        }}
        
   
    
}
