const button = document.querySelector('button')!; // use ! to suppress null check by TS

button.addEventListener('click', () => {
  console.log('Clicked');
});