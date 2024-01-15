/* JavaScript code for associated HTML document
var salary = 0.00;
var products = 0;
*/

/* Page Loading event listener
document.addEventListener("DOMContentLoaded", function () {
	alert("Page loading...");
}); */


// Bootstrap card clicked event listener
var elements = document.getElementsByClassName("card003");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function () {
        if (this.innerHTML == "Add to cart") {
            this.innerHTML = "Remove from cart";
            products = 1;
            this.style.background = "pink";
        } else {
            this.innerHTML = "Add to cart";
            products = 0;
            this.style.background = "yellow";
        }
    });
}

// Bootstrap card clicked event listener
document.getElementById("btnCart").addEventListener("click", function () {
    alert("Thank you for your purchase!");
}); 
