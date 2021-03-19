/** devuelve el dia de la semana(String), mes(String) y día del mes  */
function setTime(){
    let arrayDaysWeek = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"];
    let arrayMonths = ["En", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    let date = new Date();
    let month = arrayMonths[date.getMonth()];
    let dayWeek = arrayDaysWeek[date.getDay()];
    let numberDay = date.getUTCDate();   
    return [dayWeek,month,numberDay]     
        
}

export default setTime;
    