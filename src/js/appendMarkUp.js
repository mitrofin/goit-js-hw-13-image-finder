import getRefs from '../js/get-refs';

const refs = getRefs();

export default function appendMarkUp(html) {
    refs.containerList.insertAdjacentHTML('beforeend', html);
}