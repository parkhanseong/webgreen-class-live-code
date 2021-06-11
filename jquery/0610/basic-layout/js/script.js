'use strict';

// 기본 세팅 1
// $(document).ready(function(){
    // })
    
// 기본 세팅 2
$(function(){
    // header scroll event
    var $header = $('#header');
    var $arrowUp = $('#arrowUp');

    $(window).scroll(function(){
        // number가 반환된다 = $를 붙이지 않는다 ( 개인 스타일 )
        var scrollTop = $(window).scrollTop();
        /* outerHeight는 border까지의 높이 포함 */
        var headerHeight = $('#header').outerHeight();
        var aboutHeight = $('#about').outerHeight();
        // header가 감춰졌을때 fixed를 해서 따라오게 한다
        // 스크롤된 값이 헤더의 높이보다 커지면

        if( scrollTop > headerHeight ){
            $header.addClass('fixed');
        }else{
            $header.removeClass('fixed');
        }

        // aboutSection을 지나치면 보여라
        // scrollTop 값이 about section 높이보다 커지면
        if( scrollTop > aboutHeight ){
            $arrowUp.addClass('visible');
        }else{
            $arrowUp.removeClass('visible');
        }        

    })

    // toggle ele
    // gnb ele
    var $toggle = $('.toggle'),
        $gnb = $('.gnb'),
        $dimmed = $('#dimmed');

    $($toggle).click(function(){
        $dimmed.toggleClass('visible');
        $(this).toggleClass('active');
        $($gnb).toggleClass('visible');
    })

    // dimmed effect
    $dimmed.click(function(){
        $(this).removeClass('visible');
        $($gnb).removeClass('visible');
        $toggle.removeClass('active');
    })

    // gnb__item window scroll 
    var $gnbMenu = $('.gnb__menu');
    $gnbMenu.click(function(){
        // dataTarget #about, #skills, #contact
        var dataTarget = $(this).attr('data-target');
        // target은 클릭한 메뉴의 엘리먼트다
        var $target = $(dataTarget);
        var distance = $target.offset().top;
        $('html, body').animate({scrollTop: distance});
    })

    // arrow up window scroll
    $arrowUp.click(function(){
        $('html, body').animate({scrollTop: 0})
    })
})