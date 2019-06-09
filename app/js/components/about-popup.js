const api = require('../api/instance');

function aboutPopup($) {
    const $popupContent = $('.popup__body');
    const $popupClose = $('.popup__close');
    const $popup = $('.popup');
    const $body = $('body');
    const $title = $('.popup__header .title');
    const $button = $('.bigPersonCard__button');

    $button.click(clickHandler);
    $popupClose.click(disactivatePopup);

    function clickHandler(e) {
        activatePopup();
        
        const id = $(e.target).closest('.bigPersonCard').data('id');
        api.get(`/wp-json/wp/v2/posts/${id}`)
            .then(response => {
                const data = response.data;
                $title.html(data.title.rendered);
                $popupContent.html(renderBody(data));
            });
    }

    function activatePopup() {
        $body.css({ overflow: 'hidden' });
        $popup.css({ display: 'block' });
        $popupContent.html(renderPreloader());
        $title.html('');
    }

    function disactivatePopup() {
        $body.css({ overflow: 'inherit' });
        $popup.css({ display: 'none' });
        $popupContent.html(renderPreloader());
        $title.html('');
    }
}

function renderPreloader(){
    return `
    <div class="spinner medium">
        <div class="spinner-wrapper">
            <div class="rotator">
            <div class="inner-spin"></div>
            <div class="inner-spin"></div>
            </div>
        </div>
    </div>`;
}

function renderBody(data){
    const body = data.acf.page_constructor;
    if(!data.acf.page_constructor) return 'У вас незаполненный контакт';

    let result = '';
    body.map(field => {
        const label = field.acf_fc_layout;
        if(label === 'video_block') result += renderVideo(field.code);
        if(label === 'photo_text') result += renderPhotoText({location: field.location.value ,photo: field.photo, text: field.text});
    });

    return result;
}

function renderPhotoText({location, photo, text}) {
    const imageLink = photo.url;

    if(location === 'normal') {
        return `
        <div class="imageText">
            <div class="imageText__text">
            ${text}
            </div>
            <div class="imageText__image" style="background-image: url(${imageLink})"></div>
        </div>`;
    } else {
        return `
        <div class="imageText">
            <div class="imageText__image" style="background-image: url(${imageLink})"></div>
            <div class="imageText__text">
            ${text}
            </div>
        </div>`;
    }
}

function renderVideo(code){
    return `
    <div class="videoBlock">
        <div class="videoBlock__content">
            ${code}
        </div>
    </div>`;
}


module.exports = aboutPopup;