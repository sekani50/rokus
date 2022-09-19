// JavaScript source code
//////////////////////////////toggle menu////////////////////////////////////

///1

let dash = document.getElementById("dash-toggle");

document.getElementById("menu").addEventListener('click', function () {

    dash.style.display = "block";
})

//2

/*document.getElementById("dash-toggle").addEventListener('mouseout', function () {

    dash.style.display = "none";
}) */

document.getElementById("im-icon").addEventListener('mouseout', function () {

    dash.style.display = "none";
})

document.getElementById("menu").addEventListener('click', function () {

    dash.style.display = "none";
})