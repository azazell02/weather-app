let city = document.getElementById('city')

let images = document.querySelector('.images')
let date = document.querySelector('.date')
let gradus = document.querySelector('.gradus')
let weather = document.querySelector('.weather')
let sun = document.querySelector('.sun')
let rain = document.querySelector('.rain')

let btn = document.querySelector(".button")
let cont = document.querySelector(".contanier")
let cont2 = document.querySelector(".contanier2")
let backTo = document.querySelector("#backTo")

btn.addEventListener("click",()=>{
    cont.classList.remove("active")
    cont2.classList.add("active")
})

backTo.addEventListener("click",()=>{
    cont.classList.add("active")
    cont2.classList.remove("active")
})

let url = `https://api.openweathermap.org/data/2.5/onecall?lat=42.88&lon=74.58&units=metric&&lang=ru&appid=120e283644c22a192b3e6f6d9e45e81f`
city.addEventListener("change", () => {
    let latLon = city.options[city.selectedIndex].value;
    let url2 = `https://api.openweathermap.org/data/2.5/onecall?${latLon}&units=metric&&lang=ru&appid=120e283644c22a192b3e6f6d9e45e81f`
    fetch(url2)
    .then(respone => respone.json())
    .then(data => {
        images.innerHTML = ""
        date.innerHTML = ""
        gradus.innerHTML = ""
        weather.innerHTML = ""
        sun.innerHTML = ""
        rain.innerHTML = ""
        document.querySelector(".sunday").innerHTML =`<div class="dt"></div>`
        document
        .querySelector(".apirigth").innerHTML = ""
        document.querySelector(".scrool").innerHTML = ""

        document
      .querySelector(".apirigth")
      .insertAdjacentHTML("beforeend", `<p>Июнь, ${new Date().getDate()}</p>`);
    data.hourly.forEach((element) => {
      document.querySelector(".dt").insertAdjacentHTML(
        "beforebegin",
        `
     <div class="days">
     <p>${Math.floor(Number(element.temp))}&deg;C</p>
     <img src="http://openweathermap.org/img/wn/${
       element.weather[0].icon
     }@2x.png"> 
     <p>${new Date(element.dt *  1000).getHours()}:00</p>
    
     
    </div>
     `
      );
    });

    data.daily.forEach((element) => {
      document.querySelector(".scrool").insertAdjacentHTML(
        "beforeend",
        `
       <div class="elem">
       <p>${new Date(element.dt * 1000).toLocaleDateString('ru-ru', { weekday: 'short' })}</p>
       
       <img src="http://openweathermap.org/img/wn/${
         element.weather[0].icon
       }@2x.png"> 
       <p>${Math.floor(Number(element.temp.max))}&deg;C</p>
       </div>
       `
      );
    });

        images.insertAdjacentHTML('beforeend', `<img src="http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png">`)
        date.insertAdjacentHTML('beforeend', `<p>Сегодня, ${new Date().getDate()} июня</p>`)
        gradus.insertAdjacentHTML('beforeend', `<p>${Math.floor(Number(data.current.temp))}&deg;</p>`)
        weather.insertAdjacentHTML('beforeend', `<p>${data.current.weather[0].description}</p>`)
        sun.insertAdjacentHTML('beforeend', `<img src="./images/Ветер.png"><p>Ветер | ${data.current.wind_speed} km/h</p>`)
        rain.insertAdjacentHTML('beforeend', `<img src="./images/Дождь.png"><p>Дождь | ${data.current.humidity} %</p>`)

    })
})

fetch(url)
  .then((elem) => elem.json())
  .then(data => {
    document.querySelector('.images').insertAdjacentHTML('beforeend', `<img src="http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png">`)
    document.querySelector('.date').insertAdjacentHTML('beforeend', `<p>Сегодня, ${new Date().getDate()} июня</p>`)
    document.querySelector('.gradus').insertAdjacentHTML('beforeend', `<p>${Math.floor(Number(data.current.temp))}&deg;</p>`)
    document.querySelector('.weather').insertAdjacentHTML('beforeend', `<p>${data.current.weather[0].description}</p>`)
    document.querySelector('.sun').insertAdjacentHTML('beforeend', `<img src="./images/Ветер.png"><p>Ветер | ${data.current.wind_speed} km/h</p>`)
    document.querySelector('.rain').insertAdjacentHTML('beforeend', `<img src="./images/Дождь.png"><p>Дождь | ${data.current.humidity} %</p>`)

    document
      .querySelector(".apirigth")
      .insertAdjacentHTML("beforeend", `<p>Июнь, ${new Date().getDate()}</p>`);
    data.hourly.forEach((element) => {
      document.querySelector(".dt").insertAdjacentHTML(
        "beforebegin",
        `
     <div class="days">
     <p>${Math.floor(Number(element.temp))}&deg;C</p>
     <img src="http://openweathermap.org/img/wn/${
       element.weather[0].icon
     }@2x.png"> 
     <p>${new Date(element.dt *  1000).getHours()}:00</p>
    
     
    </div>
     `
      );
    });

    data.daily.forEach((element) => {
      document.querySelector(".scrool").insertAdjacentHTML(
        "beforeend",
        `
       <div class="elem">
       <p>${new Date(element.dt * 1000).toLocaleDateString('ru-ru', { weekday: 'short' })}</p>
       
       <img src="http://openweathermap.org/img/wn/${
         element.weather[0].icon
       }@2x.png"> 
       <p>${Math.floor(Number(element.temp.max))}&deg;C</p>
       </div>
       `
      );
    });
  });




