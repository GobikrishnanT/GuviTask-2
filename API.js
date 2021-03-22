

//1 . Create a instance of XMLHttpRequest();
var request = new XMLHttpRequest();

// 2 . Create a connection : //Open a connection
request.open('GET' , 'https://restcountries.eu/rest/v2/all' , true) 
//Get : Method , URL : link  , true : depend for 
//free and escape from any issue

// 3 . Send the request :
request.send();

//4 . Load the response ...This function is triggered only when the date
// is retrived

request.onload = function() {
    var myData = JSON.parse(this.response);
    console.log(myData);

    for(let i = 0 ; i < myData.length ; i++) {
        if(myData[i].latlng[0] > 0 && myData[i].latlng[1] > 0) {
            latData = myData[i].latlng[0];
            lngData = myData[i].latlng[1];
        }
       
        //console.log(latData , lngData);
        var request = new XMLHttpRequest();
request.open('GET' , `http://api.openweathermap.org/data/2.5/weather?lat=${lngData}&lon=${latData}&appid=bfbf8184796f43fd1147e3fbaf3aaa67` , true);
        request.send();

       request.onload = function() {
          var myCountryData = JSON.parse(this.response);
          if(myCountryData["cod"] === 200) {
            var lon = myCountryData["coord"]["lon"] || myCountryData["message"];
            var lat = myCountryData["coord"]["lat"] || myCountryData["message"];
            var nameOfCountry = myCountryData["name"] || "No Country Name";
            console.log(`Latitude : ${lat} Longitude : ${lon} Countryname : ${nameOfCountry}`); 
          }
            
          
       }


    }  
    
}

    






