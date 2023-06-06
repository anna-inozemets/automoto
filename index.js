const fileInput = document.querySelector('.upload-input');

fileInput.addEventListener('change', function() {
  const fileLabel = document.querySelector('.upload-label')

  fileLabel.classList.remove('success');
  fileLabel.classList.remove('fail');

  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];

    if (file.name.length !== 0) {
      fileLabel.classList.add('success');
    } else {
      fileLabel.classList.add('fail');
    }
  }
});

const tabButtons = document.querySelectorAll('.cases__button');
const tabContents = document.querySelectorAll('.cases__cards');
const allButton = document.querySelector('#allButton');

tabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    tabButton.classList.add('active');
    tabContents[index].classList.add('active');
  });
});

allButton.addEventListener('click', () => {
  tabButtons.forEach(btn => btn.classList.remove('active'));
  tabContents.forEach(content => content.classList.add('active'));
  allButton.classList.add('active');
});

const openConnectModal = document.querySelector('.open-modal--aditional');
const closeConnectModal = document.querySelector('.close-modal--additional');
const connectModal = document.querySelector('.modal--additional')

openConnectModal.addEventListener('click', function() {
  connectModal.classList.add('active');
});

closeConnectModal.addEventListener('click', function() {
  connectModal.classList.remove('active');
})

const openMainModal = document.querySelector('.open-modal-main');
const closeMainModal = document.querySelector('.close-modal--main');
const mainModal = document.querySelector('.modal--main');

const buttonMoreContent = document.querySelector('.more-project-text');
const moreContent = document.querySelector('.project__content-text');

openMainModal.addEventListener('click', function() {
  mainModal.classList.add('active');
});

closeMainModal.addEventListener('click', function() {
  mainModal.classList.remove('active');
})

buttonMoreContent.addEventListener('click', function() {
  const isHidden = moreContent.classList.contains('hidden');
  moreContent.classList.toggle('hidden');

  if (!isHidden) {
    moreContent.style.maxHeight = `${270}px`;
    buttonMoreContent.innerHTML = 'Більше';
  } else {
    moreContent.style.maxHeight = moreContent.scrollHeight + 'px';
    buttonMoreContent.innerHTML = 'Менше';
  }
});

const openBurgerMenu = document.querySelector('.header-mobile-button');
const burgerMenu = document.querySelector('.header-mobile-nav');

openBurgerMenu.addEventListener('click', function() {
  openBurgerMenu.classList.toggle('open');
  burgerMenu.classList.toggle('open');
});
