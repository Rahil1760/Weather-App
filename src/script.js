let input = document.querySelector(".input");
let searchButton = document.querySelector(".searchButton");
let useLocationButton = document.querySelector(".useLocationButton");
let humadity_element = document.querySelector(".humadity_element");
let windspeed_element = document.querySelector(".windspeed_element");
let loader = document.querySelector('.loader');
let pageOpacity = document.querySelector('.pageOpacity')
let weatherIcon = document.querySelector(".weatherIcon");
let temperature = document.querySelector(".temperature");
let cityName = document.querySelector(".cityName");
let weatherTitle = document.querySelector(".weatherTitle");
let day1 = document.querySelector(".day1");
let options = document.querySelector('.option')
let ul = document.querySelector('.ul');
let fiveDaysWeatherSection = document.querySelector('.fiveDaysWeather');
console.log(fiveDaysWeatherSection);
fiveDaysWeatherSection.style.display = 'none'
let cityarr = [];
// options.style.display = 'hidden'
//Weekdays
let weekday1 = document.querySelector(".Weekday1");
let weekday2 = document.querySelector(".Weekday2");
let weekday3 = document.querySelector(".Weekday3");
let weekday4 = document.querySelector(".Weekday4");
let weekday5 = document.querySelector(".Weekday5");

// firsday Target

//secondday Target
let secondDayHumidity_ELement = document.querySelector(
  ".secondDayHumadity_ELement"
);
let secondDayWind_ELement = document.querySelector(".secondDayWind_ELement");
let secondDayTitle_ELement = document.querySelector(".secondDayTitle_ELement");
let weatherIconD2 = document.querySelector(".weather-icon_d2");

// thirdDay Target
let thirdDayHumadity_ELement = document.querySelector(
  ".thirdDayHumadity_ELement"
);
let thirdDayWind_ELement = document.querySelector(".thirdDayWind_ELement");
let thirdDayTitle_ELement = document.querySelector(".thirdDayTitle_ELement");
let weatherIconD3 = document.querySelector(".weather-icon_d3");

//fouthDays Target
let fourthDayHumadity_ELement = document.querySelector(
  ".fourthDayHumadity_ELement"
);
let fourthDayWind_ELement = document.querySelector(".fourthDayWind_ELement");
let fourthDayTitle_ELement = document.querySelector(".fourthDayTitle_ELement");
let weatherIconD4 = document.querySelector(".weather-icon_d4");
//fifthDay Target

let fifthDayHumadity_ELement = document.querySelector(
  ".fifthDayHumadity_ELement"
);
let fifthDayWind_ELement = document.querySelector(".fifthDayWind_ELement");
let fifthDayTitle_ELement = document.querySelector(".fifthDayTitle_ELement");
let weatherIconD5 = document.querySelector(".weather-icon_d5");

useLocationButton.addEventListener("click", async () => {
  navigator.geolocation.getCurrentPosition(getLocation, failedToGet)
  function getLocation(position) {
    async function getCityName() {
      try {
        const url = "http://api.openweathermap.org/geo/1.0/reverse?"
      const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
       
      const id = "3f6bd1576dd54b6547112220831f28c4"
      // 
        const cityName = await fetch(url + `&lat=${latitude}` + `&lon=${longitude}`+ `&limit=5&appid=`+ id);
        const data = await cityName.json();
        const locationCiy = data[0].name;
        pageOpacity.style.opacity = "0.5"
        loader.style.display = 'block';
        setTimeout(() => {

          loader.style.display = 'none';
          pageOpacity.style.opacity = "1"
          
          
        },1000);
        fetchWeather(locationCiy);
        sessionStorageFunc(locationCiy)

      } catch(error) {
        if (error) {
        
        }
      }
      
    }
    getCityName();
  }
  function failedToGet() {
    alert("Failed to get your location")
  }

}
  
  
);


