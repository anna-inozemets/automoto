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

const modalWindow = document.querySelector('.modal')
const modalWrappers = document.querySelectorAll('.modal__wrapper')
const closeModalButtons = document.querySelectorAll('.close-modal')
const openConnectModal = document.querySelector('.open-modal--aditional');
const openMainModal = document.querySelector('.open-modal-main');

function toggleScrollBody() {
  document.body.classList.toggle('no-scroll')
}

function openModalWindow(className) {
  toggleScrollBody();
  modalWindow.classList.add('active')

  modalWrappers.forEach(modalWrapper => {
    modalWrapper.classList.add('hidden')

    if (modalWrapper.classList.contains(className)) {
      modalWrapper.classList.remove('hidden')
    }
  })
}

function closeModalWindow() {
  toggleScrollBody();
  modalWindow.classList.remove('active')
}

closeModalButtons.forEach(closeModalButton => {
  closeModalButton.addEventListener('click', function() {
    closeModalWindow();
  })
})
openConnectModal.addEventListener('click', function() {
  openModalWindow('modal__wrapper--additional')
})
openMainModal.addEventListener('click', function() {
  openModalWindow('modal__wrapper--main')
});

const buttonMoreContent = document.querySelector('.more-project-text');
const moreContent = document.querySelector('.project__content-text');


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
const logoImg = document.querySelector('.header-mobile-logo-img');

openBurgerMenu.addEventListener('click', function() {
  openBurgerMenu.classList.toggle('open');
  burgerMenu.classList.toggle('open');

  const isOpen = openBurgerMenu.classList.contains('open');

  if (isOpen) {
    logoImg.src = './images/logo--black.svg'
  } else {
    logoImg.src = './images/logo.svg'
  }
});

const imgToZoom = document.querySelector('.project__content-photo-img');

imgToZoom.addEventListener('click', function() {
  imgToZoom.classList.toggle('zoom');
})
