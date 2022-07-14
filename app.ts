const button = document.querySelector('button')!; // suppress TS error by using bang operator (!)

button?.addEventListener('click', () => {
  console.log('Clicked');
});