// async function
async function fetchWeather(city) {
  const appKey = "3f6bd1576dd54b6547112220831f28c4";
  const appUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";

  try {
    const fetchedData = await fetch(
      appUrl + city + `&appid=${appKey}` + "&units=metric"
    );
    const responce = await fetchedData.json();
 
    // currentDay foreCast
    const currentCity = responce.city.name;
    let temp = responce.list[0].main.temp;
    let temperature1 = Math.round(temp);
    let humadity = responce.list[0].main.humidity;
    let windRound = responce.list[0].wind.speed;
    let windSpeed = Math.round(windRound);
    let main = responce.list[0].weather[0].description;
   

    currentDayWeather(
      main,
      temperature1,
      currentCity,
      humadity,
      windSpeed,
      weatherTitle,
      temperature,
      cityName,
      humadity_element,
      windspeed_element
    );
    imageChange(main, weatherIcon);
    //first Day
    let firstDayHumidity_ELement = document.querySelector(
      ".firstDayHumidity_ELement"
    );
    let firstDayWind_ELement = document.querySelector(".firstDayWind_ELement");
    let firstDayTitle_ELement = document.querySelector(
      ".firstDayTitle_ELement"
    );
    let weatherIconD1 = document.querySelector(".weather-icon_d1");
    let firstDayHumadity = responce.list[5].main.humidity;
    let firstDayWindRound = responce.list[5].wind.speed;
    let firstDayWindSpeed = Math.round(firstDayWindRound);
    let firstWeatherTitle = responce.list[5].weather[0].description;
    let nextDay1 = responce.list[5].dt_txt.substring(0, 10);
    daysForecast(
      nextDay1,
      weekday1,
      firstWeatherTitle,
      firstDayHumadity,
      firstDayWindSpeed,
      firstDayHumidity_ELement,
      firstDayWind_ELement,
      firstDayTitle_ELement
    );
    imageChange(firstWeatherTitle, weatherIconD1);
    // Second Day
    let secondDayHumadity = responce.list[13].main.humidity;
    let secondDayWindRound = responce.list[13].wind.speed;
    let secondDayWindSpeed = Math.round(secondDayWindRound);
    let secondWeatherTitle = responce.list[13].weather[0].description;
    let nextDay2 = responce.list[13].dt_txt.substring(0, 10);
    daysForecast(
      nextDay2,
      weekday2,
      secondWeatherTitle,
      secondDayHumadity,
      secondDayWindSpeed,
      secondDayHumidity_ELement,
      secondDayWind_ELement,
      secondDayTitle_ELement
    );
    imageChange(secondWeatherTitle, weatherIconD2);
    //third Day
    let thirdDayHumadity = responce.list[21].main.humidity;
    let thirdDayWindRound = responce.list[21].wind.speed;
    let thirdDayWindSpeed = Math.round(thirdDayWindRound);
    let thirdWeatherTitle = responce.list[21].weather[0].description;
    let nextDay3 = responce.list[21].dt_txt.substring(0, 10);
    daysForecast(
      nextDay3,
      weekday3,
      thirdWeatherTitle,
      thirdDayHumadity,
      thirdDayWindSpeed,
      thirdDayHumadity_ELement,
      thirdDayWind_ELement,
      thirdDayTitle_ELement
    );
    imageChange(thirdWeatherTitle, weatherIconD3);
    // fourth Day

    let fourthDayHumadity = responce.list[29].main.humidity;
    let fourthDayWindRound = responce.list[29].wind.speed;
    let fourthDayWindSpeed = Math.round(fourthDayWindRound);
    let fourthWeatherTitle = responce.list[29].weather[0].description;
    let nextDay4 = responce.list[29].dt_txt.substring(0, 10);
    daysForecast(
      nextDay4,
      weekday4,
      fourthWeatherTitle,
      fourthDayHumadity,
      fourthDayWindSpeed,
      fourthDayHumadity_ELement,
      fourthDayWind_ELement,
      fourthDayTitle_ELement
    );
    imageChange(fourthWeatherTitle, weatherIconD4);

    //fifth Day
    let fifthDayHumadity = responce.list[37].main.humidity;
    let fifthDayWindRound = responce.list[37].wind.speed;
    let fifthDayWindSpeed = Math.round(fifthDayWindRound);
    let fifthWeatherTitle = responce.list[37].weather[0].description;
    let nextDay5 = responce.list[37].dt_txt.substring(0, 10);
    daysForecast(
      nextDay5,
      weekday5,
      fifthWeatherTitle,
      fifthDayHumadity,
      fifthDayWindSpeed,
      fifthDayHumadity_ELement,
      fifthDayWind_ELement,
      fifthDayTitle_ELement
    );
    imageChange(fifthWeatherTitle, weatherIconD5);
   
  } catch (error) {
    if (error) {
      errorHandle(error);
    }
  }
}
//function call
searchButton.addEventListener("click", () => {
  fetchWeather(input.value);
  sessionStorageFunc(input.value);
  input.value = "";
});
// error handling
function errorHandle(error) {
  if (error) {
    alert("Enter a valid city name");
  }
}

