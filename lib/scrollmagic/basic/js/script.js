
$(function(){
    // 생성자 
    var controller = new ScrollMagic.Controller();

    var logo = TweenMax.to('.logo', 1, {
        x: -100
    })
    var scene0 = new ScrollMagic.Scene({
        triggerElement: ".first",
        triggerHook: 0,
        offset: 0,
        duration: "100%"
    })
    .setTween(logo)
    .addTo(controller)
   /*  .addIndicators({
        name: '로고'
    }) */

      // 매개변수(누구, 시간, 어떻게)
    // 마지막 엘리먼트의 상태
    var box = TweenMax.to('.box', 1, {
        x: 300, /* x축으로 300px 이동 */
        y: 100, /* y축으로 100px 이동 */
        rotate: 360,
        background: "red",
        // autoAlpha: 1,
        borderRadius: "50%"
    })

    // 변수는 자유다
    var scene = new ScrollMagic.Scene({
        /* 
            트리거를 발생시킬 엘리먼트 범위
        */
        triggerElement: ".first",
        /* 
            trigger의 위치 0 ~ 1
            y축
        */
        triggerHook: 0,
        /* 
            trigger 시작 event 위치 지정
        */
        offset: 100,
        /* 
            trigger의 마지막 event 위치
            default: 100vh
         */
        duration: "100%"
    })
    .setTween(box)
    .addTo(controller)
    /* .addIndicators({
        name: '박스'
    }) */

    // 최종 font 모습
    var font = TweenMax.to('.font', 1, {
        x: -1300,
        color: "red"
    })
    var scene2 = new ScrollMagic.Scene({
       triggerElement: ".second",
       triggerHook: 0,
       offset: 0,
       duration: "100%"
    })
    .setTween(font)
    .addTo(controller)
    /* .addIndicators({
        name: '백그라운드 폰트'
    }) */

    // 백그라운드 변화 주기
    var background = TweenMax.to('.third', 1, {
        backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)"
    })
    var scene3 = new ScrollMagic.Scene({
        triggerElement: ".third",
        triggerHook: 0,
        offset: 0,
        duration: "100%"
     })
     .setTween(background)
     .addTo(controller)
     /* .addIndicators({
         name: '백그라운드'
     }) */

  
})