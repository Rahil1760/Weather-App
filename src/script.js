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
    const currentCity = responce.city.name;
    let temp = responce.list[0].main.temp;
    let temperature1 = Math.round(temp);
    let humadity = responce.list[0].main.humidity;
    let windSpeed = responce.list[0].wind.speed;

    console.log(humadity);
    // let foreFirstcast = responce.list[8].weather[0].main
    let main = responce.list[0].weather[0].description;
    console.log(responce.list);
    imageChange(main,temperature1, currentCity,humadity,windSpeed);
   

      
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
function imageChange(main,temperature1, currentCity,humadity,windSpeed) {
    temperature.innerHTML = `${temperature1}°C`;
  cityName.innerHTML = currentCity;
  weatherTitle.innerHTML = main;
  humadity_element.innerHTML = humadity;
  windspeed_element.innerHTML = windSpeed;

  if (
    main == "broken clouds" ||
    main == "Clouds" ||
    main == "overcast clouds"
  ) {
    weatherIcon.src = "Images/brokenClouds.png";
  } else if (main == "light rain" || main == "rain" || main == "shower rain") {
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


// const date = new Date("2024-06-15")
// const day = date.getDay()
// const weedays= ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
// console.log(weedays[day])
