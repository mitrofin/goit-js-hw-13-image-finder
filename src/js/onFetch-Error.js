import showError from './show-error';

export default function onFetchError(error) {
    console.log('catch');
    showError();
}
