import './styles.css';
import cardTmpl from './templates/images-card.hbs';
import apiService from './js/apiService.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import "material-design-icons/iconfont/material-icons.css";


const { alert, info, error } = require('@pnotify/core');

const debounce = require('debounce');
const api = new apiService();

const refs = {
    searchForm: document.querySelector('.search-form'),
    containerList: document.querySelector('.gallery'),
    clickButton:document.getElementById('button'),
}
refs.searchForm.addEventListener('input', debounce(onSearch, 500));
refs.clickButton.addEventListener('click', onLoadMore);

function onSearch(event) {
    event.preventDefault();
    clearResult();
    clearPage();
    api.img = event.target.value;
    if (api.img.length === 0 || api.img === " ") {
        clearResult();
        const myInfo = info({
            text:
                "Спробуйте ще раз!",
             delay: 700,
        });
        return;
    } 
    
    api.fetchApi().then(renderCard)
        .catch(onFetchError);
     
}

function renderCard({hits}) {
    console.log(hits);
    const markUp = cardTmpl(hits);
    appendMarkUp(markUp);
}
function appendMarkUp(html) {
    refs.containerList.insertAdjacentHTML('beforeend', html);
}
function onLoadMore() {
    api.fetchApi().then(renderCard)
    api.inrementPage()
}

function onFetchError(error) {
    console.log('catch');
    showError();
}

/* function appendCountries(country) {
    const markUp = countryListTmpl(country);
    console.log(markUp);
    const markUpName = countryNameTmpl(country);
    console.log(markUpName);

    if (country.length === 1) {
        return (refs.containerList.insertAdjacentHTML('beforeend', markUp));   
    }

    if (country.length > 1) {
        return (refs.containerList.insertAdjacentHTML('beforeend', markUpName))
    }
} */

function showError() {
    const myError = error({      
    text:
            "Нічого не знайдено! ",
        delay: 700,
    });
   
}
function showAlert() {
    const myAlert = alert({
    text:
            "Багато співпадінь.Уточіть пошук! Використовуйте ENG",
        delay: 700,
    });
    
}
function clearResult() {
        refs.searchForm.value = "";
    }

function clearPage() {
        refs.containerList.innerHTML = "";
}






