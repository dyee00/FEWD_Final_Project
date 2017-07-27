console.log("JS file works!");

// Hover cursor state

$("section").hover(function() {
    $(this).css('cursor','pointer');
},  function() {
    $(this).css('cursor','auto');  
});



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



/* closes modal on background click

$("#modal-espresso").click(function(event) {
  
     $("#modal-espresso").hide();
      
});
*/

