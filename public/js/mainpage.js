function settings () {

    var theme = window.localStorage.getItem("theme");
    var font = window.localStorage.getItem("font");
    var size = window.localStorage.getItem("size");

    if(theme === "dark-mode") {document.body.classList.add("dark-mode");}
    else {document.body.classList.remove("dark-mode")}

    if (font === "arial") {document.body.style.fontFamily = "Arial" ;}
        else if (font === "roman") {document.body.style.fontFamily = "Times New Roman" ;}

    if (size === "sixteen") {document.body.style.fontSize = "16px";
                                document.getElementById("head").style.fontSize = "32";}
    else if (size === "eighteen") {document.body.style.fontSize = "18px";
                                document.getElementById("head").style.fontSize = "32";}
    else if (size === "twenty") {document.body.style.fontSize = "20px";
                                document.getElementById("head").style.fontSize = "32";}
        
}

function redirect (num) {
    switch (true) {
        case (num == 1):
            document.location.href = "/ ";
            break;
        case (num == 2):
            document.location.href = "newpost";
            break;
        case (num == 3):
            document.location.href = "oldpost";
            break;
        case (num == 4):
            document.location.href = "calendar";
            break;
        case (num == 5):
            document.location.href = "settings";
            break;
        default: document.location.href = "main";
            break;
    }
}