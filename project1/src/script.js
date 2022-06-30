const menuToggle = document.querySelector('.toggle')

// 寻找showcase
const showcase = document.querySelector('.showcase')


menuToggle.addEventListener('click', () => {
    // 定位到toggle 这个class 里面，找是否有active ，有的话删掉
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
})

