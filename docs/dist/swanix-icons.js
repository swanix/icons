// Swanix Icons SVG sprite via ajax
// Based on https://css-tricks.com/ajaxing-svg-sprite/
var ajax = new XMLHttpRequest();
ajax.open("GET", "https://cdn.jsdelivr.net/gh/swanix/icons/dist/swanix-icons.svg", true);
ajax.send();
ajax.onload = function(e) {
    var div = document.createElement("div");
    div.style.display = "none";
    div.innerHTML = ajax.responseText;
    document.body.insertBefore(div, document.body.childNodes[0]);
}