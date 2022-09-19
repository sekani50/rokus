// JavaScript source code



document.getElementById("name-btn").addEventListener('click', function () {


    let stagName = document.getElementById("stag-name");
    let stag = stagName.innerText;
    console.log(stag);
    stagName.style.display = "none";

    document.getElementById("name-btn").style.display = "none";

    document.getElementById("update-name").style.display = "block";
    document.getElementById("get-name").style.display = "block";
    document.getElementById("get-name").style.marginTop = "-0.01px";

});

document.getElementById("update-name").addEventListener('click', function (event) {
    event.preventDefault();
    let x = document.getElementById("get-name");
    console.log(x.value);

    let c = document.getElementById("stag-name");

    c.style.display = "block";
    let initialName = c.innerText;
    console.log(initialName);

    if (x.value == "") {
        c.innerText = initialName;
    }
    else {
        c.innerText = x.value;
    }


    document.getElementById("update-name").style.display = "none";

    document.getElementById("get-name").style.display = "none";

    document.getElementById("name-btn").style.display = "block";
    document.getElementById("name-btn").style.marginTop = "-50px";

    c.style.display = "block";


});



/////////////////////////////email////////////////////////////////////////////

document.getElementById("email-btn").addEventListener('click', function () {


    let stagEmail = document.getElementById("stag-email");
    let stag = stagEmail.innerText;
    console.log(stag);
    stagEmail.style.display = "none";

    document.getElementById("email-btn").style.display = "none";

    document.getElementById("update-email").style.display = "block";
    document.getElementById("get-email").style.display = "block";
    document.getElementById("get-email").style.marginTop = "-0.01px";

});

document.getElementById("update-email").addEventListener('click', function (event) {
    event.preventDefault();
    let x = document.getElementById("get-email");
    console.log(x.value);

    let c = document.getElementById("stag-email");

    c.style.display = "block";
    let initialEmail = c.innerText;
    console.log(initialEmail);

    if (x.value == "") {
        c.innerText = initialEmail;
    }
    else {
        c.innerText = x.value;
    }


    document.getElementById("update-email").style.display = "none";

    document.getElementById("get-email").style.display = "none";

    document.getElementById("email-btn").style.display = "block";
    document.getElementById("email-btn").style.marginTop = "-50px";

    c.style.display = "block";


});



/////////////////////////////password button///////////////////////////////////

document.getElementById("pass-btn").addEventListener('click', function () {


    let stagPass = document.getElementById("stag-pass");
    let stag = stagPass.innerText;
    console.log(stag);
    stagPass.style.display = "none";

    document.getElementById("pass-btn").style.display = "none";

    document.getElementById("update-pass").style.display = "block";
    document.getElementById("get-pass").style.display = "block";
    document.getElementById("get-pass").style.marginTop = "-0.01px";

});

document.getElementById("update-pass").addEventListener('click', function () {
    event.preventDefault();
    let x = document.getElementById("get-pass");
    console.log(x.value);

    let c = document.getElementById("stag-pass");

    c.style.display = "block";
    let initialPass = c.innerText;
    console.log(initialPass);

    if (x.value == "") {
        c.innerText = initialPass;
    }
    else {
        c.innerText = x.value;
    }


    document.getElementById("update-pass").style.display = "none";

    document.getElementById("get-pass").style.display = "none";

    document.getElementById("pass-btn").style.display = "block";
    document.getElementById("pass-btn").style.marginTop = "-50px";

    c.style.display = "block";


});



//////////////////////////////toggle menu////////////////////////////////////

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