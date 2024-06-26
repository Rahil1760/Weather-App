let input = document.querySelector(".input");
let searchButton = document.querySelector(".searchButton");
let useLocationButton = document.querySelector(".useLocationButton");
let humadity_element = document.querySelector('.humadity_element');
let windspeed_element = document.querySelector('.windspeed_element');


let weatherIcon = document.querySelector(".weatherIcon");
let temperature = document.querySelector(".temperature");
let cityName = document.querySelector(".cityName");
let weatherTitle = document.querySelector(".weatherTitle");
let day1 = document.querySelector('.day1')

// firsday Target
let firstDayHumidity_ELement = document.querySelector('.firstDayHumidity_ELement');
let firstDayWind_ELement = document.querySelector('.firstDayWind_ELement');
let firstDayTitle_ELement = document.querySelector('.firstDayTitle_ELement')
let weatherIconD1 = document.querySelector('.weather-icon_d1');
//secondday Target
let secondDayHumidity_ELement = document.querySelector('.secondDayHumadity_ELement');
let secondDayWind_ELement = document.querySelector('.secondDayWind_ELement');
let secondDayTitle_ELement = document.querySelector('.secondDayTitle_ELement');
let weatherIconD2 = document.querySelector('.weather-icon_d2');

// thirdDay Target
let thirdDayHumadity_ELement = document.querySelector('.thirdDayHumadity_ELement');
let thirdDayWind_ELement = document.querySelector('.thirdDayWind_ELement');
let thirdDayTitle_ELement = document.querySelector('.thirdDayTitle_ELement');
let weatherIconD3 = document.querySelector('.weather-icon_d3');

//fouthDays Target
let fourthDayHumadity_ELement = document.querySelector('.fourthDayHumadity_ELement');
let fourthDayWind_ELement = document.querySelector('.fourthDayWind_ELement');
let fourthDayTitle_ELement = document.querySelector('.fourthDayTitle_ELement');
let weatherIconD4 = document.querySelector('.weather-icon_d4');
//fifthDay Target

let fifthDayHumadity_ELement = document.querySelector('.fifthDayHumadity_ELement');
let fifthDayWind_ELement = document.querySelector('.fifthDayWind_ELement');
let fifthDayTitle_ELement = document.querySelector('.fifthDayTitle_ELement');
let weatherIconD5 = document.querySelector('.weather-icon_d5')
   


useLocationButton.addEventListener("click", () =>
  alert("Use loaction Working")
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
    console.log(responce.list);
    // currentDay foreCast
    const currentCity = responce.city.name;
    let temp = responce.list[0].main.temp;
    let temperature1 = Math.round(temp);
    let humadity = responce.list[0].main.humidity;
    let windRound = responce.list[0].wind.speed;
    let windSpeed = Math.round(windRound)
    // let foreFirstcast = responce.list[8].weather[0].main
    let main = responce.list[0].weather[0].description;
    console.log(responce.list);
    currentDayWeather(main, temperature1, currentCity, humadity, windSpeed);
    
    //first Day foreCast


    let firstDayHumadity = responce.list[8].main.humidity;
    let firstDayWindRound = responce.list[8].wind.speed;
    let firstDayWindSpeed = Math.round(firstDayWindRound)
    let firstDayMain = responce.list[8].weather[0].description;
   
    firstDayWeather(firstDayMain, firstDayHumadity, firstDayWindSpeed);
    // second Day ForeCast
    let secondDayHumadity = responce.list[11].main.humidity;
    let secondDayWindRound = responce.list[11].wind.speed;
    let secondDayWindSpeed = Math.round(secondDayWindRound)
    let secondDayMain = responce.list[11].weather[0].description;
    secondDayWeather(secondDayMain, secondDayHumadity, secondDayWindSpeed);
    // //third Days foreCast
   
    let thirdDayHumadity = responce.list[19].main.humidity;
    let thirdDayWindRound = responce.list[19].wind.speed;
    let thirdDayWindSpeed = Math.round(thirdDayWindRound)
    let thirdDayMain = responce.list[19].weather[0].description;
    
    thirdDayWeather(thirdDayMain, thirdDayHumadity, thirdDayWindSpeed);
    //fourth Day Forecast

    let fourthDayHumadity = responce.list[27].main.humidity;
    let fourthDayWindRound = responce.list[27].wind.speed;
    let fourthDayWindSpeed = Math.round(fourthDayWindRound)
    let fourthDayMain = responce.list[27].weather[0].description;
    console.log()
    fourthDayWeather(fourthDayMain, fourthDayHumadity, fourthDayWindSpeed);
    // fifth Days ForeCast
 
    let fifthDayHumadity = responce.list[35].main.humidity;
    let fifthDayWindRound = responce.list[35].wind.speed;
    let fifthDayWindSpeed = Math.round(fifthDayWindRound)
    let fifthDayMain = responce.list[35].weather[0].description;
    
    
    fifthDayWeather(fifthDayMain, fifthDayHumadity, fifthDayWindSpeed);

   
      
    console.log(main);
  } catch (error) {
    if (error) {
      errorHandle(error);
    }
  }
}
//function call
searchButton.addEventListener("click", () => {
  fetchWeather(input.value);
});
// error handling
function errorHandle(error) {
  if (error) {
    alert("Enter a valid city name");
  }
}


