let btn = document.querySelector('.nav-menu')
let menu = document.querySelector('.header-menu')
let cover = document.querySelector('.cover')
let main = document.querySelector('.main')
let resume = document.querySelectorAll('.resume-left-wrapper')
let tag = document.querySelectorAll('.resume-left-wrapper__title')
let allItems = document.querySelectorAll('.portfolio-menu__item')

let portfoilo = document.querySelectorAll('.portfolio-menu__item')

let headerSvg = document.querySelector('.header__svg')
let allLinks = document.querySelectorAll('.header-menu__link')
btn.addEventListener('click', () => {
    btn.classList.toggle('nav--active')
    menu.classList.toggle('header-menu--active')
    cover.classList.toggle('cover--active')
    main.classList.toggle('main--active')
})

headerSvg.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-theme')
    if (document.documentElement.className.includes('dark-theme')) {
        localStorage.setItem('theme', 'dark-theme')
    }else {
        localStorage.setItem('theme', 'light-theme')

    }
})

allLinks.forEach((todo) => {
    todo.addEventListener('click', () => {
        document.querySelector('.item--active').classList.remove('item--active')
        todo.classList.add('item--active')
    })
})


resume.forEach((todo) => {
 
    todo.addEventListener('click', (item) => {
        document.querySelector('.resume--active').classList.remove('resume--active')
        todo.classList.add('resume--active')
        document.querySelector('.resume--show').classList.remove('resume--show')
        let itemtarget = item.target.dataset.id
        console.log(itemtarget)
        document.querySelector(itemtarget).classList.add('resume--show')
    })
})


allItems.forEach((todo) => {
    todo.addEventListener('click', (item) => {
        document.querySelector('.portfolio-item--active').classList.remove('portfolio-item--active')
        todo.classList.toggle('portfolio-item--active')
        document.querySelector('.portfolio--show').classList.remove('portfolio--show')
        let getItem = item.target.dataset.id
        
       document.querySelector(getItem).classList.add('portfolio--show')

    })
})



window.onload = () => {
    let getlocal = localStorage.getItem('theme')

    if (getlocal === 'dark-theme') {
        document.documentElement.classList.add(getlocal)

    }
}


/* swiiiippper */

const swiper = new Swiper('.swiper', {
    breakpoints: {
        // when window width is >= 320px
        slidesPerView: 1,

        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1200 : {
            slidesPerView : 3,
        }
    } ,

    pagination: {
      el: '.swiper-pagination',
    },


  });


/* start portfoilo */

