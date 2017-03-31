/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
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
    })();;
    
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
    })();;
    
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
    })();;   

    $.getJSON("assets/json/weeks.json", function(json) {
        var start = json.weeks[0].starting;
        var month = json.weeks[0].month;
        var prev = start;
        
        $("#month").append(month);
               
        $("#day1").append(json.weeks[0].starting);
        
        for(i=0;i<7;i++){                        
            
            var raid = json.weeks[0].program[i].raid;
            var colo = json.weeks[0].program[i].colo;
            var fn = json.weeks[0].program[i].fn;           
            
            if(raid[0] != "none"){
                for(j=0;j<raid.length;j++){
                    var character = raid[j];
                    var tiny = raidList[character].tiny;
                    var foo = 'raidModal(\'' + character + '\')';
 
                    $("#list" + (i+1)).append("<a href='#viewRaidModal' onclick='raidModal(\"" + character + "\")' data-toggle='modal'><div style='background-image: url(" + tiny + "' class='image-div inline'></div></a>");
                }
            }
            
            if(colo[0] != "none"){
                for(j=0;j<colo.length;j++){
                    var character = colo[j];
                    var tiny = coloList[character].tiny;
                    var foo = 'coloModal(\'' + character + '\')';
                    
                    $("#list" + (i+1)).append("<a href='#viewColoModal' onclick='coloModal(\"" + character + "\")' data-toggle='modal'><div style='background-image: url(" + tiny + "' class='image-div inline'></div></a>");
                }
            }                          
            
            if(fn[0] != "none"){
                for(j=0;j<fn.length;j++){
                    var character = fn[j];
                    var tiny = fnList[character].tiny;
                    var foo = 'fnModal(\'' + character + '\')';
                    
                    $("#list" + (i+1)).append("<a href='#viewFnModal' onclick='fnModal(\"" + character + "\")' data-toggle='modal'><div style='background-image: url(" + tiny + "' class='image-div inline'></div></a>");
                    
                }
            }             
            
            // Gestione giorni
            if(i!=0){
                prev = monthDays(month, prev);
                $("#day" + (i+1)).append(prev);                
            }
            
        }
                                  
    });
});

function monthDays(month, day){
    var newDay;
    var max;
    
    switch (month){
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
    
    return newDay;
}

function raidModal(character){
    
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
    })();;
    
    var charJs = raidList[character];
    var large = "<a href='" + charJs.linkDB + "' target='_blank'><img src='" + charJs.large + "' class='img-responsive img-centered' alt=''></a>"
    var last = raidList[character].lastTimes;
        
    $("#raidBody h2").empty().append(character);
    $("#raidImage").empty().append(large);
    $("#raidLast").empty();
    
    for(i=0;i<last.length;i++){
        $("#raidLast").append("<li>" + last[i] + "</li>");
    }    
}

function coloModal(character){
    
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
    })();;
    
    var charJs = coloList[character];
    var large = "<a href='" + charJs.linkDB + "' target='_blank'><img src='" + charJs.large + "' class='img-responsive img-centered' alt=''></a>"
    var last = coloList[character].lastTimes;
        
    $("#coloBody h2").empty().append(character);
    $("#coloImage").empty().append(large);
    $("#coloLast").empty();
    
    for(i=0;i<last.length;i++){
        $("#coloLast").append("<li>" + last[i] + "</li>");
    }    
}

function fnModal(character){
    
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
    })();;
    
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
    })();;
    
    var charJs = fnList[character];
    var large = "<img src='" + charJs.large + "' class='img-responsive img-centered' alt=''>"
    var last = fnList[character].lastTimes;
    var drops = fnList[character].drops;
        
    $("#fnBody h2").empty().append(character);
    $("#fnImage").empty().append(large);
    $("#fnLast").empty();
    $("#fnDrops").empty();
    
    for(i=0;i<last.length;i++){
        $("#raidLast").append("<li>" + last[i] + "</li>");
    }
    
    for(i=0;i<drops.length;i++){
        var tiny = dropList[drops[i]].image;
        var url = dropList[drops[i]].url;
        $("#fnDrops").append("<a href='" + url + "' target='_blank'><div style='background-image: url(" + tiny + "' class='image-div inline'></div></a>");
    }    
    
    
}