$(document).ready(function(){
    // Create a new Date object
    var currentDate = new Date();

    // Get the current year
    var currentYear = currentDate.getFullYear();

    // Update the content of the h1 element with the current year using jQuery
    $(".copyright span").text(currentYear);
});