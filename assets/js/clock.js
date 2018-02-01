var clockID;

function UpdateClock() {
  var formatter;
  var day;
  var month;
  var options;
  var getDay;
  var getMonth;
  var hourFormat = !document.getElementById("hourFormat").checked;

  if(window.timezone) {
    options = {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12 : hourFormat
    };

    getDay = {
      timeZone : Intl.DateTimeFormat().resolvedOptions().timeZone,
      day: 'numeric'
    };

    getMonth = {
      timeZone : Intl.DateTimeFormat().resolvedOptions().timeZone,
      month: 'numeric'
    };

    formatter = new Intl.DateTimeFormat([],options);
    document.getElementById("clock").innerHTML = formatter.format(new Date()) + " " + options.timeZone;
  } else {
    if(window.japSet){
      options = {
        timeZone: 'Asia/Tokyo',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: hourFormat
      };

      getDay = {
        timeZone : 'Asia/Tokyo',
        day: 'numeric'
      };

      getMonth = {
        timeZone : 'Asia/Tokyo',
        month: 'numeric'
      };

      formatter = new Intl.DateTimeFormat([], options);

      document.getElementById("clock").innerHTML = formatter.format(new Date()) + " JST";
    } else {
      options = {
        timeZone: 'Pacific/Pitcairn',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: hourFormat
      };

      getDay = {
        timeZone : 'Pacific/Pitcairn',
        day: 'numeric'
      };

      getMonth = {
        timeZone : 'Pacific/Pitcairn',
        month: 'numeric'
      };

      formatter = new Intl.DateTimeFormat([], options);

      document.getElementById("clock").innerHTML = formatter.format(new Date()) + " PST";
    }
  }

  day = new Intl.DateTimeFormat([],getDay).format();
  month = new Intl.DateTimeFormat([],getMonth).format();
  setToday(parseInt(month),parseInt(day));

}
function StartClock() {
   clockID = setInterval(UpdateClock, 500);
}


window.onload=function() {
  StartClock();
};

function setToday(month,day){
   for(var i=0;i<7;i++){
       var dayGet = $('#day'+(i+1)).text();            
       var monthGet = $("#month").text();
       if(day == dayGet && (month == monthToNumber(monthGet) || month == (monthToNumber(monthGet)+1)%12)){
           $("#back" + (i+1)).css("background-color", "darkblue");
       } else {
           $("#back" + (i+1)).css("background-color", "rgb(27, 128, 205)");
       }
   } 
}

function monthToNumber(month){
  try{
    return new Date(month + " 1, 2012").getMonth()+1;
  } catch(e) {
    return monthToNumberB(month);
  }

}

function  monthToNumberB(month) {
  switch (month){
    case "January":
      return 1;
    case "February":
      return 2;
    case "March":
      return 3;
    case "April":
      return 4;
    case "May":
      return 5;
    case "June":
      return 6;
    case "July":
      return 7;
    case "August":
      return 8;
    case "September":
      return 9;
    case "October":
      return 10;
    case "November":
      return 11;
    case "December":
      return 12;
  }

}

function changeButton() {
  if(japSet){
    if(timezone){
      document.getElementById("changeTimeZone").value = "Switch to " + Intl.DateTimeFormat().resolvedOptions().timeZone + " timezone";
      timezone = false;
    } else {
      document.getElementById("changeTimeZone").value = "Switch to JST";
      timezone = true;
    }
  }
}