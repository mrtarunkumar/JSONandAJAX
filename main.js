// USE XMLHttpRequest
var ourRequest = new XMLHttpRequest();

// We can get or send data
// to get data we use GET
// to send data we can use POST
// we want to get data from our json
ourRequest.open('GET', 'http://localhost:3000/json/data1.json');
ourRequest.onload = function () {
    //quick test to check our json data
    console.log(ourRequest.responseText);
};

// Send the request.
ourRequest.send();
