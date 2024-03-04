function save() {

    // get data from input
    var new_data = {
        title: document.getElementById("title").value,
        cont: document.getElementById("content").value }

    //save an empty array if nothing saved
    if(localStorage.getItem('data') == null) {
        localStorage.setItem('data', '[]');
    }

 
    //push new data and old data together
    var old_data = JSON.parse(localStorage.getItem('data'));
    old_data.push(new_data);

    //save old data and new data to localstorage
    localStorage.setItem('data', JSON.stringify(old_data));

}

function view() {
    
    /* if(localStorage.getItem('data') != null){
        document.getElementById("output").innerHTML = JSON.parse(localStorage.getItem('data'));
    } */
var i=prompt("Enter the number of the entry you want to view (your first entry is 0, your second is 1, and so on):");
    var arr = JSON.parse(localStorage.getItem('data'));
    document.getElementById("output").innerText = arr[i].title;
    document.getElementById("output2").innerText = arr[i].cont;

}
removeItem = () => {
    if(confirm("Warning! Pressing OK means all of your entries will be deleted!") == true)
    {localStorage.removeItem('data');}
}

function redirect (num) {
    switch (true) {
        case (num == 1):
            document.location.href = "/ ";
            break;
        case (num == 2):
            document.location.href = "main";
            break;
		default: document.location.href = "main";
            break;
    }
}

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

function redirect2 (num) {
    switch (true) {
        case (num == 1):
            document.location.href = "/ ";
            break;
        case (num == 2):
            document.location.href = "main";
            break;
		default: document.location.href = "oldpost";
            break;
    }
}