const windowBackground = document.getElementById('window-background')
const windowContainer = document.getElementById('window-container')
const openModal = document.querySelector('.open-modal');
const closeModal = document.getElementById('close-modal')



openModal.addEventListener('click', () =>
  windowBackground.style.display = 'flex'
);

const closeWindow = () => {
  windowContainer.classList.add('close')

  setTimeout(() => {
    windowContainer.classList.remove('close')
    windowBackground.style.display = 'none'
  }, 1000);
}

closeModal.addEventListener('click', () => closeWindow())

window.addEventListener('click', e => e.target == windowBackground && closeWindow())
