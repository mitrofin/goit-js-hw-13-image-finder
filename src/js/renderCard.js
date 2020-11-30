import appendMarkUp from './appendMarkUp';
import cardTmpl from '../templates/imagesCard.hbs';
import apiService from './apiService.js';
const api = new apiService();


 export default function renderCard({ hits }) {
    console.log(hits);
    const markUp = cardTmpl(hits);
    appendMarkUp(markUp);
}