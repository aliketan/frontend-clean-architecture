(function ($) {
    // define 'script' object and current version
    var main = {};
    main.version = '1.0.0';

    main.app = { 
        isMobile: function () {
            var e = !1;
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
                navigator.userAgent
            ) ||
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                    navigator.userAgent.substr(0, 4)
                )) &&
                (e = !0),
                1 == e && $("body").addClass("mobile");
        },     
        pages:{
            index:function(){

                //home slider
                var homeSlider = function(){
                    var carousel = $('.home__slider').owlCarousel({
                        loop: true,
                        nav: false,
                        dots: false,
                        items: 1,
                        margin: 0,
                        autoplay: false,
                        autoplayTimeout: 7000,
                        autoHeight: false,
                        responsive: {
                            0: { items: 1 },
                            640: { items: 1 },
                            768: { items: 1 },
                            992: { items: 1 },
                            1280: { items: 1 }
                        },
                        onInitialized: function () {}
                    });
                }

                //pagination
                var pagination = function() {
                    var paginationContainer = $(".index__banner__pagination");

                    paginationContainer.find("li a").on("click", function(e){
                        e.preventDefault();
                        var item = $(this);
                        item.closest("li").addClass("active").siblings().removeClass("active");
                    });

                    window.addEventListener("scroll", function(){
                        var scroll = $(window).scrollTop();
                        paginationContainer.find("li").each(function(){
                            var item = $(this);
                            var target = $(item.find("a").attr("href"));
                            var offset = target.offset().top - 5;
                            var height = target.outerHeight();
                            if(scroll >= offset && scroll < offset + height){
                                item.addClass("active").siblings().removeClass("active");
                            }
                        });
                    });
                }

                //run functions
                homeSlider();
                pagination();
            }
        },
        init: function(){
            main.app.plugins.owlCarousel();
            main.app.plugins.scrollTo();
            main.app.plugins.mobileMenu();
        },
        utility: {
            cookie: {
                get: function(key) {
                    var c = $.cookie(key);
                    return c;
                },
                add: function(key,value, expiry = 1) {
                    $.cookie(key, value, { expires: expiry });
                },
                remove: function(key) {
                    $.removeCookie(key);
                }
            },
            validation: {
                number: function (thi) {
                    thi.on("keypress", function (event) {
                        if (((event.keyCode < 48) || (event.keyCode > 57)) && (event.keyCode != 46))
                            return false;
                        if (event.keyCode == 46 && instr(thi.value, ".") >= 0)
                            return false;
                    });
        
                },
                letter: function (thi) {
                    thi.on("keypress", function (event) {
                        var regEx = /^\s*[a-zA-Z,ç,Ç,ğ,Ğ,ı,İ,ö,Ö,ş,Ş,ü,Ü,\s]+\s*$/g;
                        var key = String.fromCharCode(event.which);
                        if (event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || regEx.test(key)) {
                            return true;
                        }
                        return false;
                    });
                },
                email: function(value)
                {
                    var pattern = new RegExp(/^[a-z]{1}[\d\w\.-]+@[\d\w-]{3,}\.[\w]{2,3}(\.\w{2})?$/);
                    return pattern.test(value);
                }
            }
        },
        plugins: {
            owlCarousel:function(){

                $("*[data-owl]").each(function(){
                    var slider = $(this);
                    var loop = $(this).find(".item").length > 1 && $(this).attr("data-loop")!=undefined ? JSON.parse($(this).attr("data-loop")) : false;
                    var nav = $(this).find(".item").length > 1 && $(this).attr("data-nav")!=undefined ? JSON.parse($(this).attr("data-nav")) : false;
                    var dots = $(this).attr("data-dots")!=undefined ? JSON.parse($(this).attr("data-dots")) : false;
                    var items = $(this).attr("data-items") !=undefined ? parseInt($(this).attr("data-items")) : 1;
                    var autoplay = $(this).attr("data-autoplay")!=undefined ? JSON.parse( $(this).attr("data-autoplay")) : false;
                    var margin = $(this).attr("data-margin")!=undefined ? parseInt($(this).attr("data-margin")) : 0;
                    var xs = $(this).attr("data-xs")!=undefined ? parseInt($(this).attr("data-xs")) : items;
                    var sm = $(this).attr("data-sm")!=undefined ? parseInt($(this).attr("data-sm")) : items;
                    var md = $(this).attr("data-md")!=undefined ? parseInt($(this).attr("data-md")) : items;
                    var lg = $(this).attr("data-lg")!=undefined ? parseInt($(this).attr("data-lg")) : items;
                    var autoHeight = $(this).attr("data-autoheight")!=undefined ? JSON.parse( $(this).attr("data-autoheight")) : false;
                    var dotContainer = $(this).attr("data-dotcontainer")!=undefined ? JSON.parse($(this).attr("data-dotcontainer")) : false;
                    var customNav = $(this).attr("data-custom-nav");
                    var itemvideo =$(this).attr("data-video")!=undefined ? JSON.parse( $(this).attr("data-video")) : false;
        
                    var rtl = $("body").attr("dir") == "rtl" ? true : false;
        
                    var carousel = slider.owlCarousel({
                        loop: loop,
                        nav: nav,
                        dots: dots,
                        items: items,
                        margin: parseInt(margin),
                        autoplay: autoplay,
                        autoHeight: autoHeight,
                        navText: ["",""],
                        rtl: rtl,
                        video:itemvideo,
                        responsive: {
                            0: { items: xs },
                            640: { items: xs },
                            768: { items: sm },
                            992: { items: md },
                            1280: { items: lg }
                        },
                        onInitialized: function () {
                            if (dotContainer) {
                                slider.append("<div class=\"container controls-container\"></div>");
                                slider.find(".owl-controls").detach().appendTo('.controls-container');
                                var i = 1;
                                slider.find(".owl-dots .owl-dot").each(function () {
                                    $(this).html(i);
                                    i++;
                                });
                            }
                            OwlDots();
                        }
                    });
        
                    carousel.on('changed.owl.carousel', function (event) {
                        if (event.item.count - event.page.size == event.item.index)
                            $(event.target).find('.owl-dots div:last').addClass('active').siblings().removeClass('active');
            
                            $(event.target).find(".owl-item").find(".effect").each(function () {
                                $(this).removeClass($(this).data("class"));
                            });
                    
                            $(this).find(".owl-item").eq(event.item.index).find(".effect").each(function () {
                                $(this).addClass($(this).data("class"));
                            });
                    });
        
                    if (customNav != undefined && customNav.length > 0) {
                        $(customNav.split(',')[0]).on('click',function () {
                            carousel.trigger('prev.owl.carousel');
                        });
            
                        $(customNav.split(',')[1]).on('click', function () {
                            carousel.trigger('next.owl.carousel');
                        });
                    }
        
                    $(window).on('resize', function () {
                        OwlDots();
                    });
        
                    function OwlDots() {
                        if (slider.find(".owl-controls .owl-dot").length <= 1) {
                            slider.find(".owl-controls .owl-dot").hide();
                        } else {
                            slider.find(".owl-controls .owl-dot").show();
                        }
                    }
                });
        
            },
            scrollTo:function(){
                $("*[scroll-to]").on("click", function (e) {
                    e.preventDefault();
                    var item = $(this);
                    var target = item.attr("href");
                    $("html, body").animate({
                        scrollTop: $(target).offset().top
                    }, 100);
                });
            },
            mobileMenu:function() {
                $("*[data-mobilemenu='true']").each(function () {
                    $(this).mnav();
                    $(this).css({"opacity":"1"});
            
                    var api = $(this).data("mnav");
    
                    $(this).prepend("<a href=\"javascript:void(0);\" class=\"mobilemenu-close\">x</a>");
                    $(".mobilemenu-close").on('click', function () {
                        $(".mobilemenu-menu_offcanvas.mobilemenu-menu_opened").removeClass("mobilemenu-menu_opened");
                        api.close();
                    });
                });
            }
        }
    };
    window.main = main;

})(jQuery);

$(document).ready(function () {
    var library = new Script();
    main.init();
});

function Script() {
    main.app.init();
}

main.init = function () {
    var module = this.getModul().split(',');
    for (var i = 0; i < module.length; i++) {
        this.runModule(module[i]);
    }
};

main.getModul = function () {
    var scripts = document.getElementsByTagName("BODY")[0];
    var modulePage = scripts.getAttribute("data-template");
    return modulePage;
};

main.runModule = function (module) {
    switch (module) {
        case "index":
            main.app.pages.index();
            break;
        default:
            break;
    }
}