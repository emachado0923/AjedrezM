recibido();


function recibido() {

    
    const colorBack2 = document.getElementById('colorBack2');
    colorBack2.style.background = localStorage.getItem('bac1');

    const back2 = document.getElementById('back2');
    back2.value =  localStorage.getItem('bac1')	;

};



back2.onchange = () => {
    const color1 = colorBack2.style.background = back2.value;
    localStorage.setItem('bac1', color1);
    

};