
import getRefs from './get-refs';

const refs = getRefs();

export default function clearPage() {
        refs.containerList.innerHTML = "";
}