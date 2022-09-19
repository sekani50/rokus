// JavaScript source code
//

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

///specifying the length of input
inputIds = ["card-no", "exp-day", "exp-year", "sec-code"]

for (let inputId of inputIds) {

    let n = document.getElementById(inputId);

    n.addEventListener('input', function () {

        if (inputId == "card-no") {

            n.value = n.value.slice(0, 15);
        }
        else if (inputId == "exp-day") {

            n.value = n.value.slice(0, 2);
        }
        else if (inputId == "exp-year") {

            n.value = n.value.slice(0, 4);

        }
        else {
            n.value = n.value.slice(0, 6);
        }
    })
}

////////card radio //////////////////

const form1 = document.getElementById("card-form");

for (const element of form1.elements) {

    if (element.id == "debit-card") {
        document.getElementById("debit-card").addEventListener('click', function () {
            document.getElementById("stag-bill").style.display = "none";
            document.getElementById("paypal-edit").style.display = "none";
            document.getElementById("card-edit").style.display = "block";
            document.getElementById("navig").style.display = "block";

        })
    }
    if (element.id == "wirred") {
        document.getElementById("wirred").addEventListener('click', function () {
            document.getElementById("stag-bill").style.display = "none";
            document.getElementById("card-edit").style.display = "none";
            document.getElementById("paypal-edit").style.display = "block";
            document.getElementById("navig").style.display = "block";



        })
    }
}

/////////element with id="nav" ///////

document.getElementById("navig").addEventListener('click', function () {
    document.getElementById("card-edit").style.display = "none";
    document.getElementById("paypal-edit").style.display = "none";
    document.getElementById("stag-bill").style.display = "block";

})

//////bill editting btn /////////
document.getElementById("edit-btn").addEventListener('click', function () {
    document.getElementById("stag-bill").style.display = "none";
    document.getElementById("edit-bill").style.display = "block";


})

///////update the billing details ///////

document.getElementById("update-btn").addEventListener('click', function () {
    event.preventDefault();
    const arr = [];
    const arr2 = [];
    const form2 = document.getElementById("bill-form");

    for (element of form2.elements) {

        let y = document.getElementById(element.id);
   
        let a = document.getElementById("s-n");

        

        if (element.id == "fname") {
            console.log(y.value);
            arr.push(y.value);
        }
       
        if (element.id == "lname") {

            console.log(y.value);
            arr.push(y.value)
            
        }
        console.log(arr);
        if (arr.length == 2) {
            a.innerText = arr.join(' ');
        }

        if (element.id == "address") {

            console.log(y.value);

            let b = document.getElementById("s-a");
            console.log(b.innerText);
            let initial = b.innerText;

            if (y.value) {
                b.innerText = y.value;
            }
            else {
                b.innerText = initial;
            }
        }
        let c = document.getElementById("s-s");
        if (element.id == "city") {

            console.log(y.value);
            arr2.push(y.value);
        }
        if (element.id == "state") {

            console.log(y.value);
            arr2.push(y.value);
        }
        console.log(arr2);
        c.innerText = arr2.join(',')


        if (element.id == "zip-code") {

            console.log(y.value);

            let d = document.getElementById("s-z");
            console.log(d.innerText);
            let initial = d.innerText;

            if (y.value) {
                d.innerText = y.value;
            }
            else {
                d.innerText = initial;
            }
        }
        
        if (element.id == "country") {

            console.log(y.value);

            let e = document.getElementById("s-c");
            console.log(e.innerText);
            let initial = e.innerText;

            if (y.value) {
                e.innerText = y.value;
            }
            else {
                e.innerText = initial;
            }
        }
        if (element.id == "telephone") {

            console.log(y.value);

            let f = document.getElementById("s-t");
            console.log(f.innerText);
            let initial = f.innerText;

            if (y.value) {
                f.innerText = y.value;
            }
            else {
                f.innerText = initial;
            }
        }
        
    }



   /* let y = document.getElementById("fname");
    console.log(y.value);

    let x = document.getElementById("s-n");
    console.log(x.innerText);  */

    document.getElementById("stag-bill").style.display = "block";
    //x.style.display = "block";

   
    document.getElementById("edit-bill").style.display = "none";


})




/*
document.getElementById("update-btn").addEventListener('click', function () {

    const form2 = document.getElementById("bill-form");

    for (const element of form2.elements) {

        let n = document.getElementById(element);

        let fname;
        let lname;
        if (element.id == "fname") {
            fname = n.value;
        }
        if (element.id == "lname") {
            lname = n.value;
        }

        document.getElementById("s-n").innerText = [fname + '' + lname].join('');
        let adres;
        if (element.id == "address") {
            adres = n.value;
        }
        document.getElementById("s-a").innnerText = adres;

        let st;
        let ct;
        if (element.id == "city") {
            ct = n.value;

        }
        if (element.id == "state") {
            st = n.value;

        }
        document.getElementById("s-s").innnerText = [ct + ' ' + st].join('')
        let zc;
        if (element.id == "zip-code") {
            zc = n.value;
        }
        document.getElementById("s-z").innnerText = zc;
        let cunt;
        if (element.id == "country") {
            cunt = n.value;
        }
        document.getElementById("s-c").innnerText = cunt;
        let tel;
        if (element.id == "telephone") {
            tel = n.value;
        }
        document.getElementById("s-t").innnerText = tel;

    }
      
    document.getElementById("stag-bill").style.display = "none";
    document.getElementById("edit-bill").style.display = "block";
})
*/
