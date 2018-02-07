$(document).ready(function () {
    "use strict";
    if ($('body').hasClass('left-side-collapsed')) {
        $(".left-side").hide();
    }

    var oHeight = $(window).height();
    $('.main-content').css({
        'minHeight': oHeight
    });

    $('.menu-list > a').click(function () {
        var body = $('body');
        var bodyposition = body.css('position');

        if (bodyposition == 'relative') {
            if (body.hasClass('left-side-show'))
                body.removeClass('left-side-show');
            else
                body.addClass('left-side-show');
            mainContentHeightAdjust();
        }
    });

    $('.sub-menu-list > li > a').click(function () {
        var body = $('body');
        var bodyposition = body.css('position');

        if (bodyposition == 'relative') {
            if (body.hasClass('left-side-show'))
                body.removeClass('left-side-show');
            else
                body.addClass('left-side-show');
            mainContentHeightAdjust();
        }
    });

    function visibleSubMenuClose() {
        $('.menu-list').each(function () {
            var t = $(this);
            if (t.hasClass('nav-active')) {
                t.find('> ul').slideUp(200, function () {
                    t.removeClass('nav-active');
                });
            }
        });
    }

    function mainContentHeightAdjust() {
        // Adjust main content height
        var docHeight = $(document).height();
        if (docHeight > $('.main-content').height()) {
            $('.main-content').height(docHeight);
        }
    }

    //  class add mouse hover
    $('.custom-nav > li').hover(function () {
        $(this).addClass('nav-hover');
    }, function () {
        $(this).removeClass('nav-hover');
    });

    // Menu Toggle
    $('.toggle-btn').click(function () {
        $(".left-side").hide();
        if ($('body').hasClass('left-side-collapsed')) {
            $(".left-side").show();
        }
        var body = $('body');
        var bodyposition = body.css('position');

        if (bodyposition != 'relative') {
            if (!body.hasClass('left-side-collapsed')) {
                body.addClass('left-side-collapsed');
                $('.custom-nav ul').attr('style', '');

                $(this).addClass('menu-collapsed');
            } else {
                body.removeClass('left-side-collapsed chat-view');
                $('.custom-nav li.active ul').css({display: 'block'});

                $(this).removeClass('menu-collapsed');
            }
        } else {
            if (body.hasClass('left-side-show')) {
                body.removeClass('left-side-show');
                $(".left-side").hide();
            } else {
                body.addClass('left-side-show');
                $(".left-side").show();
            }
            mainContentHeightAdjust();
        }
    });

    $(window).on('resize', function () {
        if ($('body').css('position') == 'relative') {
            $('.left-side').hide();
            $('body').removeClass('left-side-collapsed');
        } else {
            $('body').css({left: '', marginRight: ''});
            $('.left-side').show();
        }
        //resizeOnePage();
    });

    $('.menu_toggle_btn').on('click', function() {
        $('.layout').addClass('menu_open');
        if($(this).parents('.header-section').hasClass('index_header')){
            return;
        }else{
            $(this).parents('.header-section').hide();
        }
        $('.content_header').show();
        $('.main_content').css({
            'margin-top': '0'
        });
    });

    $('.content_overlay').on('click', function () {
        $('.layout').removeClass('menu_open');
        $('.header-section').show();
        $('.content_header').hide();
        $('.main_content').css({
            'margin-top': '50px'
        });
    });

   

    // 判断是否在iframe内，调整固定位置内容是否展示
    if (top.location != location) {
        $('.header-section').css({
            'display': 'none'
        });
        $('.main_content').css({
            'marginTop': 0
        })
    }

    
    // 滚动页面隐藏预览弹出框
    $('.main_warpper').scroll(function () {
        if ($('.preview_pop:visible').length == 1) {
            closeIframe();
        } else {
            return;
        }
    });

});