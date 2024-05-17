// JavaScript functions to show and hide the side navbar
function showNavbar() {
    var sidenav = document.querySelector(".side-navbar");
    sidenav.style.display = "block"; // Show the navbar
}

function closeNavbar() {
    var sidenav = document.querySelector(".side-navbar");
    sidenav.style.display = "none"; // Hide the navbar completely
}

var productContainer = document.getElementById("products");
var search = document.getElementById("search");
var productlist = productContainer.querySelectorAll("div");

search.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase();

    for (var count = 0; count < productlist.length; count++) {
        var productname = productlist[count].querySelector("p").textContent;

        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
        }
    }
});
