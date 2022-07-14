"use strict";
const button = document.querySelector('button'); // suppress TS error
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    console.log('Clicked');
});
