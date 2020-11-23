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
    clearPage()
    clearResult();
    api.resetPage();
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
    onScrollTo();
     
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
    onScrollTo()
}

function onFetchError(error) {
    console.log('catch');
    showError();
}


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
function onScrollTo() {
    let value = document.body.scrollHeight;
     setTimeout(() => {
      window.scrollTo({
        top: value,
        left: 0,
        behavior: 'smooth',
      });
    }, 500);
}






