function menu($) {
    let opened = false;
    let $burger = $('.burger__items');
    let $overley = $('.burger__overley');
    let $menu = $('.mainMenu__content');
    let $body = $('body');
    let OPEN_CLASS = '_opened';

    $burger.on('click', switcher);

    function switcher(event) {
        if (!opened) {
            $overley.addClass(OPEN_CLASS);
            $burger.addClass(OPEN_CLASS);
            $menu.addClass(OPEN_CLASS);
            $body.css({ overflow: 'hidden' });

        } else {
            $overley.removeClass(OPEN_CLASS);
            $menu.removeClass(OPEN_CLASS);
            $burger.removeClass(OPEN_CLASS);
            $body.css({ overflow: 'inherit' });
        }
        opened = !opened;
    }
};

module.exports = menu;