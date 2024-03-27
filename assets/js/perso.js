// SCROLL TO ANCHOR
function scrollToAnchor(id, margin = 0) {
    $('html,body').animate({ scrollTop: $('#' + id).offset().top - margin }, 'fast');
}

// PHOTOSWIPE
function photoswipe(items, index) {
    var options = {
        index: index
    },
        pswpElement = document.querySelectorAll('.pswp')[0],
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
}

$('.photoswipe').click(function (e) {
    e.preventDefault();
    var items = [],
        src_clicked = $(this).find('img')[0].currentSrc,
        index
    i = 0;

    $(this).parents('.photoswipe_div').find('.photoswipe img').each(function () {
        var w = this.naturalWidth,
            h = this.naturalHeight,
            coef;

        // On agrandi selon un coef, en fonction de sa taille initiale
        if (w > 900) { coef = 2; }
        else { coef = 3; }

        items[i] = {
            src: this.src,
            w: w * coef,
            h: h * coef
        };

        if (src_clicked == this.src) { index = i; }
        i++;
    });

    photoswipe(items, index);
});

// A PROPOS - SERVICES - Click sur un service -> scroll to image.
$('#page-apropos .wt-icon-box-wraper').click(function () {
    scrollToAnchor('service-photos', 100);
});

// PETIT BUG REALISATIONS CATEGORIE PREDEFINIE DANS L'URL
function triggerclick() {
    var $triggerclick = $('#realisations-page').find('.triggerclick a');
    if ($triggerclick.length == 1) {
        setTimeout(function () {
            $triggerclick.trigger('click');
            console.log('clicked');
        }, 1000);
    }
};

// TRASH
$('.action.del').click(function (e) {
    e.preventDefault();
    var lien = $(this).attr('href');

    alertify.confirm('SUPPRIMER', 'ÃŠtes-vous sÃ»r de vouloir supprimer ceci ?', function () {
        window.location.href = lien;
    }, function () {
        // Si non, rien.
    }).set('labels', { ok: 'Oui', cancel: 'Annuler' });
})

// SET COOKIES
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

$('#cookie-popup .ok').click(function (e) {
    e.preventDefault();
    setCookie('cookies', 'accepted', 365);
    $('#cookie-popup').hide();
});
$('#refuseCookies').click(function (e) {
    e.preventDefault();
    setCookie('cookies', 'refused', 7);
    $('#cookie-popup').hide();
    alert('Votre choix a bien Ã©tÃ© pris en compte');
});


$(document).ready(function () {
    triggerclick();
});