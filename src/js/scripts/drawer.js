
// -------------------------------------------------------------------
// DRAWER
// -------------------------------------------------------------------

function toggleMenuMobile(){
    $('.drawer').toggleClass('is-open');
}

function hideMenuMobile(){
    $('.drawer').removeClass('is-open');
}

function showMenuMobile() {
    $('.drawer').addClass('is-open');
}

$(document).ready(function(){
    $('body').on('click', '.js-drawer-toggle', toggleMenuMobile);
    $('.js-drawer-close, .sys-toggle-menu').on('click', hideMenuMobile);
})
