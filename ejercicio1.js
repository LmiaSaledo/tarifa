let tarifaPorHora;
let presupuestofijo =20000;
let HorasporDia =8;

function dayRate()
{
tarifaPorHora= document.getElementById("TarifaInput").value
let tarifaDiaria;

tarifaDiaria=(tarifaPorHora* HorasporDia)


alert(tarifaDiaria)

}
function daysInBudget()
{
    let diasdeTrabajo;
    tarifaPorHora= document.getElementById("TarifaInput").value
    
    let res1 =(tarifaPorHora * HorasporDia)
    diasdeTrabajo=Math.floor(presupuestofijo / res1)
   

    alert(diasdeTrabajo);
}
function discount()
{
    tarifaPorHora= document.getElementById("TarifaInput").value

    let tarifaDiaria= (tarifaPorHora *HorasporDia);
     
    let diasparatrabajar =230;
    let descuento=0.42;
    let tarifaDcondescuento= (tarifaDiaria* descuento);
    let diasrestantes =(diasparatrabajar % 22);
    let diasdescontados =(diasparatrabajar -diasrestantes);
    let final = diasdescontados * (tarifaDiaria-tarifaDcondescuento);
    console.log(final);


    
    alert(Math.round(final) )
}






























//const horas_Trabajadas_Del_Dia = 8;
//export function dayRate(ratePerHour) {
 // return  horas_Trabajadas_Del_Dia* ratePerHour
//}
//export function daysInBudget(budget, ratePerHour) {
 // return Math.floor(budget / dayRate(ratePerHour))
//}
//export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
 // let separateDays = numDays % horas_Trabajadas_Del_Dia
 // return Math.ceil(
   // dayRate(ratePerHour) * separateDays + 
   // dayRate(ratePerHour) * (numDays - separateDays) * (1.0 - discount))
//}