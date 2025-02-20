function print5() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
}

print5();

var element = document.getElementById("page-heading");
element.firstChild.nodeValue = "New heading";

var element = document.getElementById("paragraph");
element.firstChild.nodeValue = "Paragraph text";