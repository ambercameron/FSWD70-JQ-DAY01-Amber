$("form").submit(function(e) {

	e.preventDefault();
	
	
	

});
//Remove the form from the page
//$("form").remove();

//Create 5 new DIVs in the article element
$("article").append("<div></div><div></div><div></div><div></div><div></div>");

//Within the input field change the value to "Search for..."
$("input").attr("value", "Search for...");

//Add a class name of "box" to each new DIV
$("div").addClass("box");


//Change the link to "www.codefactory.wien"

$("a").attr("href", "http://www.codefactory.wien")