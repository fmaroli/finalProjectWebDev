//Handles the appearing button/opacity in the landing page
//this variable stores the current element which the mouse is hovering
var current;
$(document).ready(function() {
    //if hovering on an element and id contains grid, run this
    $("div[id^='grid']").hover(function() {
        //saves id of the element which the mouse is hovering into variable
        current = $(this).attr('id');
        //make changes to DOM
        $("#"+current+" img").css("opacity", "0.6");
        $("#"+current+" .btn-read-more").css("opacity", "1");
    }, function() {
        $("#"+current+" img").css("opacity", "1");
        $("#"+current+" .btn-read-more").css("opacity", "0");
    });
    //these two next functions handle font-size. Inside the stories, the user can choose
    //to change to a bigger size to assist with reading.
    $(".sfont").click(function() {
        $(".parag").css("font-size","1rem");
    });
    $(".lfont").click(function() {
        $(".parag").css("font-size","1.5rem");
    });
});