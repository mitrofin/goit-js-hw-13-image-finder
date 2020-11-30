import apiService from './apiService.js';
import renderCard from './renderCard';
import onScroll from './scroll';

const api = new apiService();


export default function onLoadMore() {
    api.fetchApi().then(renderCard)
    onScroll()
}