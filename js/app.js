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
// hidePages(pageIndex);

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


// ==== closes modal on background click ====

var esp = document.getElementById("modal-espresso");
var cap = document.getElementById("modal-cappuccino");
var cl = document.getElementById("modal-cafe-latte"); 
var fl = document.getElementById("modal-flat-white"); 
var amer = document.getElementById("modal-americano");
var re = document.getElementById("modal-red-eye"); 
var mac = document.getElementById("modal-macchiato");
var cor = document.getElementById("modal-cortado"); 
var moc = document.getElementById("modal-mocha");

window.onclick = function(event) {
    if (event.target == esp) {
        esp.style.display = "none";
    } else if (event.target == cap) {
        cap.style.display = "none";
    } else if (event.target == cl) {
        cl.style.display = "none";
    } else if (event.target == fl) {
        fl.style.display = "none";
    } else if (event.target == amer) {
        amer.style.display = "none";
    } else if (event.target == re) {
        re.style.display = "none";
    } else if (event.target == mac) {
        mac.style.display = "none";
    } else if (event.target == cor) {
        cor.style.display = "none";
    } else if (event.target == moc) {
        moc.style.display = "none";
    }
}


// hammer.js gestures
/* 
var hammertime = new Hammer(myElement, myOptions);
hammertime.on('pan', function(ev) {
  console.log(ev);
});


$(".espresso").click(function() {   
  $("#modal-espresso").show("#modal-show");
});

$(".modal-close").click(function(event) {
  $("#modal-espresso").hide("#modal-show");
});
*/

var hammertime = new Hammer(myElement, myOptions);
hammertime.on('pan', function(ev) {
  console.log(ev);
});


$(document).ready(function() {

    $(".espresso").hammer().on("swipeleft", function(){
        $(this).show("#modal-show"); 
    })

    $(".modal-close").hammer().on("swiperight", function(){
        $(this).hide("#modal-show"); 
    })

});












