
let btn = document.querySelectorAll('.btn');
let answer = document.querySelectorAll('.answer')
for (let i = 0; i <btn.length; i++){
    btn[i].onclick = function (){
        answer[i].classList.toggle('active')
        if (answer[i]. classList.contains('active')){
            btn[i].textContent='Показать ответ'}
        else {btn[i].textContent='Скрыть ответ'}
    }
}
