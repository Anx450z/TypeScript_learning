"use strict";
const button = document.querySelector('button'); // suppress TS error by using bang operator (!)
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    console.log('Clicked');
});
//# sourceMappingURL=app.js.map