// main forecast function 
function currentDayWeather(main,temperature1, currentCity,humadity,windSpeed) {
  temperature.innerHTML = `${temperature1}°C`;
  cityName.innerHTML = currentCity;
  weatherTitle.innerHTML = main;
  humadity_element.innerHTML = `${humadity}%`;
  windspeed_element.innerHTML = `${windSpeed}kmpl`;

  if (
    main == "broken clouds" ||
    main == "Clouds" ||
    main == "overcast clouds"
  ) {
    weatherIcon.src = "Images/brokenClouds.png";
  } else if (main == "light rain" || main == "rain" || main == "shower rain" || main =="moderate rain") {
    weatherIcon.src = "Images/Rain.png";

  }
  if (main == "scattered clouds" || main == "few clouds") {
    weatherIcon.src = "Images/scatteredClouds.png";
  }
  if (main == "clear sky") {
    weatherIcon.src = "Images/sun.png";
  }
  if (main == "thunderstorm") {
    weatherIcon.src = "Images/Thunder.png";
  }
  if (main == "snow") {
    weatherIcon.src = "Images/Snow.png";
    }
}

//1day foreCast
function firstDayWeather(firstDayMain, firstDayHumadity, firstDayWindSpeed) {
  firstDayTitle_ELement.innerHTML = firstDayMain;

  firstDayHumidity_ELement.innerHTML = `H : ${firstDayHumadity}%`;
  firstDayWind_ELement.innerHTML = `W : ${firstDayWindSpeed}kmpl`
if (
    firstDayMain == "broken clouds" ||
    firstDayMain == "Clouds" ||
    firstDayMain == "overcast clouds"
  ) {
    weatherIconD1.src = "Images/brokenClouds.png";
  } else if (firstDayMain == "light rain" || firstDayMain == "rain" || firstDayMain == "shower rain" || firstDayMain =="moderate rain") {
    weatherIconD1.src = "Images/Rain.png";

  }
  if (firstDayMain == "scattered clouds" || firstDayMain == "few clouds") {
    weatherIconD1.src = "Images/scatteredClouds.png";
  }
  if (firstDayMain == "clear sky") {
    weatherIconD1.src = "Images/sun.png";
  }
  if (firstDayMain == "thunderstorm") {
    weatherIconD1.src = "Images/Thunder.png";
  }
  if (firstDayMain == "snow") {
    weatherIconD1.src = "Images/Snow.png";
    }
}


