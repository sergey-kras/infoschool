module.exports = function showMore($) {
    const $button = $('.case__button');

    $button.click(handleClick);

    function handleClick(e){
        const $parent = $(e.target).closest('.bigPersonCards__item');
        const $rotateIcon = $parent.find('.button__icon');
        const $textBlock = $parent.find('.case__text');
        const isOpen = $parent.data('isOpen');

        if(isOpen) {
            $textBlock.css({ height: '2.3rem' });
            $rotateIcon.css({ transform: 'rotate(0deg)' });
        } else {
            $textBlock.css({ height: 'auto' });
            $rotateIcon.css({ transform: 'rotate(180deg)' });
        }
        $parent.data('isOpen', !isOpen);
    }
}