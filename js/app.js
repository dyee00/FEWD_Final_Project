console.log("JS file works!");


// ==== Modal ====

$(".espresso").click(function() { 	
	$("#modal-espresso").show("#modal-show");
});


$(".modal-close").click(function(event) {
	$("#modal-espresso").hide("#modal-show");
});
 

$(".cappuccino").click(function() { 	
	$("#modal-cappuccino").show("#modal-show");
});


$(".modal-close").click(function(event) {
	$("#modal-cappuccino").hide("#modal-show");
});

$(".cafe-latte").click(function() { 	
	$("#modal-cafe-latte").show("#modal-show");
});


$(".modal-close").click(function(event) {
	$("#modal-cafe-latte").hide("#modal-show");
});

$(".flat-white").click(function() { 	
	$("#modal-flat-white").show("#modal-show");
});

$(".modal-close").click(function(event) {
	$("#modal-flat-white").hide("#modal-show");
});

$(".americano").click(function() { 	
	$("#modal-americano").show("#modal-show");
});

$(".modal-close").click(function(event) {
	$("#modal-americano").hide("#modal-show");
});

$(".red-eye").click(function() { 	
	$("#modal-red-eye").show("#modal-show");
});

$(".modal-close").click(function(event) {
	$("#modal-red-eye").hide("#modal-show");
});

$(".macchiato").click(function() { 	
	$("#modal-macchiato").show("#modal-show");
});

$(".modal-close").click(function(event) {
	$("#modal-macchiato").hide("#modal-show");
});

$(".cortado").click(function() { 	
	$("#modal-cortado").show("#modal-show");
});

$(".modal-close").click(function(event) {
	$("#modal-cortado").hide("#modal-show");
});

$(".mocha").click(function() { 	
	$("#modal-mocha").show("#modal-show");
});

$(".modal-close").click(function(event) {
	$("#modal-mocha").hide("#modal-show");
});


// ==== Button - pervious/next ====

var pageIndex = 1;
hidePages(pageIndex);

function plusSlides(n) {
  showPages(pageIndex += n);
}

function showPages(n) {
  var i;
  var pages = document.getElementsByClassName("page");

  if (n > pages.length) {pageIndex = 1}    
  if (n < 1) {pageIndex = pages.length}
  for (i = 0; i < pages.length; i++) {
      pages[i].style.display = "none";  
  }

  pages[pageIndex-1].style.display = "block";  

}




/* closes modal on background click 

$("#modal-espresso").click(function(event) {
  	event.preventDefault();

    $("#modal-espresso").hide();
   
});
test 

*/

