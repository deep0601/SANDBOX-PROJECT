// free apiKeys from OpenWeatherAPI ( 1 day + 5 days forecast)
let apiKey1Day = "b12d05d0bef25be9c62b25a5612bad06";
let apiKey5Days = "32ba0bfed592484379e51106cef3f204";
let monthsString = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

/*
    Get weather information from user-inputed city name from OpenWeatherAPI JSON path and change the 
    DOM objects in the project.html
*/
setDates()
function setDates() {
    const today = new Date();
    var curYear = today.getFullYear();
    var curMon = today.getMonth();
    var curDay = today.getDate();
    var curDayOfTheWeek = today.getDay();
    for (i = 0; i < 5; i++) {
        document.getElementById("exactDateDay" + (i + 1)).innerHTML = dayOfWeek[curDayOfTheWeek] + ",  " + monthsString[curMon] + " " + curDay + ", " + curYear;
        switch (curMon) {
            // January, March, May, July, August, October, December
            case 0, 2, 4, 6, 7, 9, 11:
                // if day = 31
                if (curDay == 31) {
                    // day = 1, move to next month
                    curDay = 1;
                    curMonth += 1;
                    // if month = 12, move to next year
                    if (curMonth == 12) {
                        curMonth = 0;
                        curYear++;
                        curDayOfTheWeek++;
                        // if current day of the week is 7, move to monday
                        if (curDayOfTheWeek == 7) {
                            curDayOfTheWeek = 0;
                        }
                    }
                }
                // if day is not 31
                else {
                    // moves to next day and next day of the week
                    curDay++;
                    curDayOfTheWeek++;
                    // if next day of the week is 7, move to monday
                    if (curDayOfTheWeek == 7) {
                        curDayOfTheWeek = 0;
                    }
                }
                break;

            // April, June, September, November
            case 3, 5, 8, 10:
                // if day = 30
                if (curDay == 30)
                // day = 1, move to next month
                {
                    curDay = 1;
                    curMonth += 1;
                    // if month = 12, move to next year

                    if (curMonth == 12) {
                        curMonth = 0;
                        curYear++;
                        curDayOfTheWeek++;
                        // if current day of the week is 7, move to monday
                        if (curDayOfTheWeek == 7) {
                            curDayOfTheWeek = 0;
                        }
                    }

                }
                else {
                    curDay++;
                    curDayOfTheWeek++;
                    if (curDayOfTheWeek == 7) {
                        curDayOfTheWeek = 0;
                    }
                }
                break;

            // Febuary
            case 1:
                if (curYear % 4 == 0) {
                    // if day = 2
                    if (curDay == 29)
                    // day = 1, move to next month
                    {
                        curDay = 1;
                        curMonth += 1;
                        // if month = 12, move to next year

                        if (curMonth == 12) {
                            curMonth = 0;
                            curYear++;
                            curDayOfTheWeek++;
                            // if current day of the week is 7, move to monday
                            if (curDayOfTheWeek == 7) {
                                curDayOfTheWeek = 0;
                            }
                        }

                        else {
                            currDay++;
                            curDayOfTheWeek++;
                            if (curDayOfTheWeek == 7) {
                                curDayOfTheWeek = 0;
                            }
                        }
                    }
                }
                else {
                    if (curDay == 28)
                    // day = 1, move to next month
                    {
                        curDay = 1;
                        curMonth += 1;
                        // if month = 12, move to next year

                        if (curMonth == 12) {
                            curMonth = 0;
                            curYear++;
                            curDayOfTheWeek++;
                            // if current day of the week is 7, move to monday
                            if (curDayOfTheWeek == 7) {
                                curDayOfTheWeek = 0;
                            }
                        }

                    }
                    else {
                        currDay++;
                        curDayOfTheWeek++;
                        if (curDayOfTheWeek == 7) {
                            curDayOfTheWeek = 0;
                        }
                    }
                }
                break;
        }
    }
}


