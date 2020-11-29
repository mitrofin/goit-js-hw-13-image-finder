import getRefs from '../js/get-refs';

const refs = getRefs();

export default function ClearResult() {
        refs.searchForm.value = "";
    }