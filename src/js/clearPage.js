
import getRefs from './getRefs';

const refs = getRefs();

export default function clearPage() {
        refs.containerList.innerHTML = "";
}