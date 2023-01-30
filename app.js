
const popup = document.querySelector('.popup');
const wifiImg = document.querySelector('.uil');
const update = document.querySelector('.reconnect');
getIp();

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

update.addEventListener('click', function () {
    document.querySelector('.loading-con').innerHTML = `<img class="loading" src = "loading.gif">`;
    getIp();
})





