var clockID;
//var yourTimeZoneFrom = +1.00; //time zone value where you are at

var d = new Date();  
//get the timezone offset from local time in minutes
var tzDifference = yourTimeZoneFrom * 60 + d.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offset = tzDifference * 60 * 1000;

function UpdateClock() {
    var tDate = new Date(new Date().getTime()+offset);
    var year = tDate.getFullYear();
    var month = tDate.getMonth() + 1;
    dayOfClock = tDate.getDate();
    var in_hours = tDate.getHours()
    var in_minutes=tDate.getMinutes();
    var in_seconds= tDate.getSeconds();

    if(in_minutes < 10)
        in_minutes = '0'+in_minutes;
    if(in_seconds<10)   
        in_seconds = '0'+in_seconds;
    if(in_hours<10) 
        in_hours = '0'+in_hours;

   document.getElementById('clock').innerHTML = "" 
//   				   + year + "-"
//                   + month + "-"
//                   + day + " "                    
                   + in_hours + ":" 
                   + in_minutes + ":" 
                   + in_seconds;
   
   setToday(month);

}
function StartClock() {
   clockID = setInterval(UpdateClock, 500);
}

function KillClock() {
  clearTimeout(clockID);
}
window.onload=function() {
  StartClock();
  
}

function setToday(month){
   for(i=0;i<7;i++){
       var dayGet = $('#day'+(i+1)).text();            
       var monthGet = $("#month").text();
       if(dayOfClock == dayGet && numberToMonth(month) == monthGet){
           $("#back" + (i+1)).css("background-color", "darkblue");
       } else {
           $("#back" + (i+1)).css("background-color", "rgb(27, 128, 205)");
       }
   } 
}

function numberToMonth(number) {
    var month;

    switch (number) {
        case 1:
            month = "January";
            break;
        case 2:
            month = "February";
            break;
        case 3:
            month = "March";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "June";
            break;
        case 7:
            month = "July";
            break;
        case 8:
            month = "August";
            break;
        case 9:
            month = "September";
            break;
        case 10:
            month = "October";
            break;
        case 11:
            month = "November";
            break;
        case 12:
            month = "December";
            break;
    }

    return month;
}