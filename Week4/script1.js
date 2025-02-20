function print5() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
}

print5();

function load() {
    var heading = document.getElementById("page-heading");
    heading.firstChild.nodeValue = "New Heading";
}

function unload() {
    var heading = document.getElementById("page-heading");
    heading.firstChild.nodeValue = "Page Heading";
}

function load2() {
    var paragraph = document.getElementById("paragraph");
    paragraph.firstChild.nodeValue = "Paragraph text";
}

var heading = document.getElementById("page-heading");
var paragraph = document.getElementById("paragraph");

heading.addEventListener("mouseenter", load);
heading.addEventListener("mouseleave", unload);
paragraph.addEventListener("click", load2);