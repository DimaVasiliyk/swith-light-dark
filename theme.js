const themeSwitcherButton = document.querySelector('.changes')

themeSwitcherButton.addEventListener('click', function() {
    const body = document.querySelector('body')
  
  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme')
    body.classList.add('light-theme')
  } else {
    body.classList.add('dark-theme')
    body.classList.remove('light-theme')
  }
})