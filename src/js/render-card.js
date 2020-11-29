import appendMarkUp from '../js/appendMarkUp';
import cardTmpl from '../templates/images-card.hbs';
import apiService from '../js/apiService.js';
const api = new apiService();


 export default function renderCard({ hits }) {
    console.log(hits);
    const markUp = cardTmpl(hits);
    appendMarkUp(markUp);
}