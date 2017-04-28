/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(window).bind("load", function () {
    setMargin();
});

function showIcon(){    
    //$(window).resize(function(){
        if ($(this).width() <= 768) {            
            $('.littleSee').show();
            $('.bigSee').hide();
        } else {            
            $('.littleSee').hide();
            $('.bigSee').show();
        }
    //});
}

$(document).ready(function () {

    showIcon();
    setMargin();
    firstLoad();

    $('#showRaid').click(function () {
        showRaid(true);
    });

    $('#showColiseum').click(function () {
        showColo(true);
    });

    $('#showFortnights').click(function () {
        showFN(true);
    });        
    
    $('#showSpecials').click(function () {
        showSpecial(true);
    });     
});

function showRaid(flag) {
    
    if ($("#showRaid:checked").length > 0) {
        var raidList = (function () {
            $.ajax({
                'async': false,
                'global': false,
                'url': "assets/json/raid.json",
                'dataType': "json",
                'success': function (data) {
                    json = data;
                }
            });
            return json;
        })();
        ;

        var start = $("#day1").text();
        var month = $("#month").text();

        $.getJSON("assets/json/weeksJap.json", function (json) {
            var weeks = json.weeks;
            var prev = start;
            var cont;

            for (i = 0; i < weeks.length; i++) {
                if (weeks[i].month == month && weeks[i].starting == start) {
                    cont = i;
                }
            }

            for (i = 0; i < 7; i++) {
                var raid = json.weeks[cont].program[i].raid;
                console.log(raid);
                if (raid[0] != "none") {
                    for (j = 0; j < raid.length; j++) {
                        var character = raid[j];                        
                        console.log(character);
                        var tiny = raidList[character].tiny;
                        var foo = 'raidModal(\'' + character + '\')';
                        $("#list" + (i + 1) + " .raid").append("<a href='#viewRaidModal' onclick='raidModal(\"" + character + "\")' data-toggle='modal'><div style='background-image: url(" + tiny + ")' class='image-div inline'></div></a>");
                    }
                }
            }
        });

    }else {
        emptyRaid();
    } 
}

function showColo(flag) {
    if ($("#showColiseum:checked").length > 0) {

        var coloList = (function () {
            $.ajax({
                'async': false,
                'global': false,
                'url': "assets/json/colo.json",
                'dataType': "json",
                'success': function (data) {
                    json = data;
                }
            });
            return json;
        })();
        ;


        var start = $("#day1").text();
        var month = $("#month").text();

        $.getJSON("assets/json/weeksJap.json", function (json) {
            var weeks = json.weeks;
            var prev = start;
            var cont;

            for (i = 0; i < weeks.length; i++) {
                if (weeks[i].month == month && weeks[i].starting == start) {
                    cont = i;
                }
            }

            for (i = 0; i < 7; i++) {
                var colo = json.weeks[cont].program[i].colo;
                if (colo[0] != "none") {
                    for (j = 0; j < colo.length; j++) {                        
                        var character = colo[j];                       
                        var tiny = coloList[character].tiny;                        
                        var foo = 'coloModal(\'' + character + '\')';

                        $("#list" + (i + 1) + " .colo").append("<a href='#viewColoModal' onclick='coloModal(\"" + character + "\")' data-toggle='modal'><div style='background-image: url(" + tiny + ")' class='image-div inline'></div></a>");
                    }
                }
            }
        });

    }else {
        emptyColo();
    }
}

function showFN(flag) {

    if ($("#showFortnights:checked").length > 0) {

        var fnList = (function () {
            $.ajax({
                'async': false,
                'global': false,
                'url': "assets/json/fn.json",
                'dataType': "json",
                'success': function (data) {
                    json = data;
                }
            });
            return json;
        })();
        ;

        var start = $("#day1").text();
        var month = $("#month").text();

        $.getJSON("assets/json/weeksJap.json", function (json) {
            var weeks = json.weeks;
            var prev = start;
            var cont;

            for (i = 0; i < weeks.length; i++) {
                if (weeks[i].month == month && weeks[i].starting == start) {
                    cont = i;
                }
            }

            for (i = 0; i < 7; i++) {                
                var fn = weeks[cont].program[i].fn;
                if (fn[0] != "none") {
                    for (j = 0; j < fn.length; j++) {
                        var character = fn[j];
                        var tiny = fnList[character].tiny;
                        var foo = 'fnModal(\'' + character + '\')';

                        $("#list" + (i + 1) + " .fn").append("<a href='#viewFnModal' onclick='fnModal(\"" + character + "\")' data-toggle='modal'><div style='background-image: url(" + tiny + ")' class='image-div inline'></div></a>");

                    }
                }
            }
        });

    }else {
        emptyFn();
    }
}

