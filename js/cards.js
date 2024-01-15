// JavaScript code for associated HTML document
var salary = 0.00;
var products = 0;

/* Page Loading event listener
document.addEventListener("DOMContentLoaded", function () {
	alert("Page loading...");
}); */


// Bootstrap card clicked event listener
document.getElementById("card003").addEventListener("click", function()
{     
    var element = document.getElementById("card003");
    if (element.innerHTML=="Add to cart")
    {
	    element.innerHTML = "Remove from cart";
        products = 1;        
        element.style.background = "pink";        
    }
    else
    {
	    element.innerHTML = "Add to cart";
        products = 0;
        element.style.background = "yellow";
    }
}); 

// Bootstrap card clicked event listener
document.getElementById("btnCart").addEventListener("click", function () {
    alert("Thank you for your purchase of:\nFord GTI\nPrice: 129.00");
}); 