// 2nd Day ForeCast
function secondDayWeather(secondDayMain, secondDayHumadity, secondDayWindSpeed) {
  secondDayTitle_ELement.innerHTML = secondDayMain;
  secondDayHumidity_ELement.innerHTML = `H : ${secondDayHumadity}%`;
  secondDayWind_ELement.innerHTML = `W : ${secondDayWindSpeed}kmpl`

if (
    secondDayMain == "broken clouds" ||
    secondDayMain == "clouds" ||
    secondDayMain == "overcast clouds"
  ) {
    weatherIconD2.src = "Images/brokenClouds.png";
  } else if (secondDayMain == "light rain" || secondDayMain == "rain" || secondDayMain == "shower rain") {
    weatherIconD1.src = "Images/Rain.png";

  }
  if (secondDayMain == "scattered clouds" || secondDayMain == "few clouds") {
    weatherIconD2.src = "Images/scatteredClouds.png";
  }
  if (secondDayMain == "clear sky") {
    weatherIconD2.src = "Images/sun.png";
  }
  if (secondDayMain == "thunderstorm") {
    weatherIconD2.src = "Images/Thunder.png";
  }
  if (secondDayMain == "snow") {
    weatherIconD2.src = "Images/Snow.png";
    }
}
// 3rd Day forecast
function thirdDayWeather(thirdDayMain, thirdDayHumadity, thirdDayWindSpeed) {

  console.log(thirdDayMain)
  thirdDayTitle_ELement.innerHTML = thirdDayMain;
  thirdDayHumadity_ELement.innerHTML = `H : ${thirdDayHumadity}%`;
  thirdDayWind_ELement.innerHTML = `W : ${thirdDayWindSpeed}kmpl`;

  if (
    thirdDayMain == "broken clouds" ||
    thirdDayMain == "Clouds" ||
    thirdDayMain == "overcast clouds"
  ) {
    weatherIconD3.src = "Images/brokenClouds.png";
  } else if (thirdDayMain == "light rain" || thirdDayMain == "rain" || thirdDayMain == "shower rain") {
    weatherIconD3.src = "Images/Rain.png";

  }
  if (thirdDayMain == "scattered clouds" || thirdDayMain == "few clouds") {
    weatherIconD3.src = "Images/scatteredClouds.png";
  }
  if (thirdDayMain == "clear sky") {
    weatherIconD3.src = "Images/sun.png";
  }
  if (thirdDayMain == "thunderstorm") {
    weatherIconD3.src = "Images/Thunder.png";
  }
  if (thirdDayMain == "snow") {
    weatherIconD3.src = "Images/Snow.png";
    }
}
//4th Day foreCast
function fourthDayWeather(fourthDayMain, fourthDayHumadity, fourthDayWindSpeed) {
  fourthDayTitle_ELement.innerHTML = fourthDayMain;
  fourthDayHumadity_ELement.innerHTML = `H : ${fourthDayHumadity}%`;
  fourthDayWind_ELement.innerHTML = `W : ${fourthDayWindSpeed}kmpl`;

  if (
    fourthDayMain == "broken clouds" ||
    fourthDayMain == "Clouds" ||
    fourthDayMain == "overcast clouds"
  ) {
    weatherIconD3.src = "Images/brokenClouds.png";
  } else if (fourthDayMain == "light rain" || fourthDayMain == "rain" || fourthDayMain == "shower rain") {
    weatherIconD4.src = "Images/Rain.png";

  }
  if (fourthDayMain == "scattered clouds" || fourthDayMain == "few clouds") {
    weatherIconD4.src = "Images/scatteredClouds.png";
  }
  if (fourthDayMain == "clear sky") {
    weatherIconD4.src = "Images/sun.png";
  }
  if (fourthDayMain == "thunderstorm") {
    weatherIconD4.src = "Images/Thunder.png";
  }
  if (fourthDayMain == "snow") {
    weatherIconD4.src = "Images/Snow.png";
    }
}
// 5th Day foreCast
function fifthDayWeather(fifthDayMain, fifthDayHumadity, fifthDayWindSpeed) {

  fifthDayTitle_ELement.innerHTML = fifthDayMain;
  fifthDayHumadity_ELement.innerHTML = `H : ${fifthDayHumadity}%`;
  fifthDayWind_ELement.innerHTML = `W : ${fifthDayWindSpeed}kmpl`;
  

  if (
    fifthDayMain == "broken clouds" ||
    fifthDayMain == "Clouds" ||
    fifthDayMain == "overcast clouds"
  ) {
    weatherIconD3.src = "Images/brokenClouds.png";
  } else if (fifthDayMain == "light rain" || fifthDayMain == "rain" || fifthDayMain == "shower rain") {
    weatherIconD5.src = "Images/Rain.png";

  }
  if (fifthDayMain == "scattered clouds" || fifthDayMain == "few clouds") {
    weatherIconD5.src = "Images/scatteredClouds.png";
  }
  if (fifthDayMain == "clear sky") {
    weatherIconD5.src = "Images/sun.png";
  }
  if (fifthDayMain == "thunderstorm") {
    weatherIconD5.src = "Images/Thunder.png";
  }
  if (fifthDayMain == "snow") {
    weatherIconD5.src = "Images/Snow.png";
    }
}
// const date = new Date("2024-06-15")
// const day = date.getDay()
// const weedays= ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
// console.log(weedays[day])



