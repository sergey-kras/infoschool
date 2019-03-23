function menu($) {
    let opened = false;
    let $burger = $('.burger__items');
    let $overley = $('.burger__overley');
    let $menu = $('.mainMenu__content');
    let $body = $('body');

    $burger.on('click', switcher);


    function switcher(event) {
        console.log($burger.width());
        if (opened) {
            $overley.addClass('_opened');
            $burger.addClass('_opened');
            $menu.addClass('_opened');
            $body.css({ overflow: 'hidden' });

        } else {
            $overley.removeClass('_opened');
            $menu.removeClass('_opened');
            $burger.removeClass('_opened');
            $body.css({ overflow: 'inherit' });
        }
        opened = !opened;
    }
};

module.exports = menu;