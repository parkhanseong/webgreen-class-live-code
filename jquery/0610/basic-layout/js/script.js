'use strict';

// 기본 세팅 1
// $(document).ready(function(){
    // })
    
// 기본 세팅 2
$(function(){
    // header scroll event

    // toggle ele
    // gnb ele
    var $toggle = $('.toggle'),
        $gnb = $('.gnb');

    $($toggle).click(function(){
        $(this).toggleClass('active');
        $($gnb).toggleClass('visible');
    })

    // gnb visible

    // dimmed effect

    // gnb__item window scroll 

    // arrow up window scroll

})