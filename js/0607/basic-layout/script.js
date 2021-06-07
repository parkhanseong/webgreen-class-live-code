'use strict';

// window.onload 프로퍼티를 이용해 코드 실행
// window.onload = function(){
// }

var toggle = document.getElementById('toggle');
var navbar = document.querySelector('.navbar');

// toggle을 클릭 했을때
toggle.addEventListener('click', function(){
    this.classList.toggle('active');
    navbar.classList.toggle('active');
    // navbar에 classList에 active 붙여줘
})


/* arrow top 구현 */
/* 
 1. 초기상태는 숨긴다 > css (완료)
 2. 스크롤이 일정부분 내려오면 보이게 한다 if
 3. 스크롤이 일정부분 올라가면 숨기게 한다 else
 4. arrow top을 클릭하면 스크롤을 최상단으로 올린다
    addEventListener('scroll', funtion(){})
*/
const arrowTop = document.getElementById('arrowTop');
document.addEventListener('scroll', function(){
    if( window.scrollY > 73){
        arrowTop.classList.add('visible');
    }else{
        arrowTop.classList.remove('visible');
    }
})

// arrow top 클릭 했을때 scroll이 제일 위로 올라가게
arrowTop.addEventListener('click', function(event){
    // event가 발생하면 event객체는 자동으로 전달된다

    // ---------------------------------------------
    // a 태그는 기본적으로 이동의 기동을 가지고 있다
    // 그래서 scrollTo 이전에 화면 이동이 발생해 버린다
    // 그러므로 preventDefault()로 막는다
    // ---------------------------------------------
    console.log(event);

    event.preventDefault();
    // console.log('>>> click arrow top')
    window.scrollTo({ top: 0, behavior: 'smooth' })
});