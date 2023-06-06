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

const carButton = document.querySelector('#carButton');
const bikeButton = document.querySelector('#bikeButton');
const allButton = document.querySelector('#allButton');

const carContent = document.querySelector('#carContent');
const bikeContent = document.querySelector('#bikeContent');

carButton.addEventListener('click', function() {
  tabButtons.forEach(tabButton => {
    tabButton.classList.remove('active')
  })
  tabContents.forEach(tabContent => {
    tabContent.classList.remove('active')
  })

  this.classList.add('active');
  carContent.classList.add('active');
});

bikeButton.addEventListener('click', function() {
  tabButtons.forEach(tabButton => {
    tabButton.classList.remove('active')
  })
  tabContents.forEach(tabContent => {
    tabContent.classList.remove('active')
  })

  this.classList.add('active');
  bikeContent.classList.add('active');
});

allButton.addEventListener('click', function() {
  tabButtons.forEach(tabButton => {
    tabButton.classList.remove('active')
  })
  tabContents.forEach(tabContent => {
    tabContent.classList.add('active')
  })

  this.classList.add('active');
});

const openConnectModal = document.querySelector('.open-modal');
const closeConnectModal = document.querySelector('.close-modal');
const connectModal = document.querySelector('.modal')

openConnectModal.addEventListener('click', function() {
  connectModal.classList.add('active');
});

closeConnectModal.addEventListener('click', function() {
  connectModal.classList.remove('active');
})
