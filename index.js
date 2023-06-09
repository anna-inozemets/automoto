Fancybox.bind("[data-fancybox]", {});

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

const tabButtons = document.querySelectorAll('.cases__button');
const tabContents = document.querySelectorAll('.cases__cards');

if (tabButtons) {
  tabButtons.forEach((tabButton, index) => {
    tabButton.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      tabButton.classList.add('active');
      tabContents[index].classList.add('active');
    });
  });
}

const modalWindow = document.querySelector('.modal');
const modalWrappers = document.querySelectorAll('.modal__wrapper');
const closeModalButtons = document.querySelectorAll('.close-modal');
const closeAnotherModalButton = document.querySelector('.close-modal--with-text');
const openConnectModal = document.querySelectorAll('.open-modal--aditional');
const openMainModal = document.querySelector('.open-modal-main');
const openAnotherFormModal = document.querySelectorAll('.open-modal--another-form');
const screenWidth = window.innerWidth || document.body.clientWidth;

function openModalWindow(className) {
  document.body.classList.add('no-scroll')
  modalWindow.classList.add('active')

  modalWrappers.forEach(modalWrapper => {
    modalWrapper.classList.add('hidden')

    if (modalWrapper.classList.contains(className)) {
      modalWrapper.classList.remove('hidden')
    }
  })
}

function closeModalWindow() {
  document.body.classList.remove('no-scroll')
  modalWindow.classList.remove('active')
}

if (modalWindow) {
  closeModalButtons.forEach(closeModalButton => {
    closeModalButton.addEventListener('click', function() {
      closeModalWindow();
    })
  })
  closeAnotherModalButton.addEventListener('click', function(event) {
    event.preventDefault();
  
    if (screenWidth > 768) {
      closeModalWindow()
    } else {
      openModalWindow('modal__wrapper--main')
    }
  })
  openConnectModal.forEach(button => {
    button.addEventListener('click', function() {
      openModalWindow('modal__wrapper--additional')
    })
  })

  if (openMainModal) {
    openMainModal.addEventListener('click', function() {
      openModalWindow('modal__wrapper--main')
    });
  }
  
  openAnotherFormModal.forEach(button => {
    button.addEventListener('click', function() {
      openModalWindow('modal__wrapper--another-form');
      console.log('click')
    })
  })
}

const buttonMoreContent = document.querySelector('.more-project-text');
const moreContent = document.querySelector('.project__content-text');

if (buttonMoreContent) {
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
}

const imgToZoom = document.querySelector('.project__content-photo-img');

if (imgToZoom) {
  imgToZoom.addEventListener('click', function() {
    imgToZoom.classList.toggle('zoom');
  })
}

