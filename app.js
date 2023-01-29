let userOnline = true, intervalId, timer = 10;
const popup = document.querySelector('.popup');
const wifiImg = document.querySelector('.uil');


// Проверим есть ли соединение 
async function checkOnline() {
    try {
        //Попробуем получить запрос
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        userOnline = response.status >= 200 && response.status < 300;
    }
    catch (error) {
        userOnline = false;
    }
    statusz(userOnline);
}


function statusz(status) {
    if (!status) {
        getIp();
        document.querySelector('.title').textContent = `Вы в сети, Отлично!`;
        document.querySelector('.title').classList.remove('red');
    }

    else if (status) {
        document.querySelector('.title').textContent = `Вы не в сети..`;
        document.querySelector('.title').classList.add('red');
        document.querySelector('.ip').textContent = "Неизвестно"
        document.querySelector('.country').textContent = "Неизвестно"
        document.querySelector('.city').textContent = "Неизвестно"
    }

}



checkOnline();

// Получим IP пользователя;
function getIp() {
    fetch('https://ipapi.co/json/').then(res => res.json()).then(result => {
        document.querySelector('.loading-con').innerHTML = ` <p class="desc">IP Адрес: <span class="ip">${result.ip}</span>
    <p class="desc">Страна: <span class="country">${result.country}</span></p>
    <p class="desc">Город: <span class="city">${result.city}</span></p>
    </p>`;

        console.log(result);
    }
    )
}
getIp();





document.querySelector('.reconnect').addEventListener('click', function () {

    document.querySelector('.loading-con').innerHTML = `<img class="loading" src = "loading.gif">`;
    statusz();

}

)





