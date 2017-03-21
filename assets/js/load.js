/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    var myItems;

    $.getJSON('months.json', function(data) {
        myItems = data.items;
        console.log(myItems);
    });
});