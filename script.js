
window.onscroll = function() {myFunction()};
var header = document.getElementById("official-Header-title");
var headersup = document.getElementById("sup_");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
	header.style.fontSize = "5vw";
	headersup.style.fontSize = "2vw";
  } else {
    header.classList.remove("sticky");
	header.style.fontSize = "9vw";
	headersup.style.fontSize = "3vw";
  }
}
