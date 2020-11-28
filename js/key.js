console.log('key.js');
const code = document.querySelector('.code');
const shift = document.querySelector('.shift');
const listen = document.querySelector('.listener');
const altkey = document.querySelector('.altkey');
const composedkey = document.querySelector('.composedkey');
const ctrlKey = document.querySelector('.ctrlKey');





const keyCode = document.querySelector('.keycode');
const keyP = document.querySelector('.key');

function pressiona(){
    const pressionada = document.addEventListener('keydown', function (key) {
        
        keyP.innerHTML = `${key.keyCode}`;
        keyCode.innerHTML = `${key.key}`;
        code.innerHTML = `${key.code}`;
        shift.innerHTML = `${key.shiftKey}`;
        altkey.innerHTML = `${key.altKey}`;
        composedkey.innerHTML = `${key.composed}`;
        ctrlKey.innerHTML = `${key.ctrlKey}`;
        console.log(key)
        
      
    })
    
}//class="embed-responsive-item" 

pressiona();







