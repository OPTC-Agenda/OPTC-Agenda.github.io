/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(window).bind("load", function () {
    setMargin();
});

function showIcon() {
//    $(window).resize(function(){
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

        $.getJSON("assets/json/weeks.json", function (json) {
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
                console.log(raidList);
                if (raid[0] != "none") {
                    for (j = 0; j < raid.length; j++) {
                        var character = raid[j];
                        var tiny = raidList[character].tiny;
                        var foo = 'raidModal(\'' + character + '\')';
                        $("#list" + (i + 1) + " .raid").append("<a href='#viewRaidModal' onclick='raidModal(\"" + character + "\")' data-toggle='modal'><div style='background-image: url(" + tiny + ")' class='image-div inline'></div></a>");
                    }
                }
            }
        });

    } else {
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

        $.getJSON("assets/json/weeks.json", function (json) {
            var weeks = json.weeks;
            var prev = start;
            var cont;

            for (i = 0; i < weeks.length; i++) {
                if (weeks[i].month == month && weeks[i].starting == start) {
                    cont = i;
                    break;
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

    } else {
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

        $.getJSON("assets/json/weeks.json", function (json) {
            var weeks = json.weeks;
            var prev = start;
            var cont;

            for (i = 0; i < weeks.length; i++) {
                if (weeks[i].month == month && weeks[i].starting == start) {
                    cont = i;
                }
            }

            for (i = 0; i < 7; i++) {
                var fn = json.weeks[cont].program[i].fn;
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

    } else {
        emptyFn();
    }
}

function showSpecial(flag) {
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

        $.getJSON("assets/json/weeks.json", function (json) {
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

                        if (character == "Cotton" || character == "CottonEgg" || character.includes("Hime")
                            || character == "RaySocket" || character == "SugoIsland" || character.includes("Summer") || character == "SanjiLobster") {
                            if (timezone) {
                                $("#list" + (i) + " .special").append("<a href='#viewSpecialModal' onclick='specialModal(\"" + character + "\")' data-toggle='modal'><div style='background-image: url(" + tiny + ")' class='image-div inline'></div></a>");
                            } else {
                                $("#list" + (i + 1) + " .special").append("<a href='#viewSpecialModal' onclick='specialModal(\"" + character + "\")' data-toggle='modal'><div style='background-image: url(" + tiny + ")' class='image-div inline'></div></a>");
                            }
                        } else {
                            if (character == "LvlUp") {
                                if ($(window).width() > 768) {
                                    if (timezone) {
                                        $("#list" + (i) + " .special").append("<div class='inline' style='padding-top: 16px; height: 70px; width: 95px'><div style='background-image: url(" + tiny + "); width: 100px;' class='special-img inline'></div></div>");
                                    } else {
                                        $("#list" + (i+1) + " .special").append("<div class='inline' style='padding-top: 16px; height: 70px; width: 95px'><div style='background-image: url(" + tiny + "); width: 100px;' class='special-img inline'></div></div>");
                                    }
                                } else {
                                    if (timezone) {
                                        $("#special" + (i)).addClass('special-img');
                                        $("#special" + (i)).addClass('skillup-x2');
                                    } else {
                                        $("#special" + (i + 1)).addClass('special-img');
                                        $("#special" + (i + 1)).addClass('skillup-x2');
                                    }
                                }
                            }
                            if (character == "Booster" || character == "Evolver" || character == "Snail" || character == "Sugofest"
                                || character == "DoffyShip" || character == "Rayleigh" || character == "FreePull") {
                                $("#list" + (i + 1) + " .special").append("<div style='background-image: url(" + tiny + ")' class='image-div inline'></div>");
                            }
                            
                            if (character == "Ranking"){
                                $("#list" + (i + 1) + " .special").append("<div style='background-image: url(" + tiny + "); max-width: 100px' class='image-div inline'></div>");
                            }
                            
                            if(character == "ColaCavern") {
                                if (timezone) {
                                    $("#list" + (i) + " .special").append("<div style='background-image: url(" + tiny + ")' class='image-div inline'></div>");
                                } else {
                                    $("#list" + (i + 1) + " .special").append("<div style='background-image: url(" + tiny + ")' class='image-div inline'></div>");
                                }
                            }
                            
                        }
                    }
                }
            }
        });

    } else {
        emptySpecial();
    }
}

function emptyAll() {
    emptyRaid();
    emptyFn();
    emptyColo();
    emptySpecial();
    emptyDays();
    emptySpecialLvlUp();
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

function emptySpecialLvlUp() {
    for (i = 0; i < 7; i++) {
        $("#special" + (i + 1)).removeClass('special-img');
        $("#special" + (i + 1)).removeClass('skillup-x3');
        $("#special" + (i + 1)).removeClass('skillup-x2');
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

    if (month == "April" || month == "June" || month == "September" || month == "November") {
        if (day == 30) {
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
    var large;
    var last = raidList[character].lastTimes;

    $("#raidDropsImg").empty();
    $("#raidLast").empty();

    if (character == "BusterCall" || character == "FakeMugiwara") {
        $("#raidDrops").css('display', 'block');
        large = "<img src='" + charJs.large + "' class='img-responsive img-centered' alt=''>";

        for (i = 0; i < charJs.drops.length; i++) {
            var url = "http://optc-db.github.io/characters/#/view/" + charJs.drops[i];
            var tiny = "https://onepiece-treasurecruise.com/wp-content/uploads/" + imageUrl(charJs.drops[i]);
            $("#raidDropsImg").append("<a href='" + url + "' target='_blank'><div style='background-image: url(" + tiny + ")' class='image-div inline'></div></a>");
        }

    } else {
        $("#raidDrops").css('display', 'none');
        if (charJs.linkDB != "missing") {
            large = "<a href='" + charJs.linkDB + "' target='_blank'><img src='" + charJs.large + "' class='img-responsive img-centered' alt=''></a>";
        } else {
            large = "<img src='" + charJs.large + "' class='img-responsive img-centered' alt=''>";
        }
    }

    console.log(charJs.conditions);
    if(!charJs.hasOwnProperty('conditions')){
        $("#raidConditions").css('display', 'none');
    } else {
        $("#raidConditions").css('display', 'block');
        $("#raidConditions p").empty().append(charJs.conditions);
    }

    $("#raidBody h2").empty().append(charJs.name);
    $("#raidImage").empty().append(large);


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
    var expert;
    var elite;

    if (fnList[character].hasOwnProperty('books')) {
        books = fnList[character].books;
        $("#fnBooksTitle").css('display', 'block');
    } else {
        if (fnList[character].hasOwnProperty('expert')) {
            expert = fnList[character].expert;
            elite = fnList[character].elite;
        } else {
            books = fnList[character].global_books;
        }
        if(!(fnList[character].hasOwnProperty('global_books') && fnList[character].hasOwnProperty('japan_books'))){
            $("#fnBooksTitle").css('display', 'none');
        }
    }

    $("#fnBody h2").empty().append(title);
    $("#fnImage").empty().append(large);
    $("#fnLast").empty();
    $("#fnDrops").empty();
    $("#fnBooks").empty();
    $("#fnCondition").empty();
    $("#eliteBooks").empty();
    $("#expertBooks").empty();

    if (fnList[character].hasOwnProperty('condition')) {
        $("#conditions").css('display', 'block');
        $("#fnCondition").append(fnList[character].condition);
    } else {
        $("#conditions").css('display', 'none');
    }

    if(drops.length == 0){
        $("#fnDrops").append("<p>None</p>");
    }

    if (fnList[character].hasOwnProperty('expert')) {
        for (i = 0; i < expert.length; i++) {
            var tiny = "https://onepiece-treasurecruise.com/wp-content/uploads/" + imageUrl(bookList[expert[i]].id);//bookList[books[i]].image;
            var url = "http://optc-db.github.io/characters/#/view/" + bookList[expert[i]].id;
            $("#expertBooks").append("<a href='" + url + "' target='_blank'><div style='background-image: url(" + tiny + ")' class='image-div inline'></div></a>");
        }
        for (i = 0; i < elite.length; i++) {
            var tiny = "https://onepiece-treasurecruise.com/wp-content/uploads/" + imageUrl(bookList[elite[i]].id);//bookList[books[i]].image;
            var url = "http://optc-db.github.io/characters/#/view/" + bookList[elite[i]].id;
            $("#eliteBooks").append("<a href='" + url + "' target='_blank'><div style='background-image: url(" + tiny + ")' class='image-div inline'></div></a>");
        }
        $("#expert").css('display', 'table');
        $("#elite").css('display', 'table');
    } else {
        $("#elite").css('display', 'none');
        $("#expert").css('display', 'none');
    }

    for (i = 0; i < last.length; i++) {
        $("#fnLast").append("<li>" + last[i] + "</li>");
    }


    for (i = 0; i < drops.length; i++) {
        var drop = drops[i];
        var toDrop = dropList[drops[i]];

        if(toDrop.hasOwnProperty('image')){
            var tiny = toDrop.image;
            var url = "#";
            if(toDrop.hasOwnProperty('id')){
                url = "http://optc-db.github.io/characters/#/view/" + toDrop.id;
            }

            $("#fnDrops").append("<a href='" + url + "' target='_blank'><div style='background-image: url(" + tiny + ")' class='image-div inline'></div></a>");
        } else {
            var tiny = "https://onepiece-treasurecruise.com/wp-content/uploads/" + imageUrl(toDrop.id);//toDrop.image;
            var url = "http://optc-db.github.io/characters/#/view/" + toDrop.id;
            $("#fnDrops").append("<a href='" + url + "' target='_blank'><div style='background-image: url(" + tiny + ")' class='image-div inline'></div></a>");
        }
    }

    if (books != null) {
        for (i = 0; i < books.length; i++) {
            if(bookList[books[i]].hasOwnProperty('image')){
                var tiny = bookList[books[i]].image;
                $("#fnBooks").append("<div style='background-image: url(" + tiny + ")' class='image-div inline'></div>");
            } else {
                var tiny = "https://onepiece-treasurecruise.com/wp-content/uploads/" + imageUrl(bookList[books[i]].id);//bookList[books[i]].image;
                var url = "http://optc-db.github.io/characters/#/view/" + bookList[books[i]].id;
                $("#fnBooks").append("<a href='" + url + "' target='_blank'><div style='background-image: url(" + tiny + ")' class='image-div inline'></div></a>");
            }
        }
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

    $.getJSON("assets/json/weeks.json", function (json) {
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
                    $(".prev").attr("onclick", "prevWeek(" + previousWeek + ",\"" + previousMonth + "\" )");
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

        if (timezone) {
            prev = monthDays(month, start);
            $("#day1").empty().append(prev);
            $("#month").empty().append(month);
        }

        for (i = 0; i < 7; i++) {
            // Gestione giorni
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

    $.getJSON("assets/json/weeks.json", function (json) {
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
                    $(".prev").attr("onclick", "prevWeek(" + previousWeek + ",\"" + previousMonth + "\" )");
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
        showColo();
        showRaid(false);
        showSpecial(false);

        if (timezone) {
            prev = monthDays(month, start);
            $("#day1").empty().append(prev);
            $("#month").empty().append(month);
        }

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

    $.getJSON("assets/json/weeks.json", function (json) {
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
                    $(".prev").attr("onclick", "prevWeek(" + previousWeek + ",\"" + previousMonth + "\" )");
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

        if (timezone) {
            prev = monthDays(month, start);
            $("#day1").empty().append(prev);
            $("#month").empty().append(month);
        }

        for (i = 0; i < 7; i++) {
            // Gestione giorni
            if (i != 0) {
                prev = monthDays(month, prev);
                $("#day" + (i + 1)).append(prev);
            }

        }

    });
}