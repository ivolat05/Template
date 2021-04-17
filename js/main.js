$(function () {
    $('.menu__burger').click((event) => {
        $('.menu__burger').toggleClass('burger__active'),
            $('.menu').toggleClass('menu__active'),
            $('.menu__list').toggleClass('menu__list-active')
    });
});