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



// const pmScheme = document.querySelector('.pm-scheme');
// const greenSchool = document.querySelector('.green-school');
// const meeting = document.querySelector('.meeting');

// const psk = document.querySelector('.psk');
// const gs = document.querySelector('.gs');
// const fm = document.querySelector('.fm');

// // Initially show only PMKUSUM Scheme images
// psk.classList.add('show');
// gs.classList.remove('show');
// fm.classList.remove('show');

// pmScheme.addEventListener('click', () => {
//   psk.classList.add('show');  
//   gs.classList.remove('show'); 
//   fm.classList.remove('show');

//   pmScheme.classList.add('photo-active');
//   greenSchool.classList.remove('photo-active');
//   meeting.classList.remove('photo-active');
// });

// greenSchool.addEventListener('click', () => {
//   gs.classList.add('show');   
//   psk.classList.remove('show'); 
//   fm.classList.remove('show');

//   pmScheme.classList.remove('photo-active');
//   greenSchool.classList.add('photo-active');
//   meeting.classList.remove('photo-active');
// });

// meeting.addEventListener('click', () => {
//   fm.classList.add('show');   
//   psk.classList.remove('show'); 
//   gs.classList.remove('show');

//   pmScheme.classList.remove('photo-active');
//   greenSchool.classList.remove('photo-active');
//   meeting.classList.add('photo-active');
// }


const pmScheme = document.querySelector('.pm-scheme');
const greenSchool = document.querySelector('.green-school');
const meeting = document.querySelector('.meeting');

const psk = document.querySelector('.psk');
const gs = document.querySelector('.gs');
const fm = document.querySelector('.fm');

if (pmScheme && greenSchool && meeting && psk && gs && fm) {
  // Initially show only PMKUSUM Scheme images
  psk.classList.add('show');
  gs.classList.remove('show');
  fm.classList.remove('show');

  pmScheme.addEventListener('click', () => {
    psk.classList.add('show');
    gs.classList.remove('show');
    fm.classList.remove('show');

    pmScheme.classList.add('photo-active');
    greenSchool.classList.remove('photo-active');
    meeting.classList.remove('photo-active');
  });

  greenSchool.addEventListener('click', () => {
    gs.classList.add('show');
    psk.classList.remove('show');
    fm.classList.remove('show');

    pmScheme.classList.remove('photo-active');
    greenSchool.classList.add('photo-active');
    meeting.classList.remove('photo-active');
  });

  meeting.addEventListener('click', () => {
    fm.classList.add('show');
    psk.classList.remove('show');
    gs.classList.remove('show');

    pmScheme.classList.remove('photo-active');
    greenSchool.classList.remove('photo-active');
    meeting.classList.add('photo-active');
  });
} else {
  console.error("One or more elements not found in the DOM.");
}
