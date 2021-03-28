let request = new XMLHttpRequest();
request.open("GET" , "https://restcountries.eu/rest/v2/all" , true);
request.send();
request.onload = function() {
    var myRestCountry = JSON.parse(this.response);
    console.log(myRestCountry);

    for(let index in myRestCountry) {
        try{
            var countryName = myRestCountry[index].name;
            var [lat , lng] = myRestCountry[index].latlng;
            if(lat === 0 && lng === 0) {
                throw new Error("Oops country is restricted");
            }
            maginFunction(countryName , lat , lng);
        }
        catch(err) {
            console.log("Invalid country credential" + countryName + " " + err.message);
        }
    }
}
function maginFunction(cname , lat , lng) {
    let key = "bfbf8184796f43fd1147e3fbaf3aaa67";
    let URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}`;
    let newRequest = new XMLHttpRequest();
    newRequest.open("GET" , URL , true);
    newRequest.send();
    newRequest.onload = function() {
        let mainData = JSON.parse(this.response);
        try{
            
            console.log(mainData.name + " " + mainData.main.temp);
            
        }
        catch(err){
            console.log(err.message);
        }
    }
}