function getWeather() {

    //  Get the new-inputed city name and the existing city name
    var newCityName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");

    // change the city name
    cityName.innerHTML = newCityName.value;

    // fetch information from this path
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + newCityName.value + "&units=metric&appid=" + apiKey5Days)

        // get the response from JSON file
        .then(response => response.json())
        .then(data => {

            // use loops to set the DOM objects in the HTMl files
            for (i = 0; i < 5; i++) {
                document.getElementById("advice" + (i + 1)).innerHTML = "Advice of the Day: " + getAdvice(parseInt(data.list[i].weather[0].id));
                document.getElementById("description" + (i + 1)).innerHTML = "Description: " + (data.list[i].weather[0].description);
                document.getElementById("temp" + (i + 1)).innerHTML = "Temp: " + parseInt(data.list[i].main.temp) + "°";
                document.getElementById("feelsLike" + (i + 1)).innerHTML = "FeelsLike: " + parseInt(data.list[i].main.feels_like) + "°";
                document.getElementById("humidity" + (i + 1)).innerHTML = "Humidity: " + parseInt(data.list[i].main.humidity);
                document.getElementById("wind" + (i + 1)).innerHTML = "Wind Speed: " + parseInt(data.list[i].wind.speed) + "Km/h";
                document.getElementById("icon" + (i + 1)).src = "https://openweathermap.org/img/wn/" + (data.list[i].weather[0].icon) + ".png";
            }
        })
        // if the inputed city name is not understood by the api, alert error message
        .catch(err => alert("The inputed city name is not correct. Please enter a new city name"))
}

// set the default weather info for the page to be Toronto
function defaultWeather() {
    document.getElementById("cityInput").value = "Toronto";
    getWeather();

    var theme = window.localStorage.getItem("theme");
    var font = window.localStorage.getItem("font");
    var size = window.localStorage.getItem("size");

    if(theme === "dark-mode") {document.body.classList.add("dark-mode");
                                document.getElementById("day1").style.backgroundColor = "#6366f1";
                                document.getElementById("day1").style.borderColor = "#6366f1";
                                document.getElementById("forecastedDays").style.backgroundColor = "#8A8AF3";
                                document.getElementById("forecastedDays").style.borderColor = "#8A8AF3";}
    else {document.body.classList.remove("dark-mode")}

    if (font === "arial") {document.body.style.fontFamily = "Arial" ;}
        else if (font === "roman") {document.body.style.fontFamily = "Times New Roman" ;}

    if (size === "sixteen") {document.body.style.fontSize = "16px";
                                document.getElementsByTagName("h1").style.fontSize = "32";}
    else if (size === "eighteen") {document.body.style.fontSize = "18px";
								document.getElementsByTagName("h1").style.fontSize = "32";}
    else if (size === "twenty") {document.body.style.fontSize = "20px";
								document.getElementsByTagName("h1").style.fontSize = "32";}
}

// returns advice message using the weather description id from the openweather api
// list of all descriptions https://openweathermap.org/weather-conditions
function getAdvice(adviceId) {
    var advice;
    // If the adviceID starts with 8, the weather is Cloudy + Clear
    if (getFirstDigitWeatherCode(adviceId) == 8) {
        advice = "Today is a cloudy and clear day. Enjoy a walk outside!"
    }
    // If the adviceId starts with 2, there is a Thunderstorm coming
    else if (getFirstDigitWeatherCode(adviceId) == 2) {
        advice = "Thunderstorm is expected to happen today. Please stay at home!"
    }

    // If the adviceId starts with 3 or 5, there is Drizzle or Rain
    else if (getFirstDigitWeatherCode(adviceId) == 3 || getFirstDigitWeatherCode(adviceId) == 5) {
        advice = "It is raining outside. Please bring an umbrella"
    }

    // If the adviceId starts with 6, there is Snow
    else if (getFirstDigitWeatherCode(adviceId) == 6) {
        advice = "It is snowing outside. Wear warm and be Careful!"
    }

    // If the adviceId are below numbers, there is Mist or Smoke or Haze or Sand Dust or Fog or Sand or Dust
    else if (adviceId == 701 || adviceId == 711 || adviceId == 721 || adviceId == 731 || adviceId == 741 || adviceId == 751 || adviceId == 761) {
        advice = "Visibility is greatly reduced. Watch out"
    }

    // If the advice are below numbers, there is Tornado or Squall
    else if (adviceId == 771 || adviceId == 781) {
        advice = "Squall or Tornado is expected happen. Please stay at home"
    }
    return advice;
}

// gets the first digit from the weather description id
function getFirstDigitWeatherCode(number) {
    number = Math.floor(number / 100)
    return number;
}