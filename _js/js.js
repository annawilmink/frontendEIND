/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/*bron= https://developer.mozilla.org/nl/docs/Web/API/Document/querySelector*/
console.log('test');

var knop = document.querySelector(".categorienknop");
var tekst = document.querySelector(".popupcategorien");
var menu_button = document.querySelector(".hamburger");
var mobilemenu = document.querySelector("header ul:nth-child(3)");


// bron: Max
function toggleTekst() {
  tekst.classList.toggle("show");
}

function toggleMenu() {
  mobilemenu.classList.toggle("open");
}

//als het element .categorien bestaat (dus knop) dan maakt hij er een eventlistener aan vast, anders niet.
if (knop)
  knop.addEventListener('click', toggleTekst);

menu_button.addEventListener('click', toggleMenu);
