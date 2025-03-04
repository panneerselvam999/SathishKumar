// document.getElementById('nav-toggle').addEventListener('click', function () {
//   const navList = document.querySelector('.nav__list');
//   const nav__content = document.querySelector('.nav__content');

//   navList.classList.toggle('active');
//   nav__content.classList.toggle('active');
// });

document.getElementById('nav-toggle').addEventListener('click', function () {
  const navList = document.querySelector('.nav__list');
  navList.classList.toggle('active');
});


// const imgTitle = document.querySelector('.img-title');
// const imgImg = document.querySelector('.img-img');

// imgTitle.addEventListener('click', () => {
//   imgImg.classList.toggle('show');
// });


// const pmScheme = document.querySelector('.pm-scheme');
// const greenSchool = document.querySelector('.green-school');

// const psk = document.querySelector('.psk');
// const gs = document.querySelector('.gs');

// pmScheme.addEventListener('click', () => {
//   gs.classList.toggle('show');
//   psk.classList.toggle('hide');
// });

// greenSchool.addEventListener('click', () => {
//   gs.classList.toggle('hide');
//   psk.classList.toggle('show');
// });



const pmScheme = document.querySelector('.pm-scheme');
const greenSchool = document.querySelector('.green-school');

const psk = document.querySelector('.psk');
const gs = document.querySelector('.gs');

// Initially show only PMKUSUM Scheme images
psk.classList.add('show');
gs.classList.remove('show');

pmScheme.addEventListener('click', () => {
  psk.classList.add('show');  // Show PMKUSUM images
  gs.classList.remove('show'); // Hide Green School images
});

greenSchool.addEventListener('click', () => {
  gs.classList.add('show');   // Show Green School images
  psk.classList.remove('show'); // Hide PMKUSUM images
});
