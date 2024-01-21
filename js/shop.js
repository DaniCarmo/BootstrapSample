// Initialize an empty 2D array for the cart
let cart = [];
let products = 0;  
 
// Function to add items to the cart
function addToCart(itemName, price) {
    cart.push([itemName, price]);
    updateCheckout();
  }

function removeFromCartByItemName(itemName) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i][0] === itemName) {
            cart.splice(i, 1);
            break; // Assuming each item name is unique, so we can exit the loop once found
        }
    }
    updateCheckout();
}

// Function to update the checkout alert
function updateCheckout() {
    checkout();
}

// Function to display items and total price in an alert
function checkout() {
    let itemsList = "Items in your cart:\n";
    let totalPrice = 0;

// Iterate through the cart array
    for (let i = 0; i < cart.length; i++) {
      itemsList += `${cart[i][0]} - €${cart[i][1]}\n`;
      totalPrice += cart[i][1];
    }

// Display the alert with items and total price
    alert(itemsList + `\nTotal Price: €${totalPrice.toFixed(2)}`);
  }

// Bootstrap card clicked event listener
document.getElementById("card001").addEventListener("click", function()
{  
    var element = document.getElementById("card001");
    if (element.innerHTML=="Add to cart")
    {
	    element.innerHTML = "Remove from cart";
        products = 1;        
        element.style.background = "red";    
        addToCart('Hidden Kerry', 15.99);
    }
    else
    {
	    element.innerHTML = "Add to cart";
        products = 0;
        element.style.background = "yellow";
        removeFromCartByItemName('Hidden Kerry');
    }
}); 
document.getElementById("card002").addEventListener("click", function()
{    
    var element = document.getElementById("card002");
    if (element.innerHTML=="Add to cart")
    {
	    element.innerHTML = "Remove from cart";
        products = 1;        
        element.style.background = "red";   
        addToCart('Dingle Gin', 39.99);
    }
    else
    {
	    element.innerHTML = "Add to cart";
        products = 0;
        element.style.background = "yellow";
        removeFromCartByItemName('Dingle Gin');
    }
}); 
document.getElementById("card003").addEventListener("click", function()
{    
    var element = document.getElementById("card003");
    if (element.innerHTML=="Add to cart")
    {
	    element.innerHTML = "Remove from cart";
        products = 1;        
        element.style.background = "red";   
        addToCart('Kerry GAA Mug', 6.99);
    }
    else
    {
	    element.innerHTML = "Add to cart";
        products = 0;
        element.style.background = "yellow";
        removeFromCartByItemName('Kerry GAA Mug');
    }
}); 

document.getElementById("card004").addEventListener("click", function()
{    
    var element = document.getElementById("card004");
    if (element.innerHTML=="Add to cart")
    {
	    element.innerHTML = "Remove from cart";
        products = 1;        
        element.style.background = "red";   
        addToCart('€100 Gift Voucher', 100.00);
    }
    else
    {
	    element.innerHTML = "Add to cart";
        products = 0;
        element.style.background = "yellow";
        removeFromCartByItemName('€100 Gift Voucher');
    }
});

document.getElementById("card005").addEventListener("click", function()
{    
    var element = document.getElementById("card005");
    if (element.innerHTML=="Add to cart")
    {
	    element.innerHTML = "Remove from cart";
        products = 1;        
        element.style.background = "red";   
        addToCart('Kerry GAA Jumper', 72.95);
    }
    else
    {
	    element.innerHTML = "Add to cart";
        products = 0;
        element.style.background = "yellow";
        removeFromCartByItemName('Kerry GAA Jumper');
    }
}); 

document.getElementById("card006").addEventListener("click", function()
{    
    var element = document.getElementById("card006");
    if (element.innerHTML=="Add to cart")
    {
	    element.innerHTML = "Remove from cart";
        products = 1;        
        element.style.background = "red";   
        addToCart('Kerry Hamper', 35.00);
    }
    else
    {
	    element.innerHTML = "Add to cart";
        products = 0;
        element.style.background = "yellow";
        removeFromCartByItemName('Kerry Hamper');
    }
}); 

// Bootstrap card clicked event listener
document.getElementById("btnCart").addEventListener("click", function () {
    updateCheckout();
});

// Form confirmation
document.getElementById("btnSend").addEventListener("click", function()
	{ 
		alert("Thank you for your email\nWe will get back to you soon...");
	});