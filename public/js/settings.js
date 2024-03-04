function settings () {

    var theme = window.localStorage.getItem("theme");
    var font = window.localStorage.getItem("font");
    var size = window.localStorage.getItem("size");

    if(theme === "dark-mode") {document.body.classList.add("dark-mode");
        document.getElementById("dark").innerHTML = "Light Mode";}

    if (font === "arial") {document.body.style.fontFamily = "Arial" ;}
        else if (font === "roman") {document.body.style.fontFamily = "Times New Roman" ;}

    if (size === "sixteen") {document.body.style.fontSize = "16px";
                            document.getElementById("head").style.fontSize = "32";
                            document.getElementById("h").style.fontSize = "26";}
    else if (size === "eighteen") {document.body.style.fontSize = "18px";
                            document.getElementById("head").style.fontSize = "32";
                            document.getElementById("h").style.fontSize = "26";}
    else if (size === "twenty") {document.body.style.fontSize = "20px";
                            document.getElementById("head").style.fontSize = "32";
                            document.getElementById("h").style.fontSize = "26";}
        
}

function darkmode () {

    var btn = document.getElementById("dark");
    
    if (btn.innerHTML == "Dark Mode") {btn.innerHTML = "Light Mode";
        document.body.classList.toggle("dark-mode") ;
        localStorage.setItem("theme", "dark-mode");}
    else {btn.innerHTML = "Dark Mode"; document.body.classList.toggle("dark-mode") ; localStorage.setItem("theme", "light-mode");}
    
}

function font (num) {
    switch (true) {
        case (num == 1):
            document.body.style.fontFamily = "Arial" ;
            window.localStorage.setItem("font", "arial");
            break;
        case (num == 2):
            document.body.style.fontFamily = "Times New Roman" ;
            window.localStorage.setItem("font", "roman");
            break;   
        default:
            break;
    }}

function size (num) {
    switch (true) {
        case (num == 1):
            document.body.style.fontSize = "16px";
            document.getElementById("head").style.fontSize = "32";
            document.getElementById("h").style.fontSize = "26";
            window.localStorage.setItem("size", "sixteen");
            break;
        case (num == 2):
            document.body.style.fontSize = "18px";
            document.getElementById("head").style.fontSize = "32";
            document.getElementById("h").style.fontSize = "26";
            window.localStorage.setItem("size", "eighteen");
            break;
        case (num == 3):
            document.body.style.fontSize = "20px";
            document.getElementById("head").style.fontSize = "32";
            document.getElementById("h").style.fontSize = "26";
            window.localStorage.setItem("size", "twenty");
            break;    
        default: document.body.style.fontSize = "16px";
            break;
    }
}

function back () {
    document.location.href = "main";
}

function logout () {
    document.location.href = "/ ";
}