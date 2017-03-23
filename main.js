var pageCounter = 1;
var newDataContainer = document.getElementById("newData");
var btn = document.getElementById("ftcData");

btn.addEventListener("click", function () {
    // USE XMLHttpRequest
    var ourRequest = new XMLHttpRequest();

    // We can get or send data
    // to get data we use GET
    // to send data we can use POST
    // we want to get data from our json
    ourRequest.open('GET', 'http://localhost:3000/json/data' + pageCounter + '.json');
    ourRequest.onload = function () {
        //assign our request to a variable
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData[0]);
        
        //Pass ourData to renderHTML function
        renderHTML(ourData);
    };

    // Send the request.
    ourRequest.send();
    pageCounter = pageCounter + 1;
    if(pageCounter > 3){
        btn.classList.add("hideme");
    }
});


// Function to render data to the page
function renderHTML(data) {
    var htmlString = "";
    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + ".</p>";
    } ;
    newDataContainer.insertAdjacentHTML('beforeend', htmlString);
} ;