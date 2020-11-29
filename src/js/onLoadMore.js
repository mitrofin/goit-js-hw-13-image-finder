import apiService from '../js/apiService.js';
import renderCard from '../js/render-card';
import onScroll from '../js/scroll';

const api = new apiService();


export default function onLoadMore() {
    api.fetchApi().then(renderCard)
    onScroll()
}