function showSpecial(flag){
    if ($("#showSpecials:checked").length > 0) {

        var specialList = (function () {
            $.ajax({
                'async': false,
                'global': false,
                'url': "assets/json/special.json",
                'dataType': "json",
                'success': function (data) {
                    json = data;
                }
            });
            return json;
        })();
        ;

        var start = $("#day1").text();
        var month = $("#month").text();

        $.getJSON("assets/json/weeksJap.json", function (json) {
            var weeks = json.weeks;
            var prev = start;
            var cont;

            for (i = 0; i < weeks.length; i++) {
                if (weeks[i].month == month && weeks[i].starting == start) {
                    cont = i;
                }
            }

            for (i = 0; i < 7; i++) {
                var special = json.weeks[cont].program[i].special;
                if (special[0] != "none") {
                    for (j = 0; j < special.length; j++) {
                        var character = special[j];
                        var tiny = specialList[character].tiny;
                        var foo = 'fnModal(\'' + character + '\')';

                        if (character == "Cotton" || character == "CottonEgg") {
                            $("#list" + (i + 1) + " .special").append("<a href='#viewSpecialModal' onclick='specialModal(\"" + character + "\")' data-toggle='modal'><div style='background-image: url(" + tiny + ")' class='image-div inline'></div></a>");
                        } else {                            
                            if (character == "LvlUp") {
                                if ($(window).width() > 768) {
                                    $("#list" + (i + 1) + " .special").append("<div class='inline' style='padding-top: 16px; height: 70px; width: 95px'><div style='background-image: url(" + tiny + ")' class='special-img inline'></div></div>");
                                } else {
                                    $("#special" + (i + 1)).addClass('special-img');
                                }
                            } 
                            if (character == "Snail" || character == "Sugofest") {
                                $("#list" + (i + 1) + " .special").append("<div style='background-image: url(" + tiny + ")' class='image-div inline'></div>");
                            }
                        }
                    }
                }
            }
        });

    }else {
        emptySpecial();
    }   
}

function emptyAll() {
    emptyRaid();
    emptyFn();
    emptyColo();
    emptySpecial();
    emptyDays();
}

function emptyRaid() {    
    for (i = 0; i < 7; i++) {
        $("#list" + (i + 1) + " .raid").empty();        
    }
}

function emptyFn() {
    for (i = 0; i < 7; i++) {
        $("#list" + (i + 1) + " .fn").empty();
    }
}

function emptyColo() {
    for (i = 0; i < 7; i++) {
        $("#list" + (i + 1) + " .colo").empty();
    }
}

function emptySpecial() {
    for (i = 0; i < 7; i++) {
        $("#list" + (i + 1) + " .special").empty();
    }
}

function emptyDays() {
    for (i = 0; i < 7; i++) {
        $("#day" + (i + 1)).empty();
    }
}

function monthDays(month, day) {
    var newDay;
    var max;
    var parseDay = parseInt(day);

    switch (month) {
        case 'January':
            max = 31;
        case 'February':
            max = 28;
        case 'March':
            max = 31;
        case 'April':
            max = 30;
        case 'May':
            max = 31;
        case 'June':
            max = 30;
        case 'July':
            max = 31;
        case 'August':
            max = 31;
        case 'September':
            max = 30;
        case 'October':
            max = 31;
        case 'November':
            max = 30;
        case 'December':
            max = 31;
    }

    if (day + 1 > max) {
        newDay = 1;        
    } else {
        newDay = day + 1;
    }
    
    if(month == "April"){
        if(day == 30){
            newDay = 1;
        }
    }

    return newDay;
}