// main forecast function or current day forecast
function currentDayWeather(
  main,
  temperature1,
  currentCity,
  humadity,
  windSpeed,
  weatherTitle,
  temperature,
  cityName,
  humadity_element,
  windspeed_element
) {
  weatherTitle.innerHTML = main;
  temperature.innerHTML = `${temperature1}°C`;
  cityName.innerHTML = currentCity;
  humadity_element.innerHTML = `${humadity}%`;
  windspeed_element.innerHTML = `${windSpeed}kmpl`;
  fiveDaysWeatherSection.style.display = "block";
}
// 5 day weather updates
function daysForecast(
  nextDay1,
  weekday1,
  title,
  humadity,
  windSpeed,
  humadity_element,
  windspeed_element,
  weatherTitle
) {
  function day(today, today_Element) {
    const date = new Date(today);
    const day = date.getDay();
    const weedays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mainDay = weedays[day];
    today_Element.innerHTML = mainDay;
  }
  weatherTitle.innerHTML = title;
  humadity_element.innerHTML = `H : ${humadity}%`;
  windspeed_element.innerHTML = `W : ${windSpeed}kmpl`;
  day(nextDay1, weekday1);
}

// update weather images
function imageChange(weatherTitle, weatherIcon) {
  if (
    weatherTitle == "broken clouds" ||
    weatherTitle == "Clouds" ||
    weatherTitle == "overcast clouds" ||
    weatherTitle == "scattered clouds" || weatherTitle == "few clouds"
  ) {
    weatherIcon.src = "Images/brokenClouds.png";
  } else if (
    weatherTitle == "light rain" ||
    weatherTitle == "rain" ||
    weatherTitle == "shower rain" ||
    weatherTitle == "moderate rain"
  ) {
    weatherIcon.src = "Images/Rain.png";
  }
  if (weatherTitle == "clear sky") {
    weatherIcon.src = "Images/sun.png";
  }
  if (weatherTitle == "thunderstorm") {
    weatherIcon.src = "Images/Thunder.png";
  }
  if (weatherTitle == "snow") {
    weatherIcon.src = "Images/Snow.png";
  }
}


// input searched cities 
function option() {
  function optionShow() {
    options.style.display = "block"
  }
  function optionHIde() {
    options.style.display = "none"
  }

  input.addEventListener('mouseover', () => {
  
    optionShow();
  });
  input.addEventListener('mouseout', () => {
  
    optionHIde();
  });

  options.addEventListener('mouseover', () => {
    optionShow();
  });
  options.addEventListener('mouseout', () => {
    optionHIde();
  })
  input.addEventListener('click', () => {
    optionShow();
  });
}


option();
// adding data to session storage
function sessionStorageFunc(searchedCity) {
  sessionStorage.setItem("SearchedCity", searchedCity);
  
 
  getSessionData();
}

//getting data from session storage
function getSessionData() {
  let city = sessionStorage.getItem("SearchedCity");
  cityarr.push(city);
  let gotCities = [... new Set(cityarr)];
  
  searchCityMapping(gotCities)
}
function searchCityMapping(filteredcity) {
  ul.innerHTML = "";
   let style = ["ml-5", "hover:bg-gray-800","cursor-pointer"];
   filteredcity.map(city => {
    let option = document.createElement('li');
    option.innerHTML = city;
    ul.appendChild(option);
    option.classList.add(...style);

    option.addEventListener("click", (e) => {
      input.value = e.target.innerHTML;
      options.style.display = "none";
    })

    option.addEventListener('mouseover', (e) => {
      input.value = e.target.innerHTML;
    });
   });
}

