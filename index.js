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