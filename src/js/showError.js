import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
const { error } = require('@pnotify/core');

export default function showError() {
    const myError = error({      
    text:
            "Нічого не знайдено! ",
        delay: 700,
    });
   
}

