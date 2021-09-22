// Clock 
timer()
function timer() {
    let date = Date().slice(0 , 15);
    let real = Date().slice(16, 24);
    let timeUi = document.getElementById('time').innerHTML = real;
    let dateUi = document.getElementById('date').innerHTML = date;
}
function color() {
    let timeUi = document.getElementById('time'); 
    let dateUi = document.getElementById('date');
}
setInterval(timer, 1000);

const f1 = ()=>{

}