function raidModal(character) {

    var raidList = (function () {
        $.ajax({
            'async': false,
            'global': false,
            'url': "assets/json/raid.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();
    ;

    var charJs = raidList[character];
    var large = "<a href='" + charJs.linkDB + "' target='_blank'><img src='" + charJs.large + "' class='img-responsive img-centered' alt=''></a>"
    var last = raidList[character].lastTimes;

    $("#raidBody h2").empty().append(character);
    $("#raidImage").empty().append(large);
    $("#raidLast").empty();

    for (i = 0; i < last.length; i++) {
        $("#raidLast").append("<li>" + last[i] + "</li>");
    }
}

function coloModal(character) {

    var coloList = (function () {
        $.ajax({
            'async': false,
            'global': false,
            'url': "assets/json/colo.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();
    ;

    var charJs = coloList[character];
    var large = "<a href='" + charJs.linkDB + "' target='_blank'><img src='" + charJs.large + "' class='img-responsive img-centered' alt=''></a>"
    var last = coloList[character].lastTimes;

    $("#coloBody h2").empty().append(character);
    $("#coloImage").empty().append(large);
    $("#coloLast").empty();

    for (i = 0; i < last.length; i++) {
        $("#coloLast").append("<li>" + last[i] + "</li>");
    }
}

function fnModal(character) {

    var fnList = (function () {
        $.ajax({
            'async': false,
            'global': false,
            'url': "assets/json/fn.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();
    ;

    var dropList = (function () {
        $.ajax({
            'async': false,
            'global': false,
            'url': "assets/json/drops.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();
    ;

    var bookList = (function () {
        $.ajax({
            'async': false,
            'global': false,
            'url': "assets/json/books.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();
    ;

    var charJs = fnList[character];
    var title = charJs.title;
    var large = "<img src='" + charJs.large + "' class='img-responsive img-centered' alt=''>";
    var last = fnList[character].lastTimes;
    var drops = fnList[character].drops;
    var books;
   
    if(fnList[character].hasOwnProperty('books')){
        books = fnList[character].books;
    } else {
        books = fnList[character].japan_books;
    }

    $("#fnBody h2").empty().append(title);
    $("#fnImage").empty().append(large);
    $("#fnLast").empty();
    $("#fnDrops").empty();
    $("#fnBooks").empty();
    $("#fnCondition").empty();
    
    console.log(fnList[character].condition);
    
    if(fnList[character].hasOwnProperty('condition')){
        $("#conditions").css('display','block');
        $("#fnCondition").append(fnList[character].condition);
    } else {
        $("#conditions").css('display','none');
    }    

    for (i = 0; i < last.length; i++) {
        $("#fnLast").append("<li>" + last[i] + "</li>");
    }

    for (i = 0; i < drops.length; i++) {        
        var drop = drops[i];
        var toDrop = dropList[drops[i]];
        if(toDrop.hasOwnProperty('missing')){
            var tiny = "https://onepiece-treasurecruise.com/wp-content/themes/onepiece-treasurecruise/images/noimage.png";
        } else {
            var tiny = "https://onepiece-treasurecruise.com/wp-content/uploads/" + imageUrl(toDrop.id);//toDrop.image;        
        }
        var url = "http://optc-db.github.io/characters/#/view/" + toDrop.id;
        $("#fnDrops").append("<a href='" + url + "' target='_blank'><div style='background-image: url(" + tiny + ")' class='image-div inline'></div></a>");
    }

    for (i = 0; i < books.length; i++) {
        var tiny = "https://onepiece-treasurecruise.com/wp-content/uploads/" + imageUrl(bookList[books[i]].id);//bookList[books[i]].image;
        var url = "http://optc-db.github.io/characters/#/view/" + bookList[books[i]].id;
        $("#fnBooks").append("<a href='" + url + "' target='_blank'><div style='background-image: url(" + tiny + ")' class='image-div inline'></div></a>");
    }
}

function specialModal(character) {

    var specialList = (function () {
        $.ajax({
            'async': false,
            'global': false,
            'url': "assets/json/special.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();
    ;

    var dropList = (function () {
        $.ajax({
            'async': false,
            'global': false,
            'url': "assets/json/drops.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();
    ;

    var charJs = specialList[character];
    var title = charJs.title;
    var large = "<img src='" + charJs.large + "' class='img-responsive img-centered' alt=''>";
    //var last = fnList[character].lastTimes;
    var drops = specialList[character].drops;
    //var books = fnList[character].books;

    $("#specialBody h2").empty().append(title);
    $("#specialImage").empty().append(large);
    //$("#specialLast").empty();
    $("#specialDrops").empty();    

    /*for (i = 0; i < last.length; i++) {
        $("#fnLast").append("<li>" + last[i] + "</li>");
    }*/

    for (i = 0; i < drops.length; i++) {
        var drop = drops[i];
        var toDrop = dropList[drops[i]];
        var tiny = toDrop.image//"https://onepiece-treasurecruise.com/wp-content/uploads/" + imageUrl(toDrop.id);//toDrop.image;        
        //var url = "http://optc-db.github.io/characters/#/view/" + toDrop.id;
        $("#specialDrops").append("<div style='background-image: url(" + tiny + ")' class='image-div inline'></div>");
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

function nextWeek(day, newMonth) {

    // Day from the agenda has to start
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    //var start = (new Date(today.setDate(today.getDate()-today.getDay()))).getDate()+1;
    var start = day;
    var lastMonth = (new Date(today.setDate(today.getDate() - today.getDay()))).getMonth() + 1;
    var month = newMonth;

    $.getJSON("assets/json/weeksJap.json", function (json) {
        var weeks = json.weeks;
//        var start = json.weeks[0].starting;        
        var prev = day;
        var previousWeek;
        var previousMonth;
        var nextWeek;
        var nextMonth;
        var cont;

        for (i = 0; i < weeks.length; i++) {

            if (weeks[i].month == month && weeks[i].starting == start) {
                cont = i;
                try {
                    nextWeek = weeks[i + 1].starting;
                    nextMonth = weeks[i + 1].month;
                    //$(".next").empty().append("<a href='#' class='arrow-right' onclick='nextWeek(" + nextWeek + ",\"" + nextMonth + "\" )'></a>");
                    $(".next").attr("onclick", "nextWeek(" + nextWeek + ",\"" + nextMonth + "\" )");
                    $(".next").attr("href", "#");
                } catch (e) {
                    $(".next").attr("href", "#errorModal");
                    $(".next").attr("data-toggle", "modal");                    
                    $("#titleError").empty().append("There is no other content announced yet!");
                    $("#dataError").empty().append("Please be patient, we will update as soon as possible!");
                }
                try {
                    previousWeek = weeks[i - 1].starting;
                    previousMonth = weeks[i - 1].month;
                    //$(".prev").empty().append("<a href='#' onclick='prevWeek(" + previousWeek + ",\"" + previousMonth + "\" )'>Previous week</a>");
                    $(".prev").attr("onclick","prevWeek(" + previousWeek + ",\"" + previousMonth + "\" )");
                    $(".prev").attr("href", "#");                    
                } catch (e) {
                    $(".prev").attr("href", "#errorModal");
                    $(".prev").attr("data-toggle", "modal");
                    $("#titleError").empty().append("There is no other content announced yet!");
                    $("#dataError").empty().append("You reached the end! Go to another side, but not dark please!");
                }
                break;
            }
        }

        emptyAll();
        
        $("#month").empty().append(month);
        $("#day1").empty().append(day);

        showFN(false);            
        showColo(false);
        showRaid(false);
        showSpecial(false);    

        for (i = 0; i < 7; i++) {
            if (i != 0) {                
                prev = monthDays(month, prev);                
                $("#day" + (i + 1)).append(prev);
            }
        }
    });
}

function prevWeek(day, newMonth) {

    // Day from the agenda has to start
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    //var start = (new Date(today.setDate(today.getDate()-today.getDay()))).getDate()+1;
    var start = day;
    var lastMonth = (new Date(today.setDate(today.getDate() - today.getDay()))).getMonth() + 1;
    var month = newMonth;

    $.getJSON("assets/json/weeksJap.json", function (json) {
        var weeks = json.weeks;
//        var start = json.weeks[0].starting;        
        var prev = day;
        var previousWeek;
        var previousMonth;
        var nextWeek;
        var nextMonth;
        var cont;

        for (i = 0; i < weeks.length; i++) {

            if (weeks[i].month == month && weeks[i].starting == start) {
                cont = i;
                try {
                    nextWeek = weeks[i + 1].starting;
                    nextMonth = weeks[i + 1].month;
                    //$(".next").empty().append("<a href='#' class='arrow-right' onclick='nextWeek(" + nextWeek + ",\"" + nextMonth + "\" )'></a>");
                    $(".next").attr("onclick", "nextWeek(" + nextWeek + ",\"" + nextMonth + "\" )");
                    $(".next").attr("href", "#");
                } catch (e) {
                    $(".next").attr("href", "#errorModal");
                    $(".next").attr("data-toggle", "modal");                    
                    $("#titleError").empty().append("There is no other content announced yet!");
                    $("#dataError").empty().append("Please be patient, we will update as soon as possible!");
                }
                try {
                    previousWeek = weeks[i - 1].starting;
                    previousMonth = weeks[i - 1].month;
                    //$(".prev").empty().append("<a href='#' onclick='prevWeek(" + previousWeek + ",\"" + previousMonth + "\" )'>Previous week</a>");
                    $(".prev").attr("onclick","prevWeek(" + previousWeek + ",\"" + previousMonth + "\" )");
                    $(".prev").attr("href", "#");                    
                } catch (e) {
                    $(".prev").attr("href", "#errorModal");
                    $(".prev").attr("data-toggle", "modal");
                    $("#titleError").empty().append("There is no other content announced yet!");
                    $("#dataError").empty().append("You reached the end! Go to another side, but not dark please!");
                }
                break;
            }
        }

        emptyAll();

        $("#month").empty().append(month);
        $("#day1").empty().append(day);

        showFN(false);             
        showColo(false);
        showRaid(false);
        showSpecial(false);   

        for (i = 0; i < 7; i++) {
            // Gestione giorni
            if (i != 0) {
                prev = monthDays(month, prev);
                $("#day" + (i + 1)).append(prev);
            }
        }
    });
}

function imageUrl(id) {
    var conc;

    switch (id.length) {
        case 1:
            conc = "f000" + id + ".png";
            break;
        case 2:
            conc = "f00" + id + ".png";
            break;
        case 3:
            conc = "f0" + id + ".png";
            break;
        case 4:
            conc = "f" + id + ".png";
            break;
    }

    return conc;
}

function setMargin() {
    var width = $('.justified').width();
    $('.justified').css('margin-left', '-' + (width / 2) + 'px');
}

function firstLoad() {
    // Day from the agenda has to start
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var start = (new Date(today.setDate(today.getDate() - today.getDay()))).getDate();
    var lastMonth = (new Date(today.setDate(today.getDate() - today.getDay()))).getMonth() + 1;
    var month = numberToMonth(lastMonth);

    $.getJSON("assets/json/weeksJap.json", function (json) {
        var weeks = json.weeks;
        var prev = start;
        var previousWeek;
        var previousMonth;
        var nextWeek;
        var nextMonth;
        var cont;

        for (i = 0; i < weeks.length; i++) {

            if (weeks[i].month == month && weeks[i].starting == start) {
                cont = i;
                try {
                    nextWeek = weeks[i + 1].starting;
                    nextMonth = weeks[i + 1].month;
                    //$(".next").empty().append("<a href='#' class='arrow-right' onclick='nextWeek(" + nextWeek + ",\"" + nextMonth + "\" )'></a>");
                    $(".next").attr("onclick", "nextWeek(" + nextWeek + ",\"" + nextMonth + "\" )");
                    $(".next").attr("href", "#");
                } catch (e) {
                    $(".next").attr("href", "#errorModal");
                    $(".next").attr("data-toggle", "modal");                    
                    $("#titleError").empty().append("There is no other content announced yet!");
                    $("#dataError").empty().append("Please be patient, we will update as soon as possible!");
                }
                try {
                    previousWeek = weeks[i - 1].starting;
                    previousMonth = weeks[i - 1].month;
                    //$(".prev").empty().append("<a href='#' onclick='prevWeek(" + previousWeek + ",\"" + previousMonth + "\" )'>Previous week</a>");
                    $(".prev").attr("onclick","prevWeek(" + previousWeek + ",\"" + previousMonth + "\" )");
                    $(".prev").attr("href", "#");
                } catch (e) {
                    $(".prev").attr("href", "#errorModal");
                    $(".prev").attr("data-toggle", "modal");
                    $("#titleError").empty().append("There is no other content announced yet!");
                    $("#dataError").empty().append("You reached the end! Go to another side, but not dark please!");
                }
                break;
            }
        }

        $("#month").append(month);
        $("#day1").append(start);

        showFN(false);             
        showColo(false);
        showRaid(false);               
        showSpecial(false);   

        for (i = 0; i < 7; i++) {
            // Gestione giorni
            if (i != 0) {
                prev = monthDays(month, prev);
                $("#day" + (i + 1)).append(prev);
            }

        }

    });
}