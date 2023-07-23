class doviz{
    constructor(){
        this.url="https://api.freecurrencyapi.com/v1/latest?apikey=pWuLoufACP8hxdL5a8qyEr3CQLy7cuX5qE51F9PF&base_currency="
    }
    async exchange(miktar,birinciDoviz,ikinciDoviz){
        const response= await fetch(`${this.url}${birinciDoviz}`)
        console.log(response)
        const data= await response.json()
        const result=miktar* data.data[ikinciDoviz]

        return result
    }
}
