import * as basicLightbox from 'basiclightbox';

export default function onClickImg({ target: { dataset } }) {
    basicLightbox
        .create(
            `<img width="" height="" src="${dataset.sourse}">`,
        ).show();
}