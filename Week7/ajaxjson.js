window.onload = makeAjaxRequest;

function makeAjaxRequest() {
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (xhr) {
        xhr.open("GET", "counties.json", true);
        xhr.send();
        xhr.onreadystatechange = showContents;
    } else {
        document.getElementById("updatemessage").innerHTML = "Could not perform stated request";
    }
}

function showContents() {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            let data = JSON.parse(xhr.responseText);
            let text = "";
            for (let i = 0;i < data.counties.length;i++) {
                text += "<tr><td>" + data.counties[i].name + "</td></tr>";
            }
            document.getElementById("countylist").innerHTML = text;
        } else {
            document.getElementById("updatemessage").innerHTML = "An error occured: " + xhr.status;
        }
    }
}