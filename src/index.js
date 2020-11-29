import './styles.css';
import apiService from './js/apiService.js';
import "material-design-icons/iconfont/material-icons.css";
import getRefs from './js/get-refs';
import onScroll from './js/scroll';
import ClearResult from './js/clearResult';
import ClearPage from './js/clear-Page';
import showInfo from './js/show-info';
import OnLoadMore from './js/onLoadMore';
import OnFetchError from './js/onFetch-Error';
import RenderCard from './js/render-card';

const debounce = require('debounce');
const api = new apiService();
const refs = getRefs();

refs.searchForm.addEventListener('input', debounce(onSearch, 500));
refs.clickButton.addEventListener('click', OnLoadMore);

function onSearch(event) {
    event.preventDefault();
    ClearPage()
    ClearResult();
    api.resetPage();
    api.img = event.target.value;
    if (api.img.length === 0 || api.img === " ") {
        ClearResult();
        showInfo();
        return;
    } 
    
    try {
        api.fetchApi().then(RenderCard)
    onScroll();
    } catch (error) {
        OnFetchError()
    }
}





