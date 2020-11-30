import getRefs from './getRefs';

const refs = getRefs();

export default function appendMarkUp(html) {
    refs.containerList.insertAdjacentHTML('beforeend', html);
}