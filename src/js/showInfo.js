import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
const { info } = require('@pnotify/core');


export default function showInfo() {
    const myInfo = info({
            text:
                "Спробуйте ще раз!",
             delay: 700,
        });
   
}