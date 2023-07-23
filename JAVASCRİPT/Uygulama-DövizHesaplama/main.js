const amountInput=document.querySelector("#amount")
const firstOption=document.querySelector("#firstCurrencyOption")
const secondOption=document.querySelector("#secondCurrencyOption")
const resaultInput=document.querySelector("#resault")

const dovizz= new doviz()
runEvents()

function runEvents(){
    amountInput.addEventListener("input",exchange)
}

function exchange(){
    // alert("çalıştı")
    const amount=Number(amountInput.value.trim())

    const firstOptionValue=firstOption.options[firstOption.selectedIndex].textContent
    const secondOptionValue=secondOption.options[secondOption.selectedIndex].textContent
   dovizz.exchange(amount,firstOptionValue,secondOptionValue)
   .then((resault)=>{
    console.log(resault)
    resaultInput.value=resault
   })
}