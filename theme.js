const themeSwitcherButton = document.querySelector('.js-theme-switcher')

themeSwitcherButton.addEventListener('click', function() {
    const body = document.querySelector('body')
  
  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme')
  } else {
    body.classList.add('dark-theme')
  }
})