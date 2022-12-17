let weather = {
    "apiKey": "266650058525dacbdfe9f1b7d8e4f494",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city  
        + "&units=metric&appid=" 
        + this.apiKey)
        
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));

    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        const {pressure} = data.main;
        const {all} = data.clouds;
        const {country} = data.sys;
        console.log(name,icon,description,temp,humidity,speed,pressure,all,country)
        document.querySelector(".city").innerText = name + ", " + country;
        document.querySelector(".icon").src ="https://openweathermap.org/img/wn/"+ icon + ".png";
        document.querySelector(".des").innerText = description;
        document.querySelector(".temp").innerText = temp + "°";
        document.querySelector(".humid").innerText = "Humidity: " + humidity + "%"
        document.querySelector(".wSpeed").innerText = "Wind speed: " + speed + " km/h"
        document.querySelector(".pressure").innerText = "Pressure: " + pressure + " mb"
        document.querySelector(".clouds").innerText = "Cloud: " + all + "%"
        document.querySelector(".weather").classList.remove("load")

    },
    search: function() {
           this.fetchWeather(document.querySelector(".searchBar").value)
    }
};

document.querySelector(".search button")
.addEventListener("click", function(){
    weather.search();

});

document.querySelector(".searchBar").addEventListener("keyup", function(event){
    if (event.key == "Enter"){
        weather.search();
    }
})