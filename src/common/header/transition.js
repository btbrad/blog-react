function bindListener() {
  let searchBox = document.querySelector('#search-box')
  let searchIcon = document.querySelector('.search-icon')

  searchBox.addEventListener('click', () => {
    searchBox.classList.add('expand')
  })

  searchBox.addEventListener('transitionstart', () => {
    console.log('动画开始')
    console.log(searchBox.getBoundingClientRect().width)
  })

  searchBox.addEventListener('transitionend', () => {
    console.log('动画结束')
    console.log('是否展开', searchBox.classList.contains('expand'))
    if (searchBox.classList.contains('expand')) {
      searchIcon.style.display = 'inline-flex'
      searchIcon.style.background = '#999'
      searchIcon.style.justifyContent = 'center'
      searchIcon.style.alignItems = 'center'
      searchIcon.style.borderRadius = '50%'
      searchIcon.style.top = '2px'
      searchIcon.style.color = '#fff'
    } else {
      searchIcon.style.display = 'inline'
      searchIcon.style.background = 'transparent'
      searchIcon.style.color = '#000'
    }
  })

  document.addEventListener('click', (e) => {
    if (e.target.getAttribute('id') !== 'search-box') {
      searchBox.classList.remove('expand')
    }
    e.stopPropagation()
  })
}

export default bindListener