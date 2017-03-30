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
        var prev;
               
        $("#day1").append(json.weeks[0].starting);
        
        for(i=0;i<7;i++){                        
            
            var raid = json.weeks[0].program[i].raid;
            var colo = json.weeks[0].program[i].colo;
            var fn = json.weeks[0].program[i].fn;           
            
            if(raid[0] != "none"){
                for(j=0;j<raid.length;j++){
                    var character = raid[j];
                    var tiny = raidList[character].tiny;
 
                    $("#list" + (i+1)).append("<div style='background-image: url(" + tiny + "' class='image-div inline'></div>");
                }
            }
            
            if(colo[0] != "none"){
                for(j=0;j<colo.length;j++){
                    var character = colo[j];
                    var tiny = coloList[character].tiny;
                    
                    $("#list" + (i+1)).append("<div style='background-image: url(" + tiny + "' class='image-div inline'></div>");
                }
            }  
            
            
            
            if(fn[0] != "none"){
                console.log("fn[0][" + i + "]: " + fn[0]);
                for(j=0;j<fn.length;j++){
                    var character = fn[j];
                    var tiny = fnList[character].tiny;
                    
                    console.log(tiny);
                    console.log("#list" + (i+1));
                    $("#list" + (i+1)).append("<div style='background-image: url(" + tiny + "' class='image-div inline'></div>");
                }
            }             
            
            // Gestione giorni
            if(i!=0){
                
            }
            
        }
        
        
         
         
    });
});