
// jquery를 사용하려면 아래 초기 구문이 잇어야 한다
/* 
1번 방식

2번 방식
$(function(){
})
*/

// $(document).ready(function(){
$(function(){

    var button = document.querySelector('button');
    var $title = $('h1');
    var $button = $('button');
    
    console.log(button);
    console.log($button);
    
    $button.click(function(){
        console.log('>>> click !! >>>')
    })
})
// })

