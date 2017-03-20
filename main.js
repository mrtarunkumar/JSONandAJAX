// USE XMLHttpRequest
var ourRequest = new XMLHttpRequest();

// We can get or send data
// to get data we use GET
// to send data we can use POST
// we want to get data from our json
ourRequest.open('GET', 'http://localhost:3000/json/data1.json');
ourRequest.onload = function () {
    //assign our request to a variable
    var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData[0]);
};

// Send the request.
ourRequest.send();
