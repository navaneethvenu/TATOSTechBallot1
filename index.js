window.onload = function () {
    setBar('linkedbb', 1);
    setBar("twitterbb", 1);
    setBar("instabb", 1);
};

function changePreview(status) {
    var p1 = document.getElementsByClassName("linkedinpostcontainer")[0];
    var p2 = document.getElementsByClassName("twitterpostcontainer")[0];
    var p3 = document.getElementsByClassName("instapostcontainer")[0];
    var i1 = document.getElementsByClassName("itemcontainer1")[0];
    var i2 = document.getElementsByClassName("itemcontainer2")[0];

    p1.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "none";
    i1.style.display = "none";
    i2.style.display = "none";

    switch (status) {
        case 1: p1.style.display = "flex"; break;
        case 2: p2.style.display = "flex"; break;
        case 3: p3.style.display = "flex"; i1.style.display = "flex"; break;
        case 4: p3.style.display = "flex"; i2.style.display = "flex"; break;
    }
}

function changeMode(status) {
    // var p1 = document.getElementsByClassName("linkedinpostcontainer")[0];
    // var p2 = document.getElementsByClassName("twitterpostcontainer")[0];
    // var p3 = document.getElementsByClassName("instapostcontainer")[0];

    // p1.style.display = "none";
    // p2.style.display = "none";
    // p3.style.display = "none";
    // i1.style.display = "none";
    // i2.style.display = "none";

    // for (i = 1; i <= 4; ++i) {
    //     document.getElementsByClassName("linkedbb")[0];
    // }


    if (status == 1 || status == 2) {
        document.getElementsByClassName('text')[0].style.color = "#2B2B2B";
        document.getElementsByClassName('text')[1].style.color = "#2B2B2B";
        document.getElementsByClassName('text')[2].style.color = "#2B2B2B";
    }
    else {
        document.getElementsByClassName('text')[0].style.color = "#ffffff";
        document.getElementsByClassName('text')[1].style.color = "#ffffff";
        document.getElementsByClassName('text')[2].style.color = "#ffffff";
    }

    setBar('linkedbb', status);
    setBar("twitterbb", status);
    setBar("instabb", status);

    // switch (type) {
    //     case 1: setBar("linkedbb", status); break;
    //     case 2: setBar("twitterbb", status); break;
    //     case 3: setBar("instabb"); break;
    // }
}

function setBar(type, status) {
    for (i = 0; i < 4; ++i) {
        document.getElementsByClassName(type)[i].style.display = "none";
    }

    document.getElementsByClassName(type)[status - 1].style.display = "block";
}

function changeColour() {

    var r = document.querySelector(':root');
    var hex = document.getElementById("hexCode").value;
    r.style.setProperty('--background', hex);
}