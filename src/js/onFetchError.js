import showError from './showError';

export default function onFetchError(error) {
    console.log('catch');
    showError();
}
