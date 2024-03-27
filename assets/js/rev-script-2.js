
var revapi346,
    tpj = jQuery;

tpj(document).ready(function () {
    if (tpj("#rev_slider_346_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_346_1");
    } else {
        revapi346 = tpj("#rev_slider_346_1").show().revolution({
            sliderType: "standard",
            jsFileLocation: "//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 9000,
            particles: {
                startSlide: "2", endSlide: "2", zIndex: "1",
                particles: {
                    number: { value: 80 }, color: { value: "#ffffff" },
                    shape: {
                        type: "circle", stroke: { width: 0, color: "#ffffff", opacity: 1 },
                        image: { src: "" }
                    },
                    opacity: { value: 0.5, random: true, min: 0.25, anim: { enable: false, speed: 3, opacity_min: 0, sync: false } },
                    size: { value: 2, random: true, min: 0.5, anim: { enable: false, speed: 40, size_min: 1, sync: false } },
                    line_linked: { enable: false, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                    move: { enable: true, speed: 1, direction: "none", random: true, min_speed: 1, straight: false, out_mode: "out" }
                },
                interactivity: {
                    events: { onhover: { enable: false, mode: "repulse" }, onclick: { enable: false, mode: "repulse" } },
                    modes: { grab: { distance: 400, line_linked: { opacity: 0.5 } }, bubble: { distance: 400, size: 40, opacity: 0.4 }, repulse: { distance: 200 } }
                }
            },
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "off",
                arrows: {
                    style: "gyges",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: false,
                    tmp: '',
                    left: {
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: -20,
                        v_offset: 0
                    },
                    right: {
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 20,
                        v_offset: 0
                    }
                }
            },
            responsiveLevels: [1240, 1240, 1240, 480],
            visibilityLevels: [1240, 1240, 1240, 480],
            gridwidth: [1200, 1200, 1200, 480],
            gridheight: [800, 800, 800, 700],
            lazyType: "none",
            parallax: {
                type: "mouse+scroll",
                origo: "slidercenter",
                speed: 400,
                speedbg: 0,
                speedls: 0,
                levels: [1, 2, 3, 4, 5, 6, 7, 8, 12, 16, 47, 48, 49, 50, 51, 55],
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "on",
            stopAfterLoops: 0,
            stopAtSlide: 1,
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: ".site-header",
            fullScreenOffset: "",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./) || ('CSS' in window && 'supports' in window.CSS && !window.CSS.supports('mix-blend-mode', 'screen'))) {

            var bgColor = 'rgba(245, 245, 245, 0.5)';
            //jQuery('.rev_slider .tp-caption[data-blendmode]').removeAttr('data-blendmode').css('background', bgColor);
            jQuery('.rev_slider .tp-caption.tp-blendvideo[data-blendmode]').remove();
        }

        // BEFORE/AFTER INITIALISATION
        RevSliderBeforeAfter(tpj, tpj("#rev_slider_346_1"), {
            arrowStyles: {
                leftIcon: "fa fa-caret-left",
                rightIcon: "fa fa-caret-right",
                topIcon: "fa fa-caret-up",
                bottomIcon: "fa fa-caret-down",
                size: "35",
                color: "#ffffff",
                bgColor: "transparent",
                spacing: "10",
                padding: "0",
                borderRadius: "0"
            },
            dividerStyles: {
                width: "1",
                color: "rgba(255, 255, 255, 0.5)"
            },
            onClick: {
                time: "500",
                easing: "Power2.easeOut",
            },
            cursor: "move",
            carousel: false
        });

        // PARTICLES INITIALISATION
        RsParticlesAddOn(revapi346);

    }



});	/*ready*/